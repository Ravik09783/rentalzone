import React, { useState } from "react";
import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";


const Bill = () => {
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const addItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      { description: "", qty: 1, rate: 0, amount: 0 },
    ]);
  };

  const handleInputChange = (
    index,
    field,
    value
  ) => {
    const updatedItems = invoiceItems.map((item, i) =>
      i === index
        ? {
            ...item,
            [field]: value,
            amount:
              field === "rate" || field === "qty"
                ? item.qty * Number(value)
                : item.amount,
          }
        : item
    );
    setInvoiceItems(updatedItems);
  };

  const calculateTotal = () => {
    return invoiceItems.reduce((sum, item) => sum + item.amount, 0);
  };

  // const numberToWords = (num: number): string => {
  //   // This is a simplified version - you might want to implement a more complete solution
  //   const units = [
  //     "",
  //     "One",
  //     "Two",
  //     "Three",
  //     "Four",
  //     "Five",
  //     "Six",
  //     "Seven",
  //     "Eight",
  //     "Nine",
  //   ];
  //   const teens = [
  //     "Ten",
  //     "Eleven",
  //     "Twelve",
  //     "Thirteen",
  //     "Fourteen",
  //     "Fifteen",
  //     "Sixteen",
  //     "Seventeen",
  //     "Eighteen",
  //     "Nineteen",
  //   ];
  //   const tens = [
  //     "",
  //     "Ten",
  //     "Twenty",
  //     "Thirty",
  //     "Forty",
  //     "Fifty",
  //     "Sixty",
  //     "Seventy",
  //     "Eighty",
  //     "Ninety",
  //   ];

  //   if (num === 0) return "Zero";
  //   if (num < 10) return units[num];
  //   if (num < 20) return teens[num - 10];
  //   if (num < 100) return tens[Math.floor(num / 10)] + " " + units[num % 10];
  //   if (num < 1000)
  //     return (
  //       units[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100)
  //     );
  //   return "Amount in words: " + num; // Simplified for demo
  // };

  const numberToWords = (num) => {
    if (num === 0) return "Zero Rupees Only";
    
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    
    const convertLessThanThousand = (n) => {
      if (n === 0) return "";
      if (n < 10) return units[n];
      if (n < 20) return teens[n - 10];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + units[n % 10] : "");
      return units[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " " + convertLessThanThousand(n % 100) : "");
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
        result += (result ? " " : "") + convertLessThanThousand(thousand) + " Thousand";
      }
      if (hundred > 0) {
        result += (result ? " " : "") + convertLessThanThousand(hundred) + " Hundred";
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

    // Mobile numbers vertically aligned with proper indentation
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Mob.: 7888915584", 140, 15); // First line with "Mob.:"
    doc.text("7986584344", 150, 20); // Second number indented to align with numbers
    doc.text("9872556139", 150, 25); // Third number indented to align with numbers

    // Company name and details
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("BHARDWAJ ELECTRICALS", 70, 35);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
 
    // Bold "Deals in :" label with normal text for the description
    doc.setFont("helvetica", "bold");
    doc.text("Deals in :", 14, 42);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Audio / Visual For Events/Conferences/ Exhibitions/Seminars",
      35, // Adjusted x-position to align after "Deals in :"
      42
    );
    doc.text("All Electrical Accessories Retail Trade", 14, 47);
    // doc.text("Address: Shop No. - 3 Jamali Enclave Zirakpur Bhabat Road Mohali -140603", 14, 52);
    // Bold Address label with normal text value
    doc.setFont("helvetica", "bold");
    doc.text("Address:", 14, 52);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Shop No. - 3 Jamali Enclave Zirakpur Bhabat Road Mohali -140603",
      35,
      52
    );
    // doc.text("Email ID: bhardwajelectrical2023@gmail.com", 14, 57);
    // Bold Email ID label with normal text value
    doc.setFont("helvetica", "bold");
    doc.text("Email ID:", 14, 57);
    doc.setFont("helvetica", "normal");
    doc.text("bhardwajelectrical2023@gmail.com", 35, 57);

    // Invoice details
    doc.text(`Invoice No.: ${invoiceNo}`, 14, 67);
    doc.text(`Invoice Date: ${invoiceDate}`, 14, 72);
    doc.text(`M/s ${customerName}`, 100, 67);
    doc.text(`Address: ${customerAddress}`, 100, 72);
    doc.text(`Phone Number: ${customerPhone}`, 100, 77);

    // Table header
    doc.setFont("helvetica", "bold");
    doc.text("S.No.", 14, 87);
    doc.text("DESCRIPTION", 30, 87);
    doc.text("Qty.", 130, 87);
    doc.text("Rate", 150, 87);
    doc.text("Amount", 170, 87);

    // Draw horizontal line
    doc.line(14, 90, 190, 90);

    // Table content
    let yPos = 95;
    invoiceItems.forEach((item, index) => {
      doc.setFont("helvetica", "normal");
      doc.text((index + 1).toString(), 14, yPos);
      doc.text(item.description, 30, yPos);
      doc.text(item.qty.toString(), 130, yPos);
      doc.text(item.rate.toString(), 150, yPos);
      doc.text(item.amount.toString(), 170, yPos);
      yPos += 7;
    });

    // Total line
    doc.setFont("helvetica", "bold");
    doc.line(14, yPos, 190, yPos);
    yPos += 7;
    doc.text("Total", 130, yPos);
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

  return (
    <div className="max-w-4xl mx-auto p-5">
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
                  value={item.qty}
                  onChange={(e) =>
                    handleInputChange(index, "qty", Number(e.target.value))
                  }
                  className="w-full p-1 text-center"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) =>
                    handleInputChange(index, "rate", Number(e.target.value))
                  }
                  className="w-full p-1 text-center"
                />
              </td>
              <td className="border px-2 py-1 text-center">{item.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100">
            <td colSpan={4} className="border px-2 py-1 text-right font-bold">
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
    </div>
  );
};

export default Bill;
