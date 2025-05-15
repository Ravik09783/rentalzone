import jsPDF from "jspdf";
import { toast } from "react-toastify";
import { supabase } from "../supabase/supabaseClient";

export const calculateTotal = (invoiceItems) => {
  if (!invoiceItems || invoiceItems.length === 0) return 0;
  console.log("Your invoice items", invoiceItems);
  return invoiceItems.reduce((total, item) => {
    return (
      total +
      parseFloat(item.qty) * parseFloat(item.rate) * parseFloat(item.days)
    );
  }, 0);
};

export const numberToWords = (num) => {
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

const formatToReadableDate = (dateInput) => {
  const date = new Date(dateInput);

  if (isNaN(date)) return "Invalid Date";

  const options = { year: "numeric", month: "long", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
};

export const addInvoiceToDB = async (
  eventDate,
  customerPhone,
  enventVenue,
  customerName,
  customerAddress,
  invoiceItems
) => {
  const { data, error } = await supabase
    .from("invoice")
    .insert({
      created_at: new Date(),
      updated_at: new Date(),
      event_date: eventDate,
      amount: calculateTotal(invoiceItems),
      customer_phone: customerPhone,
      invoice_date: new Date(),
      event_venue: enventVenue,
      customer_name: customerName,
      customer_address: customerAddress,
      items: invoiceItems,
    })
    .single();

  if (error) {
    console.error("We are unble to update data in supabase");
    return;
  }
  console.log("Data saved on supabase successfully", data);
};

// export const generatePDF = async (
//   invoiceItems,
//   imgData,
//   eventDate,
//   enventVenue,
//   invoiceNo,
//   invoiceDate,
//   customerName,
//   customerAddress,
//   customerPhone,
//   stampImageData
// ) => {
//   if (invoiceItems.length === 0 || calculateTotal(invoiceItems) === 0) {
//     toast("Please add some items to genrate the bill and their price", {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: 0,
//       theme: "light",
//     });
//     return;
//   }
//   // coinSound.play(); // Play the sound
//   const doc = new jsPDF();

//   // Header with contact numbers
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(12);
//   doc.text("INVOICE", 14, 15);

//   // Add logo/image
//   const pxToMm = 0.264583;
//   const imgWidth = 80 * pxToMm;
//   const imgHeight = 80 * pxToMm;
//   const pageWidth = doc.internal.pageSize.getWidth();
//   const imgX = (pageWidth - imgWidth) / 2;
//   doc.addImage(imgData, "JPEG", imgX, 5, imgWidth, imgHeight);

//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(10);
//   doc.setFont("helvetica", "bold");
//   doc.text("Mob.:", 160, 15);
//   doc.setFont("helvetica", "normal");
//   doc.text(" 7888915584", 169, 15);
//   doc.text("7986584344", 170, 20);

//   // Company name and details
//   doc.setFont("times", "bold");
//   doc.setFontSize(20);
//   doc.text("BHARDWAJ ELECTRICALS", 61, 35);

//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(10);

//   // Deals in
//   doc.setFont("helvetica", "bold");
//   doc.text("Deals in :", 14, 42);
//   doc.setFont("helvetica", "normal");
//   doc.text(
//     "Audio / Visual For Events/Conferences/ Exhibitions/Seminars",
//     35,
//     42
//   );
//   doc.text("All Electrical Accessories Retail Trade", 14, 47);

//   // Address
//   doc.setFont("helvetica", "bold");
//   doc.text("Address:", 14, 52);
//   doc.setFont("helvetica", "normal");
//   doc.text(
//     "Shop No. - 3 Jarnail Enclave Zirakpur Bhabat Road Mohali -140603",
//     35,
//     52
//   );

//   let yPos = 57;

//   // Email ID
//   doc.setFont("helvetica", "bold");
//   doc.text("Email ID:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text("bhardwajelectrical2023@gmail.com", 35, yPos);
//   yPos += 8;

//   // Event Date
//   doc.setFont("helvetica", "bold");
//   doc.text("Event Date:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(formatToReadableDate(eventDate), 35, yPos);
//   yPos += 8;

//   // Event Venue
//   doc.setFont("helvetica", "bold");
//   doc.text("Event Venue:" + "  ", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(enventVenue, 38, yPos);
//   yPos += 10;

//   // Invoice Details
//   doc.setFont("helvetica", "bold");
//   doc.text(`Invoice No.:`, 14, yPos);
//   doc.setFont("helvetica", "normal");
//   // doc.text(invoiceNo, 40, yPos);
//   doc.text(String(invoiceNo), 40, yPos);
//   yPos += 8;

//   doc.setFont("helvetica", "bold");
//   doc.text(`Invoice Date:`, 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(formatToReadableDate(invoiceDate), 40, yPos);
//   yPos += 8;

//   doc.text(`M/s ${customerName}`, 100, yPos - 16);
//   doc.text(`Address: ${customerAddress}`, 100, yPos - 8);
//   doc.text(`Phone Number: ${customerPhone}`, 100, yPos);
//   yPos += 10;

//   // Table Header
//   doc.setFont("helvetica", "bold");
//   doc.text("S.No.", 14, yPos);
//   doc.text("DESCRIPTION", 30, yPos);
//   doc.text("Days", 100, yPos);
//   doc.text("Qty.", 120, yPos);
//   doc.text("Rate", 140, yPos);
//   doc.text("Amount", 170, yPos);
//   yPos += 3;

//   // Draw horizontal line
//   doc.line(14, yPos, 190, yPos);
//   yPos += 5;

//   // Table content
//   invoiceItems.forEach((item, index) => {
//     doc.setFont("helvetica", "normal");
//     doc.text((index + 1).toString(), 14, yPos);
//     doc.text(item.description, 30, yPos);
//     doc.text(item.days.toString(), 100, yPos);
//     doc.text(item.qty.toString(), 120, yPos);
//     doc.text(item.rate.toString(), 140, yPos);
//     doc.text(item.amount.toString(), 170, yPos);
//     yPos += 7;
//   });

//   // Total line
//   doc.setFont("helvetica", "bold");
//   doc.line(14, yPos, 190, yPos);
//   yPos += 7;
//   doc.text("Total", 140, yPos);
//   doc.text(calculateTotal(invoiceItems).toString(), 170, yPos);
//   yPos += 10;

//   // Rupees in words
//   doc.text(
//     `Rupees in words: ${numberToWords(calculateTotal(invoiceItems))}`,
//     14,
//     yPos
//   );
//   yPos += 15;

//   // Standard Terms and Conditions as per Indian practices
//   doc.setFont("helvetica", "bold");
//   doc.text("Terms & Conditions:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(8);

//   const terms = [
//     "1. Payment is due within 15 days from invoice date.",
//     "2. Interest @18% p.a. will be charged on overdue payments.",
//     "3. Goods once sold will not be taken back.",
//     "4. All disputes subject to Mohali jurisdiction only.",
//     "5. Rental equipment must be returned in same condition as delivered.",
//     "6. Security deposit is refundable after equipment return and inspection.",
//     "7. Client is responsible for any damage/loss during rental period.",
//     "8. Prices inclusive of all taxes unless specified otherwise.",
//     "9. Payment via NEFT/RTGS/Cheque in favor of BHARDWAJ ELECTRICALS.",
//     "10. Original invoice must be produced for any service claims.",
//     "11. Installation charges extra unless specifically mentioned.",
//     "12. Weekend/holiday rates may apply for event support services.",
//   ];

//   terms.forEach((term) => {
//     if (yPos > 270) {
//       // Check if we need a new page
//       doc.addPage();
//       yPos = 20;
//     }
//     doc.text(term, 16, (yPos += 6));
//   });

//   // Footer with company stamp image
//   const stampWidth = 50; // Adjust width as needed
//   const stampHeight = 30; // Adjust height as needed
//   const pageWidthStamp = doc.internal.pageSize.getWidth();
//   const stampX = pageWidthStamp - 50; // Position from right edge
//   const stampY = doc.internal.pageSize.getHeight() - 40; // Position from bottom

//   doc.addImage(stampImageData, "JPEG", stampX, stampY, stampWidth, stampHeight);

//   doc.save(`invoice_${invoiceNo}.pdf`);
//   await addInvoiceToDB(
//     eventDate,
//     customerPhone,
//     enventVenue,
//     customerName,
//     customerAddress,
//     invoiceItems
//   );
// };


// export const generatePDF = async (
//   invoiceItems,
//   imgData,
//   eventDate,
//   enventVenue,
//   invoiceNo,
//   invoiceDate,
//   customerName,
//   customerAddress,
//   customerPhone,
//   stampImageData
// ) => {
//   if (invoiceItems.length === 0 || calculateTotal(invoiceItems) === 0) {
//     toast("Please add some items to genrate the bill and their price", {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: 0,
//       theme: "light",
//     });
//     return;
//   }

//   const doc = new jsPDF();
//   const pxToMm = 0.264583;
//   const pageWidth = doc.internal.pageSize.getWidth();
//   let yPos = 15;

//   // Add logo/image
//   const imgWidth = 80 * pxToMm;
//   const imgHeight = 80 * pxToMm;
//   const imgX = (pageWidth - imgWidth) / 2;
//   doc.addImage(imgData, "JPEG", imgX, 5, imgWidth, imgHeight);

//   // Invoice header
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(12);
//   doc.text("INVOICE", 14, yPos);

//   // Contact numbers on right
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(10);
//   doc.setFont("helvetica", "bold");
//   doc.text("Mob.:", 160, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text("7888915584", 169, yPos);
//   doc.text("7986584344", 170, yPos + 5);
//   yPos += 10;

//   // Company name
//   doc.setFont("times", "bold");
//   doc.setFontSize(20);
//   doc.text("BHARDWAJ ELECTRICALS", 61, yPos + 10); // Added +30 here
//   yPos += 20;

//   // Invoice details section
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(10);
//   doc.text(`Invoice No.:`, 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(String(invoiceNo), 40, yPos);
  
//   doc.setFont("helvetica", "bold");
//   doc.text(`Invoice Date:`, 100, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(formatToReadableDate(invoiceDate), 130, yPos);
//   yPos += 8;

//   // Event details
//   doc.setFont("helvetica", "bold");
//   doc.text("Event Date:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(formatToReadableDate(eventDate), 40, yPos);
  
//   doc.setFont("helvetica", "bold");
//   doc.text("Event Venue:", 100, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(enventVenue, 130, yPos);
//   yPos += 8;

//   // Customer details
//   doc.setFont("helvetica", "bold");
//   doc.text("Customer Name:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(customerName, 50, yPos);
//   yPos += 8;

//   doc.setFont("helvetica", "bold");
//   doc.text("Customer Address:", 14, yPos);
//   doc.setFont("helvetica", "normal");
  
//   // Split address into multiple lines if too long
//   const addressLines = doc.splitTextToSize(customerAddress, 120);
//   doc.text(addressLines, 35, yPos);
//   yPos += (addressLines.length * 5); // Adjust spacing based on number of lines
  
//   doc.setFont("helvetica", "bold");
//   doc.text("Customer Mob:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(customerPhone, 35, yPos);
//   yPos += 10;

//   // Company details below invoice header
//   doc.setFont("helvetica", "bold");
//   doc.text("Deals in :", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(
//     "Audio / Visual For Events/Conferences/ Exhibitions/Seminars",
//     35,
//     yPos
//   );
//   doc.text("All Electrical Accessories Retail Trade", 14, yPos + 5);
//   yPos += 10;

//   doc.setFont("helvetica", "bold");
//   doc.text("Address:", 14, yPos);
//   doc.setFont("helvetica", "normal");
  
//   // Split company address into multiple lines
//   const companyAddress = "Shop No. - 3 Jarnail Enclave Zirakpur Bhabat Road Mohali -140603";
//   const companyAddressLines = doc.splitTextToSize(companyAddress, 120);
//   doc.text(companyAddressLines, 35, yPos);
//   yPos += (companyAddressLines.length * 5);
  
//   doc.setFont("helvetica", "bold");
//   doc.text("Email ID:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text("bhardwajelectrical2023@gmail.com", 35, yPos);
//   yPos += 15;

//   // Table Header
//   doc.setFont("helvetica", "bold");
//   doc.text("S.No.", 14, yPos);
//   doc.text("DESCRIPTION", 30, yPos);
//   doc.text("Days", 100, yPos);
//   doc.text("Qty.", 120, yPos);
//   doc.text("Rate", 140, yPos);
//   doc.text("Amount", 170, yPos);
//   yPos += 3;

//   // Draw horizontal line
//   doc.line(14, yPos, 190, yPos);
//   yPos += 5;

//   // Table content
//   invoiceItems.forEach((item, index) => {
//     if (yPos > 250) { // Check if we need a new page before adding row
//       doc.addPage();
//       yPos = 20;
//     }
    
//     doc.setFont("helvetica", "normal");
//     doc.text((index + 1).toString(), 14, yPos);
//     doc.text(item.description, 30, yPos);
//     doc.text(item.days.toString(), 100, yPos);
//     doc.text(item.qty.toString(), 120, yPos);
//     doc.text(item.rate.toString(), 140, yPos);
//     doc.text(item.amount.toString(), 170, yPos);
//     yPos += 7;
//   });

//   // Total line
//   doc.setFont("helvetica", "bold");
//   doc.line(14, yPos, 190, yPos);
//   yPos += 7;
//   doc.text("Total", 140, yPos);
//   doc.text(calculateTotal(invoiceItems).toString(), 170, yPos);
//   yPos += 10;

//   // Rupees in words
//   doc.text(
//     `Rupees in words: ${numberToWords(calculateTotal(invoiceItems))}`,
//     14,
//     yPos
//   );
//   yPos += 15;

//   // Standard Terms and Conditions
//   doc.setFont("helvetica", "bold");
//   doc.text("Terms & Conditions:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(8);

//   const terms = [
//     "1. Payment is due within 15 days from invoice date.",
//     "2. Interest @18% p.a. will be charged on overdue payments.",
//     "3. Goods once sold will not be taken back.",
//     "4. All disputes subject to Mohali jurisdiction only.",
//     "5. Rental equipment must be returned in same condition as delivered.",
//     "6. Security deposit is refundable after equipment return and inspection.",
//     "7. Client is responsible for any damage/loss during rental period.",
//     "8. Prices inclusive of all taxes unless specified otherwise.",
//     "9. Payment via NEFT/RTGS/Cheque in favor of BHARDWAJ ELECTRICALS.",
//     "10. Original invoice must be produced for any service claims.",
//     "11. Installation charges extra unless specifically mentioned.",
//     "12. Weekend/holiday rates may apply for event support services.",
//   ];

//   terms.forEach((term) => {
//     if (yPos > 270) {
//       doc.addPage();
//       yPos = 20;
//     }
//     doc.text(term, 16, (yPos += 6));
//   });

//   // Footer with company stamp image
//   const stampWidth = 50;
//   const stampHeight = 30;
//   const pageWidthStamp = doc.internal.pageSize.getWidth();
//   const stampX = pageWidthStamp - 50;
//   const stampY = doc.internal.pageSize.getHeight() - 40;

//   doc.addImage(stampImageData, "JPEG", stampX, stampY, stampWidth, stampHeight);

//   doc.save(`invoice_${invoiceNo}.pdf`);

// };






export const generatePDF = async (
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
  customerGST= "not provided" // ✅ New parameter
) => {
  if (invoiceItems.length === 0 || calculateTotal(invoiceItems) === 0) {
    toast("Please add some items to generate the bill and their price", {
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

  const doc = new jsPDF();
  const pxToMm = 0.264583;
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPos = 15;

  // Add logo/image
  const imgWidth = 80 * pxToMm;
  const imgHeight = 80 * pxToMm;
  // const imgX = (pageWidth - imgWidth) / 2;
  // doc.addImage(imgData, "JPEG", imgX, 5, imgWidth, imgHeight);
  const imgX = (pageWidth - imgWidth) / 2;
  const imageTop = 5;
  doc.addImage(imgData, "JPEG", imgX, imageTop, imgWidth, imgHeight);
  yPos = imageTop + imgHeight + 5; // Give space below image


// Invoice header
doc.setFont("helvetica", "bold");
doc.setFontSize(12);
doc.text("INVOICE", 14, yPos);

  // Contact numbers on right
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Mob.:", 160, yPos);
  doc.setFont("helvetica", "normal");
  doc.text("7888915584", 169, yPos);
  doc.text("7986584344", 170, yPos + 5);
  yPos += 10;

  // Company name
  doc.setFont("times", "bold");
  doc.setFontSize(20);
  doc.text("BHARDWAJ ELECTRICALS", 61, yPos);
  yPos += 10;

  // Company address
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Address:", 14, yPos);
  doc.setFont("helvetica", "normal");
  const companyAddress = "Shop No. - 3 Jarnail Enclave Zirakpur Bhabat Road Mohali -140603";
  const companyAddressLines = doc.splitTextToSize(companyAddress, 120);
  doc.text(companyAddressLines, 32, yPos);
  yPos += companyAddressLines.length * 5;

  // // Company GST
  // doc.setFont("helvetica", "bold");
  // doc.text("GST No:", 14, yPos);
  // doc.setFont("helvetica", "normal");
  // doc.text("03AEIPB1903Q1Z2", 32, yPos); // Replace with actual GST if dynamic
  // yPos += 8;

  // Deals in
  doc.setFont("helvetica", "bold");
  doc.text("Deals in :", 14, yPos);
  doc.setFont("helvetica", "normal");
  doc.text("Audio / Visual For Events/Conferences/Exhibitions/Seminars", 32, yPos);
  doc.text("All Electrical Accessories Retail Trade", 14, yPos + 5);
  yPos += 15;

  // Invoice details
  doc.setFont("helvetica", "bold");
  doc.text("Invoice No.:", 14, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(String(invoiceNo), 36, yPos);

  doc.setFont("helvetica", "bold");
  doc.text("Invoice Date:", 100, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(formatToReadableDate(invoiceDate), 124, yPos);
  yPos += 8;

  // Event details
  doc.setFont("helvetica", "bold");
  doc.text("Event Date:", 14, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(formatToReadableDate(eventDate), 35, yPos);

  doc.setFont("helvetica", "bold");
  doc.text("Event Venue:", 100, yPos);
  doc.setFont("helvetica", "normal");
  doc.text(enventVenue, 124, yPos);
  yPos += 8;

// Customer details
doc.setFont("helvetica", "bold");
doc.text("Customer Name:", 14, yPos);
doc.setFont("helvetica", "normal");
doc.text(customerName, 44, yPos);
yPos += 8;

// Address label
doc.setFont("helvetica", "bold");
doc.text("Customer Address:", 14, yPos);
doc.setFont("helvetica", "normal");

// Split address into multiple lines if too long
const addressLines = doc.splitTextToSize(customerAddress, 120);
doc.text(addressLines, 48, yPos);
yPos += (addressLines.length * 5); 

// Customer Mobile
doc.setFont("helvetica", "bold");
doc.text("Customer Mob:", 14, yPos);
doc.setFont("helvetica", "normal");
doc.text(customerPhone, 41, yPos);
yPos += 10;



  // // ✅ Customer GST
  // if (customerGST) {
  //   doc.setFont("helvetica", "bold");
  //   doc.text("Customer GST:", 14, yPos);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(customerGST, 41, yPos);
  //   yPos += 10;
  // }

  // Table Header
  doc.setFont("helvetica", "bold");
  doc.text("S.No.", 14, yPos);
  doc.text("DESCRIPTION", 30, yPos);
  doc.text("Days", 100, yPos);
  doc.text("Qty.", 120, yPos);
  doc.text("Rate", 140, yPos);
  doc.text("Amount", 170, yPos);
  yPos += 3;

  doc.line(14, yPos, 190, yPos);
  yPos += 5;

  // Table rows
  invoiceItems.forEach((item, index) => {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFont("helvetica", "normal");
    doc.text((index + 1).toString(), 14, yPos);
    doc.text(item.description, 30, yPos);
    doc.text(item.days.toString(), 100, yPos);
    doc.text(item.qty.toString(), 120, yPos);
    doc.text(item.rate.toString(), 140, yPos);
    doc.text(item.amount.toString(), 170, yPos);
    yPos += 7;
  });

  // Total
  doc.setFont("helvetica", "bold");
  doc.line(14, yPos, 190, yPos);
  yPos += 7;
  doc.text("Total", 140, yPos);
  doc.text(calculateTotal(invoiceItems).toString(), 170, yPos);
  yPos += 10;

  // Total in words
  doc.text(
    `Rupees in words: ${numberToWords(calculateTotal(invoiceItems))}`,
    14,
    yPos
  );
  yPos += 15;

  // Terms and conditions
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
      doc.addPage();
      yPos = 20;
    }
    doc.text(term, 16, (yPos += 6));
  });

  // Stamp
  const stampWidth = 50;
  const stampHeight = 30;
  const pageWidthStamp = doc.internal.pageSize.getWidth();
  const stampX = pageWidthStamp - 50;
  const stampY = doc.internal.pageSize.getHeight() - 40;

  doc.addImage(stampImageData, "JPEG", stampX, stampY, stampWidth, stampHeight);

  doc.save(`invoice_${invoiceNo}.pdf`);
};
