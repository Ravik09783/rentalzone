import React, { useEffect, useState, useCallback } from "react";
import { ganesha, paymentQR, stamp } from "../assets/base64/base64";
import Quotaition from "../components/Quotaition";
import {
  FaFileInvoice,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaAddressCard,
  FaPlus,
  FaDownload,
  FaEdit,
  FaSearch,
} from "react-icons/fa";
import { supabase } from "../supabase/supabaseClient";
import {
  addInvoiceToDB,
  calculateTotal,
  generatePDF,
  numberToWords,
} from "../utils/utils";

const initialItem = {
  description: "",
  qty: "",
  days: "",
  rate: "",
  amount: "",
};

const Bill = () => {
  const adminEmail = "1223334444";
  const [state, setState] = useState({
    invoiceItems: [],
    invoiceNo: "",
    invoiceDate: new Date().toISOString().split("T")[0],
    error: "",
    customerName: "",
    customerAddress: "",
    customerPhone: "",
    isAdmin: Boolean(localStorage.getItem("isAdmin")),
    email: "",
    activeTab: "tab1",
    isOpen: false,
    eventDate: new Date().toISOString().split("T")[0],
    enventVenue: "",
    editMode: false,
    searchInvoiceNo: "",
    searchResults: [],
    showSearch: false,
  });

  const {
    invoiceItems,
    invoiceNo,
    invoiceDate,
    error,
    customerName,
    customerAddress,
    customerPhone,
    isAdmin,
    email,
    activeTab,
    isOpen,
    eventDate,
    enventVenue,
    editMode,
    searchInvoiceNo,
    searchResults,
    showSearch,
  } = state;

  const imgData = ganesha;
  const stampImageData = stamp;

  const getInvoiceNumber = useCallback(async () => {
    const { data, error: fetchError } = await supabase
      .from("invoice")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1);

    if (fetchError) {
      console.error("Error fetching latest invoice:", fetchError);
    } else {
      setState((prev) => ({
        ...prev,
        invoiceNo: data[0]?.id + 1 || 1,
      }));
    }
  }, []);

  useEffect(() => {
    getInvoiceNumber();
  }, [getInvoiceNumber]);

  const addItem = () => {
    setState((prev) => ({
      ...prev,
      invoiceItems: [...prev.invoiceItems, { ...initialItem }],
    }));
  };

  const handleInputChange = useCallback((index, field, value) => {
    setState((prev) => {
      const updatedItems = prev.invoiceItems.map((item, i) => {
        if (i === index) {
          const updatedItem = {
            ...item,
            [field]: value,
          };

          // if (["rate", "qty", "days"].includes(field)) {
          //   const days = parseFloat(updatedItem.days) || 0;
          //   const qty = parseFloat(updatedItem.qty) || 0;
          //   const rate = parseFloat(updatedItem.rate) || 0;
          //   updatedItem.amount = days * qty * rate;
          // }

          if (["rate", "qty", "days"].includes(field)) {
            const days = parseFloat(updatedItem.days);
            const qty = parseFloat(updatedItem.qty);
            const rate = parseFloat(updatedItem.rate);

            if (!isNaN(days) && !isNaN(qty) && !isNaN(rate)) {
              updatedItem.amount = days * qty * rate;
            } else {
              updatedItem.amount = "";
            }
          }

          return updatedItem;
        }
        return item;
      });

      return { ...prev, invoiceItems: updatedItems };
    });
  }, []);

  const handleGeneratePDF = useCallback(async () => {
    await generatePDF(
      invoiceItems,
      imgData,
      eventDate,
      enventVenue,
      invoiceNo,
      invoiceDate,
      customerName,
      customerAddress,
      customerPhone,
      stampImageData,
      '',
      paymentQR,
      'Canara Bank',
      3299101002851,
      'CNRB0003299'
    );

    if (editMode) {
      // Update existing invoice in Supabase
      const { error: updateError } = await supabase
        .from("invoice")
        .update({
          event_date: eventDate,
          customer_phone: customerPhone,
          event_venue: enventVenue,
          customer_name: customerName,
          customer_address: customerAddress,
          items: invoiceItems,
          invoice_date: invoiceDate,
          updated_at: new Date().toISOString(),
          amount: calculateTotal(invoiceItems),
        })
        .eq("id", invoiceNo);

      if (updateError) {
        console.error("Error updating invoice:", updateError);
        return;
      }
      // alert('Invoice updated successfully!');
    } else {
      // Create new invoice in Supabase
      await addInvoiceToDB(
        eventDate,
        customerPhone,
        enventVenue,
        customerName,
        customerAddress,
        invoiceItems,
        invoiceNo,
        invoiceDate
      );
      getInvoiceNumber();
    }
  }, [
    invoiceItems,
    imgData,
    eventDate,
    enventVenue,
    invoiceNo,
    invoiceDate,
    customerName,
    customerAddress,
    customerPhone,
    stampImageData,
    getInvoiceNumber,
    editMode,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminEmail === email) {
      setState((prev) => ({
        ...prev,
        isAdmin: true,
        error: "",
      }));
      localStorage.setItem("isAdmin", true);
    } else {
      setState((prev) => ({
        ...prev,
        error: "You have entered the wrong PIN",
      }));
    }
  };

  const handleChange = (field, value) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const toggleModal = () => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const switchTab = (tab) => {
    setState((prev) => ({ ...prev, activeTab: tab }));
  };

  const toggleEditMode = () => {
    setState((prev) => ({
      ...prev,
      editMode: !prev.editMode,
      showSearch: !prev.editMode ? true : false,
      searchResults: [],
      searchInvoiceNo: "",
    }));
  };

  const handleSearchInvoice = async () => {
    const { data, error } = await supabase
      .from("invoice")
      .select("*")
      .eq("id", searchInvoiceNo);

    if (error) {
      console.error("Error searching invoice:", error);
      return;
    }

    if (data && data.length > 0) {
      setState((prev) => ({
        ...prev,
        searchResults: data,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        searchResults: [],
      }));
    }
  };

  const loadInvoiceForEdit = (invoice) => {
    setState((prev) => ({
      ...prev,
      invoiceNo: invoice.id,
      invoiceDate: invoice.invoice_date,
      eventDate: invoice.event_date,
      enventVenue: invoice.event_venue,
      customerName: invoice.customer_name,
      customerAddress: invoice.customer_address,
      customerPhone: invoice.customer_phone,
      invoiceItems: invoice.items || [],
      showSearch: false,
    }));
  };

  const resetForm = () => {
    setState((prev) => ({
      ...prev,
      invoiceItems: [],
      invoiceNo: "",
      invoiceDate: new Date().toISOString().split("T")[0],
      customerName: "",
      customerAddress: "",
      customerPhone: "",
      eventDate: new Date().toISOString().split("T")[0],
      enventVenue: "",
      editMode: false,
      searchInvoiceNo: "",
      searchResults: [],
      showSearch: false,
    }));
    getInvoiceNumber();
  };

  const handleDeleteRow = (index) => {
    setState((prev) => {
      const updatedItems = prev.invoiceItems.filter((_, i) => i !== index);
      return { ...prev, invoiceItems: updatedItems };
    });
  };

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <button
          onClick={toggleModal}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Admin Login
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96 relative">
              <button
                onClick={toggleModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                Login
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Enter your Pin
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Pin"
                    value={email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  {error && <p className="text-red-500">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="relative inline-flex bg-gray-200 rounded-full p-1 w-full max-w-md shadow-md mb-5">
        <span
          className={`absolute top-1 left-1 h-[90%] w-1/2 bg-white rounded-full shadow transition-all duration-300 ease-in-out
            ${activeTab === "tab2" ? "translate-x-full" : "translate-x-0"}`}
        ></span>

        <button
          className={`relative z-10 w-1/2 py-2 px-4 text-sm sm:text-base font-medium transition-all duration-300 rounded-full
            ${
              activeTab === "tab1"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          onClick={() => switchTab("tab1")}
        >
          Create Invoice
        </button>
        <button
          className={`relative z-10 w-1/2 py-2 px-4 text-sm sm:text-base font-medium transition-all duration-300 rounded-full
            ${
              activeTab === "tab2"
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          onClick={() => switchTab("tab2")}
        >
          Create Quotation
        </button>
      </div>

      {activeTab === "tab1" ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {editMode ? "Edit Invoice" : "Invoice Generator"}
            </h2>
            <button
              onClick={toggleEditMode}
              className={`px-4 py-2 rounded flex items-center gap-2 ${
                editMode ? "bg-red-500" : "bg-yellow-500"
              } text-white`}
            >
              <FaEdit /> {editMode ? "Cancel Edit" : "Edit Invoice"}
            </button>
          </div>

          {showSearch && (
            <div className="mb-6 p-4 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold mb-3">Search Invoice</h3>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Enter Invoice No."
                  value={searchInvoiceNo}
                  onChange={(e) =>
                    handleChange("searchInvoiceNo", e.target.value)
                  }
                  className="flex-1 p-2 border rounded"
                />
                <button
                  onClick={handleSearchInvoice}
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                >
                  <FaSearch /> Search
                </button>
              </div>

              {searchResults.length > 0 && (
                <div className="border rounded">
                  <table className="w-full">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="p-2 text-left">Invoice No.</th>
                        <th className="p-2 text-left">Customer</th>
                        <th className="p-2 text-left">Date</th>
                        <th className="p-2 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResults.map((invoice) => (
                        <tr
                          key={invoice.id}
                          className="border-t hover:bg-gray-100"
                        >
                          <td className="p-2">{invoice.id}</td>
                          <td className="p-2">{invoice.customer_name}</td>
                          <td className="p-2">{invoice.invoice_date}</td>
                          <td className="p-2">
                            <button
                              onClick={() => loadInvoiceForEdit(invoice)}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              Load
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {!showSearch && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <InputField
                  label="Invoice No."
                  icon={<FaFileInvoice />}
                  type="text"
                  value={invoiceNo}
                  onChange={(e) => handleChange("invoiceNo", e.target.value)}
                  disabled={editMode}
                />
                <InputField
                  label="Invoice Date"
                  icon={<FaCalendarAlt />}
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => handleChange("invoiceDate", e.target.value)}
                />
                <InputField
                  label="Event Venue"
                  icon={<FaMapMarkerAlt />}
                  type="text"
                  value={enventVenue}
                  onChange={(e) => handleChange("enventVenue", e.target.value)}
                />
                <InputField
                  label="Event Date"
                  icon={<FaCalendarAlt />}
                  type="date"
                  value={eventDate}
                  onChange={(e) => handleChange("eventDate", e.target.value)}
                />
                <InputField
                  label="Customer Name (M/s)"
                  icon={<FaUser />}
                  type="text"
                  value={customerName}
                  onChange={(e) => handleChange("customerName", e.target.value)}
                />
                <InputField
                  label="Customer Phone"
                  icon={<FaPhone />}
                  type="text"
                  value={customerPhone}
                  onChange={(e) =>
                    handleChange("customerPhone", e.target.value)
                  }
                />
                <div className="md:col-span-2">
                  <label className="mb-1 text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaAddressCard /> Customer Address
                    </span>
                  </label>
                  <textarea
                    value={customerAddress}
                    onChange={(e) =>
                      handleChange("customerAddress", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    rows={2}
                  />
                </div>
              </div>

              <InvoiceTable
                invoiceItems={invoiceItems}
                handleInputChange={handleInputChange}
                handleDeleteRow={handleDeleteRow}
              />

              <div className="mb-6">
                <label className="block mb-1 text-gray-700 font-medium">
                  Rupees in words:
                </label>
                <div className="p-2 border rounded bg-gray-50 min-h-10">
                  {numberToWords(calculateTotal(invoiceItems))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex gap-2">
                  <button
                    onClick={addItem}
                    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                  >
                    <FaPlus /> Add Item
                  </button>
                  {editMode && (
                    <button
                      onClick={resetForm}
                      className="bg-gray-500 text-white px-4 py-2 rounded flex items-center gap-2"
                    >
                      New Invoice
                    </button>
                  )}
                </div>
                <button
                  onClick={handleGeneratePDF}
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2"
                >
                  <FaDownload /> {editMode ? "Update PDF" : "Download PDF"}
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <Quotaition />
      )}
    </div>
  );
};

const InputField = ({
  label,
  icon,
  type,
  value,
  onChange,
  disabled = false,
}) => (
  <div>
    <label className="mb-1 text-gray-700">
      <span className="flex items-center gap-2">
        {icon} {label}
      </span>
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded disabled:bg-gray-100"
      disabled={disabled}
    />
  </div>
);

const InvoiceTable = ({ invoiceItems, handleInputChange, handleDeleteRow }) => (
  <table className="w-full border border-gray-300 mb-4 text-sm">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1 w-10">S.No</th>
        <th className="border px-2 py-1">Description</th>
        <th className="border px-2 py-1 w-20">Days</th>
        <th className="border px-2 py-1 w-20">Qty</th>
        <th className="border px-2 py-1 w-20">Rate</th>
        <th className="border px-2 py-1 w-20">Amount</th>
        <th className="border px-2 py-1 w-12">Delete</th>
      </tr>
    </thead>
    <tbody>
      {invoiceItems.map((item, index) => (
        <tr key={index}>
          <td className="border px-2 py-1 text-center">{index + 1}</td>
          <td className="border px-2 py-1">
            <input
              type="text"
              value={item.description}
              onChange={(e) =>
                handleInputChange(index, "description", e.target.value)
              }
              className="w-full p-1"
            />
          </td>
          <td className="border px-2 py-1">
            <input
              type="number"
              value={item.days}
              onChange={(e) => handleInputChange(index, "days", e.target.value)}
              className="w-full p-1 text-center"
            />
          </td>
          <td className="border px-2 py-1">
            <input
              type="number"
              value={item.qty}
              onChange={(e) => handleInputChange(index, "qty", e.target.value)}
              className="w-full p-1 text-center"
            />
          </td>
          <td className="border px-2 py-1">
            <input
              type="number"
              value={item.rate}
              onChange={(e) => handleInputChange(index, "rate", e.target.value)}
              className="w-full p-1 text-center"
            />
          </td>
          <td className="border px-2 py-1 text-center">{item.amount}</td>
          <td className="border px-2 py-1 text-center">
            <button
              onClick={() => handleDeleteRow(index)}
              className="text-red-500 hover:text-red-700 font-bold"
              title="Delete row"
            >
              ✕
            </button>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr className="bg-gray-100">
        <td colSpan={6} className="border px-2 py-1 text-right font-bold">
          Total
        </td>
        <td className="border px-2 py-1 text-center font-bold">
          {calculateTotal(invoiceItems)}
        </td>
      </tr>
    </tfoot>
  </table>
);

export default Bill;
