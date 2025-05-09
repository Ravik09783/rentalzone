import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import {ganesha, stamp} from "../assets/base64/base64";
import Quotaition from "../components/Quotaition";
import GoldCoin from "../assets/gallery/coin.gif";

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
import { toast } from "react-toastify";

const Bill = () => {
  const adminEmail = 1223334444;
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [error, setError] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("tab1");
  const [isOpen, setIsOpen] = useState(false);
  const [showCoinRain, setShowCoinRain] = useState(false);

  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [enventVenue, setEventVenue] = useState("");
  const imgData = ganesha;
  const stampImageData = stamp;

  const [coins, setCoins] = useState([]);

  useEffect(()=>{
    getInvoiceNumber();
  },[])

  useEffect(() => {
    if (showCoinRain) {
      let coinIndex = 0;
      let coinsTemp = [];
      const interval = setInterval(() => {
        const x = Math.floor(Math.random() * 400 - 200);
        const y = Math.floor(Math.random() * -300 - 100);
        coinsTemp.push({ id: coinIndex++, x, y });
        setCoins([...coinsTemp]);
      }, 100); // New coin every 100ms

      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 2500); // Blast lasts 2.5 seconds

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [showCoinRain]);

  const addItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      { description: "", qty: 1, days: 1, rate: 0, amount: 0 },
    ]);
  };

  useEffect(() => {
    if (window) {
      if (window.localStorage.getItem("isAdmin")) {
        setIsAdmin(true);
      }
    }
  }, []);

  const getInvoiceNumber = async()=>{
    const { data, error } = await supabase
  .from('invoice')
  .select('*')
  .order('created_at', { ascending: false }) // sort by created_at descending
  .limit(1); // only get the latest row

if (error) {
  console.error("Error fetching latest invoice:", error);
} else {
  console.log("Latest invoice:", data[0]);
  setInvoiceNo(data[0]?.id + 1)
}

  }

  // const getAllInvoiceList = async()=>{
  //   const {data} = await supabase.from('invoice').select('*');
  //   console.log("Your invoice data",data)
  // }

  const addInvoiceToDB = async()=>{
    const {data, error} = await supabase.from('invoice').insert({
     created_at: new Date(),
     updated_at: new Date(),
     event_date:eventDate,
     amount:calculateTotal(),
     customer_phone:customerPhone,
     invoice_date:new Date(),
     event_venue:enventVenue,
     customer_name:customerName,
     customer_address:customerAddress,
     items:invoiceItems
    }).single()

    if(error){
      console.error("We are unble to update data in supabase");
      return;
    }
    console.log("Data saved on supabase successfully",data)
  }

  const handleInputChange = (index, field, value) => {
    const updatedItems = invoiceItems.map((item, i) =>
      i === index
        ? {
            ...item,
            [field]: value,
            amount:
              field === "rate" || field === "qty" || field === "days"
                ? item.days *
                  item.qty *
                  (field === "rate" ? Number(value) : item.rate)
                : item.amount,
          }
        : item
    );
    setInvoiceItems(updatedItems);
  };

  const handleChange = (index, field, value) => {
    setInvoiceItems((prevItems) => {
      return prevItems.map((item, i) => {
        if (i === index) {
          const updatedItem = {
            ...item,
            [field]: value,
          };

          // Ensure Days, Qty, and Rate are converted to numbers before calculation
          const days = parseFloat(updatedItem.days) || 0;
          const qty = parseFloat(updatedItem.qty) || 0;
          const rate = parseFloat(updatedItem.rate) || 0;

          // Update the amount dynamically
          updatedItem.amount = days * qty * rate;

          return updatedItem;
        }
        return item;
      });
    });
  };

  const calculateTotal = () => {
    if (!invoiceItems || invoiceItems.length === 0) return 0;
    console.log("Your invoice items", invoiceItems);
    return invoiceItems.reduce((total, item) => {
      return (
        total +
        parseFloat(item.qty) * parseFloat(item.rate) * parseFloat(item.days)
      );
    }, 0);
  };

  const numberToWords = (num) => {
    if (num === 0) return "Zero Rupees Only";

    const units = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const teens = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    const convertLessThanThousand = (n) => {
      if (n === 0) return "";
      if (n < 10) return units[n];
      if (n < 20) return teens[n - 10];
      if (n < 100)
        return (
          tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + units[n % 10] : "")
        );
      return (
        units[Math.floor(n / 100)] +
        " Hundred" +
        (n % 100 !== 0 ? " " + convertLessThanThousand(n % 100) : "")
      );
    };

    const convert = (n) => {
      if (n === 0) return "Zero";

      let result = "";
      const crore = Math.floor(n / 10000000);
      n %= 10000000;
      const lakh = Math.floor(n / 100000);
      n %= 100000;
      const thousand = Math.floor(n / 1000);
      n %= 1000;
      const hundred = Math.floor(n / 100);
      const remainder = n % 100;

      if (crore > 0) {
        result += convertLessThanThousand(crore) + " Crore";
      }
      if (lakh > 0) {
        result += (result ? " " : "") + convertLessThanThousand(lakh) + " Lakh";
      }
      if (thousand > 0) {
        result +=
          (result ? " " : "") + convertLessThanThousand(thousand) + " Thousand";
      }
      if (hundred > 0) {
        result +=
          (result ? " " : "") + convertLessThanThousand(hundred) + " Hundred";
      }
      if (remainder > 0) {
        result += (result ? " " : "") + convertLessThanThousand(remainder);
      }

      return result;
    };

    return convert(num) + " Rupees Only";
  };

  const generatePDF = async() => {
    if(invoiceItems.length === 0 || calculateTotal()===0){
      toast('Please add some items to genrate the bill and their price', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
        });
        return;
    }
    setShowCoinRain(true);
    // coinSound.play(); // Play the sound
    setTimeout(() => setShowCoinRain(false), 4000);
    const doc = new jsPDF();

    // Header with contact numbers
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("INVOICE", 14, 15);

    // Add logo/image
    const pxToMm = 0.264583;
    const imgWidth = 80 * pxToMm;
    const imgHeight = 80 * pxToMm;
    const pageWidth = doc.internal.pageSize.getWidth();
    const imgX = (pageWidth - imgWidth) / 2;
    doc.addImage(imgData, "JPEG", imgX, 5, imgWidth, imgHeight);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Mob.:", 160, 15);
    doc.setFont("helvetica", "normal");
    doc.text(" 7888915584", 169, 15);
    doc.text("7986584344", 170, 20);

    // Company name and details
    doc.setFont("times", "bold");
    doc.setFontSize(20);
    doc.text("BHARDWAJ ELECTRICALS", 61, 35);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    // Deals in
    doc.setFont("helvetica", "bold");
    doc.text("Deals in :", 14, 42);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Audio / Visual For Events/Conferences/ Exhibitions/Seminars",
      35,
      42
    );
    doc.text("All Electrical Accessories Retail Trade", 14, 47);

    // Address
    doc.setFont("helvetica", "bold");
    doc.text("Address:", 14, 52);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Shop No. - 3 Jarnail Enclave Zirakpur Bhabat Road Mohali -140603",
      35,
      52
    );

    let yPos = 57;

    // Email ID
    doc.setFont("helvetica", "bold");
    doc.text("Email ID:", 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text("bhardwajelectrical2023@gmail.com", 35, yPos);
    yPos += 8;

    // Event Date
    doc.setFont("helvetica", "bold");
    doc.text("Event Date:", 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(eventDate, 35, yPos);
    yPos += 8;

    // Event Venue
    doc.setFont("helvetica", "bold");
    doc.text("Event Venue:" + "  ", 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(enventVenue, 38, yPos);
    yPos += 10;

    // Invoice Details
    doc.setFont("helvetica", "bold");
    doc.text(`Invoice No.:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    // doc.text(invoiceNo, 40, yPos);
    doc.text(String(invoiceNo), 40, yPos); 
    yPos += 8;

    doc.setFont("helvetica", "bold");
    doc.text(`Invoice Date:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(invoiceDate, 40, yPos);
    yPos += 8;

    doc.text(`M/s ${customerName}`, 100, yPos - 16);
    doc.text(`Address: ${customerAddress}`, 100, yPos - 8);
    doc.text(`Phone Number: ${customerPhone}`, 100, yPos);
    yPos += 10;

    // Table Header
    doc.setFont("helvetica", "bold");
    doc.text("S.No.", 14, yPos);
    doc.text("DESCRIPTION", 30, yPos);
    doc.text("Days", 100, yPos);
    doc.text("Qty.", 120, yPos);
    doc.text("Rate", 140, yPos);
    doc.text("Amount", 170, yPos);
    yPos += 3;

    // Draw horizontal line
    doc.line(14, yPos, 190, yPos);
    yPos += 5;

    // Table content
    invoiceItems.forEach((item, index) => {
      doc.setFont("helvetica", "normal");
      doc.text((index + 1).toString(), 14, yPos);
      doc.text(item.description, 30, yPos);
      doc.text(item.days.toString(), 100, yPos);
      doc.text(item.qty.toString(), 120, yPos);
      doc.text(item.rate.toString(), 140, yPos);
      doc.text(item.amount.toString(), 170, yPos);
      yPos += 7;
    });

    // Total line
    doc.setFont("helvetica", "bold");
    doc.line(14, yPos, 190, yPos);
    yPos += 7;
    doc.text("Total", 140, yPos);
    doc.text(calculateTotal().toString(), 170, yPos);
    yPos += 10;

    // Rupees in words
    doc.text(`Rupees in words: ${numberToWords(calculateTotal())}`, 14, yPos);
    yPos += 15;

    // Standard Terms and Conditions as per Indian practices
    doc.setFont("helvetica", "bold");
    doc.text("Terms & Conditions:", 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);

    const terms = [
      "1. Payment is due within 15 days from invoice date.",
      "2. Interest @18% p.a. will be charged on overdue payments.",
      "3. Goods once sold will not be taken back.",
      "4. All disputes subject to Mohali jurisdiction only.",
      "5. Rental equipment must be returned in same condition as delivered.",
      "6. Security deposit is refundable after equipment return and inspection.",
      "7. Client is responsible for any damage/loss during rental period.",
      "8. Prices inclusive of all taxes unless specified otherwise.",
      "9. Payment via NEFT/RTGS/Cheque in favor of BHARDWAJ ELECTRICALS.",
      "10. Original invoice must be produced for any service claims.",
      "11. Installation charges extra unless specifically mentioned.",
      "12. Weekend/holiday rates may apply for event support services.",
    ];

    terms.forEach((term) => {
      if (yPos > 270) {
        // Check if we need a new page
        doc.addPage();
        yPos = 20;
      }
      doc.text(term, 16, (yPos += 6));
    });

    // Footer
        // Add logo/image
        // const pxToMm = 0.264583;
        // const imgWidth = 80 * pxToMm;
        // const imgHeight = 80 * pxToMm;
        // const pageWidth = doc.internal.pageSize.getWidth();
        // const imgX = (pageWidth - imgWidth) / 2;

            // Footer with company stamp image
    const stampWidth = 50; // Adjust width as needed
    const stampHeight = 30; // Adjust height as needed
    const pageWidthStamp = doc.internal.pageSize.getWidth();
    const stampX = pageWidthStamp - 50; // Position from right edge
    const stampY = doc.internal.pageSize.getHeight() - 40; // Position from bottom

    // Add your stamp image (replace 'stampImageData' with your actual image data)
    doc.addImage(stampImageData, 'JPEG', stampX, stampY, stampWidth, stampHeight);


    // doc.setFontSize(10);
    // yPos += 10;
    // doc.text("E. & O. E.", 14, yPos);
    // doc.text("For BHARDWAJ ELECTRICALS", 130, yPos);

    // // Signature line
    // doc.setFontSize(12);
    // yPos += 15;
    // doc.line(130, yPos, 190, yPos);
    // doc.text("Authorized Signatory", 150, yPos + 5);

    doc.save(`invoice_${invoiceNo}.pdf`);
    const data = await addInvoiceToDB();
    getInvoiceNumber()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I am called janu", email);
    if (adminEmail == email) {
      setIsAdmin(true);
      window.localStorage.setItem("isAdmin", true);
    } else {
      setError("You have entered the wrong PIN");
    }
  };

  return (
    <>
      {/* Rainy effect */}
      {/* D:\rental\new_rental\react_images_dnd\src\assets\gallery */}
      {/* Added the image for gold coin update, images will appear when the invoice is genrated */}
      {showCoinRain && (
        <div className="coin-rain">
          {coins.map((coin) => (
            <img
              key={coin.id}
              src={GoldCoin}
              alt="coin"
              className="coin"
              style={{
                "--x": coin.x,
                "--y": coin.y,
              }}
            />
          ))}
        </div>
      )}

      {isAdmin && (
        <div className="max-w-4xl mx-auto p-5">
          <div className="relative inline-flex bg-gray-200 rounded-full p-1 w-full max-w-md shadow-md mb-[20px]">
            {/* Sliding background */}
            <span
              className={`absolute top-1 left-1 h-[90%] w-1/2 bg-white rounded-full shadow transition-all duration-300 ease-in-out
      ${activeTab === "tab2" ? "translate-x-full" : "translate-x-0"}`}
            ></span>

            {/* Buttons */}
            <button
              className={`relative z-10 w-1/2 py-2 px-4 text-sm sm:text-base font-medium transition-all duration-300 rounded-full
      ${
        activeTab === "tab1"
          ? "text-blue-600"
          : "text-gray-600 hover:text-blue-500"
      }`}
              onClick={() => setActiveTab("tab1")}
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
              onClick={() => setActiveTab("tab2")}
            >
              Create Quotation
            </button>
          </div>

          {activeTab === "tab1" && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Invoice Generator
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="mb-1 text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaFileInvoice /> Invoice No.
                    </span>
                  </label>
                  <input
                    type="text"
                    value={invoiceNo}
                    onChange={(e) => setInvoiceNo(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="mb-1 text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> Invoice Date
                    </span>
                  </label>
                  <input
                    type="date"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="mb-1 text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt /> Event Venue
                    </span>
                  </label>
                  <input
                    type="text"
                    value={enventVenue}
                    onChange={(e) => setEventVenue(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="mb-1 text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> Event Date
                    </span>
                  </label>
                  <input
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="mb-1 text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaUser /> Customer Name (M/s)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="mb-1 text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaPhone /> Customer Phone
                    </span>
                  </label>
                  <input
                    type="text"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaAddressCard /> Customer Address
                    </span>
                  </label>
                  <textarea
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={2}
                  />
                </div>
              </div>

              {/* Table for Invoice Items */}
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
                      <td className="border px-2 py-1 text-center">
                        {index + 1}
                      </td>
                      <td className="border px-2 py-1">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          className="w-full p-1"
                        />
                      </td>
                      <td className="border px-2 py-1">
                        <input
                          type="number"
                          value={item.days}
                          onChange={(e) =>
                            handleChange(index, "days", e.target.value)
                          }
                          className="w-full p-1 text-center"
                          min="1"
                        />
                      </td>
                      <td className="border px-2 py-1">
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) =>
                            handleChange(index, "qty", e.target.value)
                          }
                          className="w-full p-1 text-center"
                        />
                      </td>
                      <td className="border px-2 py-1">
                        <input
                          type="number"
                          value={item.rate}
                          onChange={(e) =>
                            handleChange(index, "rate", e.target.value)
                          }
                          className="w-full p-1 text-center"
                        />
                      </td>
                      <td className="border px-2 py-1 text-center">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100">
                    <td
                      colSpan={5}
                      className="border px-2 py-1 text-right font-bold"
                    >
                      Total
                    </td>
                    <td className="border px-2 py-1 text-center font-bold">
                      {calculateTotal()}
                    </td>
                  </tr>
                </tfoot>
              </table>

              {/* Rupees in Words */}
              <div className="mb-6">
                <label className="block mb-1 text-gray-700 font-medium">
                  Rupees in words:
                </label>
                <div className="p-2 border rounded bg-gray-50 min-h-10">
                  {numberToWords(calculateTotal())}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <button
                  onClick={addItem}
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                >
                  <FaPlus /> Add Item
                </button>
                <button
                  onClick={generatePDF}
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2"
                >
                  <FaDownload /> Download PDF
                </button>
              </div>
            </>
          )}
          {activeTab === "tab2" && <Quotaition />}
        </div>
      )}

      {!isAdmin && (
        <>
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
            >
              Admin Login
            </button>

            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-8 w-96 relative">
                  <button
                    onClick={() => setIsOpen(false)}
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
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                      />
                      {error && <p className="text-[red]">{error}</p>}
                    </div>

                    {/* <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> */}

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
        </>
      )}
    </>
  );
};

export default Bill;
