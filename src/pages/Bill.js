import React, { useEffect, useState, useCallback } from "react";
import { ganesha, stamp } from "../assets/base64/base64";
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
} from "react-icons/fa";
import { supabase } from "../supabase/supabaseClient";
import { addInvoiceToDB, calculateTotal, generatePDF, numberToWords } from "../utils/utils";

const initialItem = {
  description: "",
  qty: 1,
  days: 1,
  rate: 0,
  amount: 0,
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
    isAdmin: Boolean(window.localStorage.getItem("isAdmin")),
    email: "",
    activeTab: "tab1",
    isOpen: false,
    eventDate: new Date().toISOString().split("T")[0],
    enventVenue: "",
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

          if (["rate", "qty", "days"].includes(field)) {
            const days = parseFloat(updatedItem.days) || 0;
            const qty = parseFloat(updatedItem.qty) || 0;
            const rate = parseFloat(updatedItem.rate) || 0;
            updatedItem.amount = days * qty * rate;
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
      stampImageData
    );
    await addInvoiceToDB(
      eventDate,
      customerPhone,
      enventVenue,
      customerName,
      customerAddress,
      invoiceItems
    );
    getInvoiceNumber();
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
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminEmail === email) {
      setState((prev) => ({
        ...prev,
        isAdmin: true,
        error: "",
      }));
      window.localStorage.setItem("isAdmin", true);
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
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
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
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Invoice Generator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputField
              label="Invoice No."
              icon={<FaFileInvoice />}
              type="text"
              value={invoiceNo}
              onChange={(e) => handleChange("invoiceNo", e.target.value)}
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
              onChange={(e) => handleChange("customerPhone", e.target.value)}
            />
            <div className="md:col-span-2">
              <label className="mb-1 text-gray-700">
                <span className="flex items-center gap-2">
                  <FaAddressCard /> Customer Address
                </span>
              </label>
              <textarea
                value={customerAddress}
                onChange={(e) => handleChange("customerAddress", e.target.value)}
                className="w-full p-2 border rounded"
                rows={2}
              />
            </div>
          </div>

          <InvoiceTable
            invoiceItems={invoiceItems}
            handleInputChange={handleInputChange}
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
            <button
              onClick={addItem}
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FaPlus /> Add Item
            </button>
            <button
              onClick={handleGeneratePDF}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FaDownload /> Download PDF
            </button>
          </div>
        </>
      ) : (
        <Quotaition />
      )}
    </div>
  );
};

const InputField = ({ label, icon, type, value, onChange }) => (
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
      className="w-full p-2 border rounded"
    />
  </div>
);

const InvoiceTable = ({ invoiceItems, handleInputChange }) => (
  <table className="w-full border border-gray-300 mb-4 text-sm">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-2 py-1 w-10">S.No</th>
        <th className="border px-2 py-1">Description</th>
        <th className="border px-2 py-1 w-20">Days</th>
        <th className="border px-2 py-1 w-20">Qty</th>
        <th className="border px-2 py-1 w-20">Rate</th>
        <th className="border px-2 py-1 w-20">Amount</th>
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
              min="1"
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
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr className="bg-gray-100">
        <td colSpan={5} className="border px-2 py-1 text-right font-bold">
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