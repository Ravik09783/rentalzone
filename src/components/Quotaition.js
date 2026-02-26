import React, { useState } from "react";
import jsPDF from "jspdf";
import {ganesha, stamp} from "../assets/base64/base64";
import {
  FaFileInvoice,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaAddressCard,
} from "react-icons/fa";

const Quotaition = () => {
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [enventVenue, setEventVenue] = useState('');
  const imgData = ganesha;

  const addItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      { description: "", qty: '', days: '', rate: '', amount: '' },
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

  // const handleChange = (index, field, value) => {
  //   setInvoiceItems((prevItems) => {
  //     return prevItems.map((item, i) => {
  //       if (i === index) {
  //         const updatedItem = {
  //           ...item,
  //           [field]: value,
  //         };
  
  //         // Ensure Days, Qty, and Rate are converted to numbers before calculation
  //         const days = parseFloat(updatedItem.days) || 0;
  //         const qty = parseFloat(updatedItem.qty) || 0;
  //         const rate = parseFloat(updatedItem.rate) || 0;
  
  //         // Update the amount dynamically
  //         updatedItem.amount = days * qty * rate;
  
  //         return updatedItem;
  //       }
  //       return item;
  //     });
  //   });
  // };
  
  const handleChange = (index, field, value) => {
  setInvoiceItems((prevItems) => {
    return prevItems.map((item, i) => {
      if (i === index) {
        const updatedItem = {
          ...item,
          [field]: value,
        };

        const days = parseFloat(updatedItem.days);
        const qty = parseFloat(updatedItem.qty);
        const rate = parseFloat(updatedItem.rate);

        if (!isNaN(days) && !isNaN(qty) && !isNaN(rate)) {
          updatedItem.amount = days * qty * rate;
        } else {
          updatedItem.amount = ""; // keep it blank
        }

        return updatedItem;
      }
      return item;
    });
  });
};


const calculateTotal = () => {
  if (!invoiceItems || invoiceItems.length === 0) return 0;

  return invoiceItems
    .filter((item) => item.days && item.qty && item.rate)
    .reduce((total, item) => {
      const days = parseFloat(item.days);
      const qty = parseFloat(item.qty);
      const rate = parseFloat(item.rate);

      if (isNaN(days) || isNaN(qty) || isNaN(rate)) return total;

      return total + days * qty * rate;
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

    // Function to add watermark to current page
    const addWatermark = () => {
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        
        // Watermark settings
        doc.setFont("helvetica", "bold");
        doc.setFontSize(50);
        doc.setTextColor(230, 230, 230); // Light gray
        
        // Calculate center position
        const centerX = pageWidth / 2;
        const centerY = pageHeight / 2;
        
        // Draw single centered watermark
        doc.text("QUOTATION", centerX, centerY, {
            angle: 45,
            align: 'center'
        });
        
        // Reset text settings
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
    };

    // Add watermark to first page
    addWatermark();

    // Header with contact numbers
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Quotation", 14, 15);
    
    // Add logo/image
    const pxToMm = 0.264583;
    const imgWidth = 80 * pxToMm;
    const imgHeight = 80 * pxToMm;
    const pageWidth = doc.internal.pageSize.getWidth();
    const imgX = (pageWidth - imgWidth) / 2;
    doc.addImage(imgData, 'JPEG', imgX, 5, imgWidth, imgHeight);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Mob", 160, 15);
    doc.setFont("helvetica", "normal");
    doc.text("7888915584", 170, 15);
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
    doc.text("Event Venue:  ", 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(enventVenue, 38, yPos);
    yPos += 10;

    // Invoice Details
    doc.setFont("helvetica", "bold");
    doc.text(`Quotation No.:`, 14, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(invoiceNo, 40, yPos);
    yPos += 8;

    doc.setFont("helvetica", "bold");
    doc.text(`Quotation Date:`, 14, yPos);
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
        "1. This quotation is valid for 30 days from the date of issue.",
        "2. The company reserves the right to cancel this quotation at any time without prior notice.",
        "3. Payment is due within 7 days from invoice date.",
        "4. Interest @18% p.a. will be charged on overdue payments.",
        "5. Goods once sold will not be taken back.",
        "6. All disputes subject to Mohali jurisdiction only.",
        "7. Rental equipment must be returned in same condition as delivered.",
        "8. Security deposit is refundable after equipment return and inspection.",
        "9. Client is responsible for any damage/loss during rental period.",
        "10. Prices inclusive of all taxes unless specified otherwise.",
        "11. Payment via NEFT/RTGS/Cheque in favor of BHARDWAJ ELECTRICALS.",
        "12. Original invoice must be produced for any service claims.",
        "13. Installation charges extra unless specifically mentioned.",
        "14. Weekend/holiday rates may apply for event support services.",
      ];

    terms.forEach(term => {
      if(yPos > 270) { // Check if we need a new page
        doc.addPage();
        yPos = 20;
        addWatermark(); // Add watermark to new page
      }
      doc.text(term, 16, yPos += 6);
    });

    // Footer
    doc.setFontSize(10);
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Fixed position for "E. & O. E." (left side)
    doc.text("E. & O. E.", 14, pageHeight - 20);
    
    // Fixed position for company stamp (right side)
    // doc.text("For BHARDWAJ ELECTRICALS", pageWidth - 60, pageHeight - 20);
    
    // // Signature line (fixed position relative to page bottom)
    // doc.setFontSize(12);
    // const signatureY = pageHeight - 10;
    // doc.line(pageWidth - 60, signatureY, pageWidth - 10, signatureY);
    // doc.text("Authorized Signatory", pageWidth - 45, signatureY + 5);

      const stampWidth = 50;
  const stampHeight = 30;
  const pageWidthStamp = doc.internal.pageSize.getWidth();
  const stampX = pageWidthStamp - 50;
  const stampY = doc.internal.pageSize.getHeight() - 40;

  doc.addImage(stamp, "JPEG", stampX, stampY, stampWidth, stampHeight);

    doc.save(`quotation_${invoiceNo}.pdf`);  // Changed filename to quotation_
};

const removeItem = (indexToRemove) => {
  setInvoiceItems((prev) => prev.filter((_, idx) => idx !== indexToRemove));
};

  return (
    <>
     <div className="max-w-4xl mx-auto ">
      <h2 className="text-2xl font-bold mb-4">Quotation Generator</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="mb-1 text-gray-700">
                          <span className="flex items-center gap-2">
                            <FaFileInvoice /> Quotation No.
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
                            <FaCalendarAlt /> Quotation Date
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
          onChange={(e) => handleChange(index, "days", e.target.valueAsNumber || 0)}
          className="w-full p-1 text-center"
          min="0"
        />
      </td>
      <td className="border px-2 py-1">
        <input
          type="number"
          value={item.qty}
          onChange={(e) => handleChange(index, "qty", e.target.valueAsNumber || 0)}
          className="w-full p-1 text-center"
          min="0"
        />
      </td>
      <td className="border px-2 py-1">
        <input
  type="text"
  value={item.rate}
  onChange={(e) => handleChange(index, "rate", e.target.value)}
  className="w-full p-1 text-center"
/>

      </td>
      <td className="border px-2 py-1 text-center">{item.amount}</td>
      <td className="border px-2 py-1 text-center">
        <button
          onClick={() => removeItem(index)}
          className="text-red-600 hover:underline"
        >
          Remove
        </button>
      </td>
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
            Download Quotation
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Quotaition;