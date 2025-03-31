import React, { useState } from "react";
import jsPDF from "jspdf";

const Bill = () => {
  const adminEmail = 'admin@gmail.com'
  const adminPassword = 'admin@123'
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isAdmin, setIsAdmin]= useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [enventVenue, setEventVenue] = useState('')

  const addItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      { description: "", qty: 1, days: 1, rate: 0, amount: 0 },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = invoiceItems.map((item, i) =>
      i === index
        ? {
            ...item,
            [field]: value,
            amount:
              field === "rate" || field === "qty" || field === "days"
                ? item.days * item.qty * (field === "rate" ? Number(value) : item.rate)
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
  console.log("Your invoice items", invoiceItems)
    return invoiceItems.reduce((total, item) => {
      return total + (parseFloat(item.qty) * parseFloat(item.rate)* parseFloat(item.days));
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

  const generatePDF = () => {
    const doc = new jsPDF();

    // Header with contact numbers
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("INVOICE", 14, 15);

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
    doc.text("Audio / Visual For Events/Conferences/ Exhibitions/Seminars", 35, 42);
    doc.text("All Electrical Accessories Retail Trade", 14, 47);

    // Address
    doc.setFont("helvetica", "bold");
    doc.text("Address:", 14, 52);
    doc.setFont("helvetica", "normal");
    doc.text("Shop No. - 3 Jarnail Enclave Zirakpur Bhabat Road Mohali -140603", 35, 52);

    let yPos = 57; // Start from here to avoid overlaps

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
    doc.text(invoiceNo, 40, yPos);
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
    doc.text("Days", 100, yPos);  // Added Days column
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
      doc.text(item.days.toString(), 100, yPos);  // Added Days value
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

    // Footer
    doc.text("E. & O. E.", 14, yPos);
    doc.text("Terms & Conditions:", 14, yPos + 5);
    doc.text("For BHARDWAJ ELECTRICALS", 130, yPos);
    doc.text("Signature", 167, yPos + 8);

    doc.save(`invoice_${invoiceNo}.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email === adminEmail && password === adminPassword){
      setIsAdmin(true)
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
    { isAdmin && <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Invoice Generator</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1">Invoice No.</label>
          <input
            type="text"
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Invoice Date</label>
          <input
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Event Vanue</label>
          <input
            type="text"
            value={enventVenue}
            onChange={(e) => setEventVenue(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Event Date</label>
          <input
            type="text"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Customer Name (M/s)</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Customer Phone</label>
          <input
            type="text"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="col-span-2">
          <label className="block mb-1">Customer Address</label>
          <textarea
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>
      </div>

      <table className="w-full border border-gray-300 mb-4">
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
                    onChange={(e) => handleChange(index, "days", e.target.value)}
                  className="w-full p-1 text-center"
                  min="1"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number"
                  value={item.qty}
                    onChange={(e) => handleChange(index, "qty", e.target.value)}
                  className="w-full p-1 text-center"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number"
                  value={item.rate}
                    onChange={(e) => handleChange(index, "rate", e.target.value)}
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
              {calculateTotal()}
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="flex justify-between mb-6">
        <div className="w-1/2">
          <label className="block mb-1">Rupees in words:</label>
          <div className="p-2 border rounded bg-gray-50 min-h-10">
            {numberToWords(calculateTotal())}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <button
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            + Add Item
          </button>
        </div>
        <div>
          <button
            onClick={generatePDF}
            className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>}

    {!isAdmin && <>
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

            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Login</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
    </>}
    </>
  );
};

export default Bill;