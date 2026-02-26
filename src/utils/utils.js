// // import jsPDF from "jspdf";
// // import { toast } from "react-toastify";
// // import { supabase } from "../supabase/supabaseClient";

// // // export const calculateTotal = (invoiceItems) => {
// // //   if (!invoiceItems || invoiceItems.length === 0) return 0;
// // //   console.log("Your invoice items", invoiceItems);
// // //   return invoiceItems.reduce((total, item) => {
// // //     return (
// // //       total +
// // //       parseFloat(item.qty) * parseFloat(item.rate) * parseFloat(item.days)
// // //     );
// // //   }, 0);
// // // };

// // export const calculateTotal = (invoiceItems) => {
// //   if (!invoiceItems || invoiceItems.length === 0) return 0;

// //   return invoiceItems
// //     .filter((item) => item.days && item.amount !== "")
// //     .reduce((total, item) => {
// //       const qty = parseFloat(item.qty);
// //       const rate = parseFloat(item.rate);
// //       const days = parseFloat(item.days);

// //       if (isNaN(qty) || isNaN(rate) || isNaN(days)) return total;

// //       return total + qty * rate * days;
// //     }, 0);
// // };



// // export const numberToWords = (num) => {
// //   if (num === 0) return "Zero Rupees Only";

// //   const units = [
// //     "",
// //     "One",
// //     "Two",
// //     "Three",
// //     "Four",
// //     "Five",
// //     "Six",
// //     "Seven",
// //     "Eight",
// //     "Nine",
// //   ];
// //   const teens = [
// //     "Ten",
// //     "Eleven",
// //     "Twelve",
// //     "Thirteen",
// //     "Fourteen",
// //     "Fifteen",
// //     "Sixteen",
// //     "Seventeen",
// //     "Eighteen",
// //     "Nineteen",
// //   ];
// //   const tens = [
// //     "",
// //     "Ten",
// //     "Twenty",
// //     "Thirty",
// //     "Forty",
// //     "Fifty",
// //     "Sixty",
// //     "Seventy",
// //     "Eighty",
// //     "Ninety",
// //   ];

// //   const convertLessThanThousand = (n) => {
// //     if (n === 0) return "";
// //     if (n < 10) return units[n];
// //     if (n < 20) return teens[n - 10];
// //     if (n < 100)
// //       return (
// //         tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + units[n % 10] : "")
// //       );
// //     return (
// //       units[Math.floor(n / 100)] +
// //       " Hundred" +
// //       (n % 100 !== 0 ? " " + convertLessThanThousand(n % 100) : "")
// //     );
// //   };

// //   const convert = (n) => {
// //     if (n === 0) return "Zero";

// //     let result = "";
// //     const crore = Math.floor(n / 10000000);
// //     n %= 10000000;
// //     const lakh = Math.floor(n / 100000);
// //     n %= 100000;
// //     const thousand = Math.floor(n / 1000);
// //     n %= 1000;
// //     const hundred = Math.floor(n / 100);
// //     const remainder = n % 100;

// //     if (crore > 0) {
// //       result += convertLessThanThousand(crore) + " Crore";
// //     }
// //     if (lakh > 0) {
// //       result += (result ? " " : "") + convertLessThanThousand(lakh) + " Lakh";
// //     }
// //     if (thousand > 0) {
// //       result +=
// //         (result ? " " : "") + convertLessThanThousand(thousand) + " Thousand";
// //     }
// //     if (hundred > 0) {
// //       result +=
// //         (result ? " " : "") + convertLessThanThousand(hundred) + " Hundred";
// //     }
// //     if (remainder > 0) {
// //       result += (result ? " " : "") + convertLessThanThousand(remainder);
// //     }

// //     return result;
// //   };

// //   return convert(num) + " Rupees Only";
// // };

// // const formatToReadableDate = (dateInput) => {
// //   const date = new Date(dateInput);

// //   if (isNaN(date)) return "Invalid Date";

// //   const options = { year: "numeric", month: "long", day: "2-digit" };
// //   return date.toLocaleDateString("en-US", options);
// // };

// // export const addInvoiceToDB = async (
// //   eventDate,
// //   customerPhone,
// //   enventVenue,
// //   customerName,
// //   customerAddress,
// //   invoiceItems
// // ) => {
// //   const { data, error } = await supabase
// //     .from("invoice")
// //     .insert({
// //       created_at: new Date(),
// //       updated_at: new Date(),
// //       event_date: eventDate,
// //       amount: calculateTotal(invoiceItems),
// //       customer_phone: customerPhone,
// //       invoice_date: new Date(),
// //       event_venue: enventVenue,
// //       customer_name: customerName,
// //       customer_address: customerAddress,
// //       items: invoiceItems,
// //     })
// //     .single();

// //   if (error) {
// //     console.error("We are unble to update data in supabase");
// //     return;
// //   }
// //   console.log("Data saved on supabase successfully", data);
// // };


// // export const generatePDF = async (
// //   invoiceItems,
// //   imgData,
// //   eventDate,
// //   enventVenue,
// //   invoiceNo,
// //   invoiceDate,
// //   customerName,
// //   customerAddress,
// //   customerPhone,
// //   stampImageData,
// //   customerGST= "not provided" // ✅ New parameter
// // ) => {
// //   if (invoiceItems.length === 0 || calculateTotal(invoiceItems) === 0) {
// //     toast("Please add some items to generate the bill and their price", {
// //       position: "top-right",
// //       autoClose: 2000,
// //       hideProgressBar: false,
// //       closeOnClick: false,
// //       pauseOnHover: true,
// //       draggable: true,
// //       progress: 0,
// //       theme: "light",
// //     });
// //     return;
// //   }

// //   const doc = new jsPDF();
// //   const pxToMm = 0.264583;
// //   const pageWidth = doc.internal.pageSize.getWidth();
// //   let yPos = 15;

// //   // Add logo/image
// //   const imgWidth = 80 * pxToMm;
// //   const imgHeight = 80 * pxToMm;
// //   // const imgX = (pageWidth - imgWidth) / 2;
// //   // doc.addImage(imgData, "JPEG", imgX, 5, imgWidth, imgHeight);
// //   const imgX = (pageWidth - imgWidth) / 2;
// //   const imageTop = 5;
// //   doc.addImage(imgData, "JPEG", imgX, imageTop, imgWidth, imgHeight);
// //   yPos = imageTop + imgHeight + 5; // Give space below image


// // // Invoice header
// // doc.setFont("helvetica", "bold");
// // doc.setFontSize(12);
// // doc.text("INVOICE", 14, yPos);

// //   // Contact numbers on right
// //   doc.setFont("helvetica", "normal");
// //   doc.setFontSize(10);
// //   doc.setFont("helvetica", "bold");
// //   doc.text("Mob", 160, yPos);
// //   doc.setFont("helvetica", "normal");
// //   doc.text("7888915584", 170, yPos);
// //   doc.text("7986584344", 170, yPos + 5);
// //   yPos += 10;

// //   // Company name
// //   doc.setFont("times", "bold");
// //   doc.setFontSize(20);
// //   doc.text("BHARDWAJ ELECTRICALS", 61, yPos);
// //   yPos += 10;

// //   // Company address
// //   doc.setFont("helvetica", "bold");
// //   doc.setFontSize(10);
// //   doc.text("Address:", 14, yPos);
// //   doc.setFont("helvetica", "normal");
// //   const companyAddress = "Shop No. - 3 Jarnail Enclave Zirakpur Bhabat Road Mohali -140603";
// //   const companyAddressLines = doc.splitTextToSize(companyAddress, 120);
// //   doc.text(companyAddressLines, 32, yPos);
// //   yPos += companyAddressLines.length * 5;

// //   // // Company GST
// //   // doc.setFont("helvetica", "bold");
// //   // doc.text("GST No:", 14, yPos);
// //   // doc.setFont("helvetica", "normal");
// //   // doc.text("03AEIPB1903Q1Z2", 32, yPos); // Replace with actual GST if dynamic
// //   // yPos += 8;

// //   // Deals in
// //   doc.setFont("helvetica", "bold");
// //   doc.text("Deals in :", 14, yPos);
// //   doc.setFont("helvetica", "normal");
// //   doc.text("Audio / Visual For Events/Conferences/Exhibitions/Seminars", 32, yPos);
// //   doc.text("All Electrical Accessories Retail Trade", 14, yPos + 5);
// //   yPos += 15;

// //   // Invoice details
// //   doc.setFont("helvetica", "bold");
// //   doc.text("Invoice No.:", 14, yPos);
// //   doc.setFont("helvetica", "normal");
// //   doc.text(String(invoiceNo), 36, yPos);

// //   doc.setFont("helvetica", "bold");
// //   doc.text("Invoice Date:", 100, yPos);
// //   doc.setFont("helvetica", "normal");
// //   doc.text(formatToReadableDate(invoiceDate), 124, yPos);
// //   yPos += 8;

// //   // Event details
// //   doc.setFont("helvetica", "bold");
// //   doc.text("Event Date:", 14, yPos);
// //   doc.setFont("helvetica", "normal");
// //   doc.text(formatToReadableDate(eventDate), 35, yPos);

// //   doc.setFont("helvetica", "bold");
// //   doc.text("Event Venue:", 100, yPos);
// //   doc.setFont("helvetica", "normal");
// //   doc.text(enventVenue, 124, yPos);
// //   yPos += 8;

// // // Customer details
// // doc.setFont("helvetica", "bold");
// // doc.text("Customer Name:", 14, yPos);
// // doc.setFont("helvetica", "normal");
// // doc.text(customerName, 44, yPos);
// // yPos += 8;

// // // Address label
// // doc.setFont("helvetica", "bold");
// // doc.text("Customer Address:", 14, yPos);
// // doc.setFont("helvetica", "normal");

// // // Split address into multiple lines if too long
// // const addressLines = doc.splitTextToSize(customerAddress, 120);
// // doc.text(addressLines, 48, yPos);
// // yPos += (addressLines.length * 5); 

// // // Customer Mobile
// // doc.setFont("helvetica", "bold");
// // doc.text("Customer Mob:", 14, yPos);
// // doc.setFont("helvetica", "normal");
// // doc.text(customerPhone, 41, yPos);
// // yPos += 10;



// //   // // ✅ Customer GST
// //   // if (customerGST) {
// //   //   doc.setFont("helvetica", "bold");
// //   //   doc.text("Customer GST:", 14, yPos);
// //   //   doc.setFont("helvetica", "normal");
// //   //   doc.text(customerGST, 41, yPos);
// //   //   yPos += 10;
// //   // }

// //   // Table Header
// //   doc.setFont("helvetica", "bold");
// //   doc.text("S.No.", 14, yPos);
// //   doc.text("DESCRIPTION", 30, yPos);
// //   doc.text("Days", 100, yPos);
// //   doc.text("Qty.", 120, yPos);
// //   doc.text("Rate", 140, yPos);
// //   doc.text("Amount", 170, yPos);
// //   yPos += 3;

// //   doc.line(14, yPos, 190, yPos);
// //   yPos += 5;

// //   // Table rows
// //   invoiceItems.forEach((item, index) => {
// //     if (yPos > 250) {
// //       doc.addPage();
// //       yPos = 20;
// //     }
// //     doc.setFont("helvetica", "normal");
// //     doc.text((index + 1).toString(), 14, yPos);
// //     doc.text(item.description, 30, yPos);
// //     doc.text(item.days.toString(), 100, yPos);
// //     doc.text(item.qty.toString(), 120, yPos);
// //     doc.text(item.rate.toString(), 140, yPos);
// //     doc.text(item.amount.toString(), 170, yPos);
// //     yPos += 7;
// //   });

// //   // Total
// //   doc.setFont("helvetica", "bold");
// //   doc.line(14, yPos, 190, yPos);
// //   yPos += 7;
// //   doc.text("Total", 140, yPos);
// //   doc.text(calculateTotal(invoiceItems).toString(), 170, yPos);
// //   yPos += 10;

// //   // Total in words
// //   doc.text(
// //     `Rupees in words: ${numberToWords(calculateTotal(invoiceItems))}`,
// //     14,
// //     yPos
// //   );
// //   yPos += 15;

// //   // Terms and conditions
// //   doc.setFont("helvetica", "bold");
// //   doc.text("Terms & Conditions:", 14, yPos);
// //   doc.setFont("helvetica", "normal");
// //   doc.setFontSize(8);
// //   const terms = [
// //     "1. Payment is due within 15 days from invoice date.",
// //     "2. Interest @18% p.a. will be charged on overdue payments.",
// //     "3. Goods once sold will not be taken back.",
// //     "4. All disputes subject to Mohali jurisdiction only.",
// //     "5. Rental equipment must be returned in same condition as delivered.",
// //     "6. Security deposit is refundable after equipment return and inspection.",
// //     "7. Client is responsible for any damage/loss during rental period.",
// //     "8. Prices inclusive of all taxes unless specified otherwise.",
// //     "9. Payment via NEFT/RTGS/Cheque in favor of BHARDWAJ ELECTRICALS.",
// //     "10. Original invoice must be produced for any service claims.",
// //     "11. Installation charges extra unless specifically mentioned.",
// //     "12. Weekend/holiday rates may apply for event support services.",
// //   ];

// //   terms.forEach((term) => {
// //     if (yPos > 270) {
// //       doc.addPage();
// //       yPos = 20;
// //     }
// //     doc.text(term, 16, (yPos += 6));
// //   });

// //   // Stamp
// //   const stampWidth = 50;
// //   const stampHeight = 30;
// //   const pageWidthStamp = doc.internal.pageSize.getWidth();
// //   const stampX = pageWidthStamp - 50;
// //   const stampY = doc.internal.pageSize.getHeight() - 40;

// //   doc.addImage(stampImageData, "JPEG", stampX, stampY, stampWidth, stampHeight);

// //   doc.save(`invoice_${invoiceNo}.pdf`);
// // };



// import jsPDF from "jspdf";
// import { toast } from "react-toastify";
// import { supabase } from "../supabase/supabaseClient";

// /* =========================
//    CALCULATE TOTAL
// ========================= */
// export const calculateTotal = (invoiceItems) => {
//   if (!invoiceItems || invoiceItems.length === 0) return 0;

//   return invoiceItems
//     .filter((item) => item.days && item.amount !== "")
//     .reduce((total, item) => {
//       const qty = parseFloat(item.qty);
//       const rate = parseFloat(item.rate);
//       const days = parseFloat(item.days);

//       if (isNaN(qty) || isNaN(rate) || isNaN(days)) return total;

//       return total + qty * rate * days;
//     }, 0);
// };

// /* =========================
//    NUMBER TO WORDS (INR)
// ========================= */
// export const numberToWords = (num) => {
//   if (num === 0) return "Zero Rupees Only";

//   const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//   const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//   const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

//   const convertLessThanThousand = (n) => {
//     if (n === 0) return "";
//     if (n < 10) return units[n];
//     if (n < 20) return teens[n - 10];
//     if (n < 100) {
//       return tens[Math.floor(n / 10)] + (n % 10 ? " " + units[n % 10] : "");
//     }
//     return (
//       units[Math.floor(n / 100)] +
//       " Hundred" +
//       (n % 100 ? " " + convertLessThanThousand(n % 100) : "")
//     );
//   };

//   const convert = (n) => {
//     let result = "";
//     const crore = Math.floor(n / 10000000);
//     n %= 10000000;
//     const lakh = Math.floor(n / 100000);
//     n %= 100000;
//     const thousand = Math.floor(n / 1000);
//     n %= 1000;

//     if (crore) result += convertLessThanThousand(crore) + " Crore ";
//     if (lakh) result += convertLessThanThousand(lakh) + " Lakh ";
//     if (thousand) result += convertLessThanThousand(thousand) + " Thousand ";
//     if (n) result += convertLessThanThousand(n);

//     return result.trim();
//   };

//   return convert(num) + " Rupees Only";
// };

// /* =========================
//    DATE FORMAT
// ========================= */
// const formatToReadableDate = (dateInput) => {
//   const date = new Date(dateInput);
//   if (isNaN(date)) return "Invalid Date";

//   return date.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   });
// };

// /* =========================
//    SAVE INVOICE TO DB
// ========================= */
// export const addInvoiceToDB = async (
//   eventDate,
//   customerPhone,
//   enventVenue,
//   customerName,
//   customerAddress,
//   invoiceItems
// ) => {
//   const { data, error } = await supabase.from("invoice").insert({
//     created_at: new Date(),
//     updated_at: new Date(),
//     event_date: eventDate,
//     amount: calculateTotal(invoiceItems),
//     customer_phone: customerPhone,
//     invoice_date: new Date(),
//     event_venue: enventVenue,
//     customer_name: customerName,
//     customer_address: customerAddress,
//     items: invoiceItems,
//   }).single();

//   if (error) {
//     console.error("Unable to save invoice", error);
//     return;
//   }

//   console.log("Invoice saved successfully", data);
// };

// /* =========================
//    GENERATE PDF
// ========================= */
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
//   stampImageData,
//   customerGST = "not provided",
//   paymentQRBase64,
//   bankName,
//   accountNumber,
//   ifscCode
// ) => {
//   if (invoiceItems.length === 0 || calculateTotal(invoiceItems) === 0) {
//     toast("Please add items with valid price", { autoClose: 2000 });
//     return;
//   }

//   const doc = new jsPDF();
//   const pageWidth = doc.internal.pageSize.getWidth();
//   let yPos = 15;

//   /* ---------- LOGO ---------- */
//   const imgWidth = 80 * 0.264583;
//   const imgHeight = 80 * 0.264583;
//   const imgX = (pageWidth - imgWidth) / 2;

//   doc.addImage(imgData, "JPEG", imgX, 5, imgWidth, imgHeight);
//   yPos = imgHeight + 15;

//   /* ---------- HEADER ---------- */
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(12);
//   doc.text("INVOICE", 14, yPos);

//   doc.setFontSize(10);
//   doc.text("Mob:", 160, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text("7888915584", 170, yPos);
//   doc.text("7986584344", 170, yPos + 5);
//   yPos += 12;

//   doc.setFont("times", "bold");
//   doc.setFontSize(20);
//   doc.text("BHARDWAJ ELECTRICALS", 45, yPos);
//   yPos += 10;

//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(10);
//   doc.text("Address:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(
//     doc.splitTextToSize(
//       "Shop No. - 3 Jarnail Enclave Zirakpur Bhabat Road Mohali -140603",
//       120
//     ),
//     32,
//     yPos
//   );
//   yPos += 12;

//   doc.setFont("helvetica", "bold");
//   doc.text("Deals in:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text("Audio / Visual For Events / Conferences / Exhibitions", 32, yPos);
//   yPos += 10;

//   /* ---------- INVOICE DETAILS ---------- */
//   doc.setFont("helvetica", "bold");
//   doc.text("Invoice No:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(String(invoiceNo), 40, yPos);

//   doc.setFont("helvetica", "bold");
//   doc.text("Invoice Date:", 110, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(formatToReadableDate(invoiceDate), 145, yPos);
//   yPos += 8;

//   doc.setFont("helvetica", "bold");
//   doc.text("Event Date:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(formatToReadableDate(eventDate), 40, yPos);

//   doc.setFont("helvetica", "bold");
//   doc.text("Venue:", 110, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(enventVenue, 145, yPos);
//   yPos += 10;

//   /* ---------- CUSTOMER ---------- */
//   doc.setFont("helvetica", "bold");
//   doc.text("Customer:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(customerName, 40, yPos);
//   yPos += 6;

//   doc.setFont("helvetica", "bold");
//   doc.text("Address:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(doc.splitTextToSize(customerAddress, 120), 40, yPos);
//   yPos += 10;

//   doc.setFont("helvetica", "bold");
//   doc.text("Mobile:", 14, yPos);
//   doc.setFont("helvetica", "normal");
//   doc.text(customerPhone, 40, yPos);
//   yPos += 12;

//   /* ---------- TABLE ---------- */
//   doc.setFont("helvetica", "bold");
//   doc.text("S.No", 14, yPos);
//   doc.text("Description", 30, yPos);
//   doc.text("Days", 100, yPos);
//   doc.text("Qty", 120, yPos);
//   doc.text("Rate", 140, yPos);
//   doc.text("Amount", 170, yPos);
//   yPos += 5;
//   doc.line(14, yPos, 190, yPos);
//   yPos += 5;

//   invoiceItems.forEach((item, i) => {
//     if (yPos > 250) {
//       doc.addPage();
//       yPos = 20;
//     }
//     doc.setFont("helvetica", "normal");
//     doc.text(String(i + 1), 14, yPos);
//     doc.text(item.description, 30, yPos);
//     doc.text(String(item.days), 100, yPos);
//     doc.text(String(item.qty), 120, yPos);
//     doc.text(String(item.rate), 140, yPos);
//     doc.text(String(item.amount), 170, yPos);
//     yPos += 7;
//   });

//   /* ---------- TOTAL ---------- */
//   doc.line(14, yPos, 190, yPos);
//   yPos += 7;
//   doc.setFont("helvetica", "bold");
//   doc.text("Total", 140, yPos);
//   doc.text(String(calculateTotal(invoiceItems)), 170, yPos);
//   yPos += 10;

//   doc.text(`Rupees in words: ${numberToWords(calculateTotal(invoiceItems))}`, 14, yPos);
//   yPos += 12;

//   /* ---------- TERMS ---------- */
//   doc.setFontSize(8);
//   doc.text("Terms & Conditions:", 14, yPos);
//   yPos += 6;

//   const terms = [
//     "1. Payment is due within 15 days from invoice date.",
//     "2. Interest @18% p.a. will be charged on overdue payments.",
//     "3. Goods once sold will not be taken back.",
//     "4. All disputes subject to Mohali jurisdiction only.",
//     "5. Rental equipment must be returned in same condition as delivered.",
//     "6. Security deposit is refundable after equipment return and inspection.",
//     // "7. Client is responsible for any damage/loss during rental period.",
//     // "8. Prices inclusive of all taxes unless specified otherwise.",
//     // "9. Payment via NEFT/RTGS/Cheque in favor of BHARDWAJ ELECTRICALS.",
//     // "10. Original invoice must be produced for any service claims.",
//     // "11. Installation charges extra unless specifically mentioned.",
//     // "12. Weekend/holiday rates may apply for event support services.",
//   ];

//   terms.forEach((t) => {
//     if (yPos > 270) {
//       doc.addPage();
//       yPos = 20;
//     }
//     doc.text(t, 16, yPos);
//     yPos += 5;
//   });

// //* ---------- PAYMENT QR (STAMP STYLE FIX) ---------- */

// const pageHeight = doc.internal.pageSize.getHeight();
// // const pageWidthQR = doc.internal.pageSize.getWidth();

// // QR size
// const qrWidth = 45;
// const qrHeight = 45;

// // Position QR ABOVE stamp, bottom-left
// const qrX = 14;
// const qrY = pageHeight - 80;

// // Label
// doc.setFont("helvetica", "bold");
// doc.setFontSize(9);
// doc.text("Scan QR to Pay", qrX, qrY - 4);

// // ✅ ADD QR IMAGE — SAME AS STAMP
// doc.addImage(
//   paymentQRBase64,
//   "JPEG",
//   qrX,
//   qrY,
//   qrWidth,
//   qrHeight
// );

// // Bank details (right side of QR)
// doc.setFont("helvetica", "normal");
// doc.text(`Bank: ${bankName}`, qrX + 55, qrY + 10);
// doc.text(`A/c No: ${accountNumber}`, qrX + 55, qrY + 16);
// doc.text(`IFSC: ${ifscCode}`, qrX + 55, qrY + 22);



//   /* ---------- STAMP ---------- */
//   doc.addImage(
//     stampImageData,
//     "JPEG",
//     pageWidth - 60,
//     doc.internal.pageSize.getHeight() - 45,
//     45,
//     30
//   );

//   doc.save(`invoice_${invoiceNo}.pdf`);
// };







import jsPDF from "jspdf";
import { toast } from "react-toastify";
import { supabase } from "../supabase/supabaseClient";

/* =========================
   CALCULATE TOTAL
========================= */
export const calculateTotal = (invoiceItems) => {
  if (!invoiceItems || invoiceItems.length === 0) return 0;

  return invoiceItems
    .filter((item) => item.days && item.amount !== "")
    .reduce((total, item) => {
      const qty = parseFloat(item.qty);
      const rate = parseFloat(item.rate);
      const days = parseFloat(item.days);
      if (isNaN(qty) || isNaN(rate) || isNaN(days)) return total;
      return total + qty * rate * days;
    }, 0);
};

/* =========================
   NUMBER TO WORDS (INR)
========================= */
export const numberToWords = (num) => {
  if (num === 0) return "Zero Rupees Only";

  const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const convertLessThanThousand = (n) => {
    if (n === 0) return "";
    if (n < 10) return units[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? " " + units[n % 10] : "");
    return (
      units[Math.floor(n / 100)] +
      " Hundred" +
      (n % 100 ? " " + convertLessThanThousand(n % 100) : "")
    );
  };

  const convert = (n) => {
    let result = "";
    const crore = Math.floor(n / 10000000); n %= 10000000;
    const lakh = Math.floor(n / 100000);   n %= 100000;
    const thousand = Math.floor(n / 1000); n %= 1000;

    if (crore)    result += convertLessThanThousand(crore) + " Crore ";
    if (lakh)     result += convertLessThanThousand(lakh) + " Lakh ";
    if (thousand) result += convertLessThanThousand(thousand) + " Thousand ";
    if (n)        result += convertLessThanThousand(n);

    return result.trim();
  };

  return convert(num) + " Rupees Only";
};

/* =========================
   DATE FORMAT
========================= */
const formatToReadableDate = (dateInput) => {
  const date = new Date(dateInput);
  if (isNaN(date)) return "Invalid Date";
  return date.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
};

/* =========================
   SAVE INVOICE TO DB
========================= */
export const addInvoiceToDB = async (
  eventDate, customerPhone, enventVenue,
  customerName, customerAddress, invoiceItems
) => {
  const { data, error } = await supabase.from("invoice").insert({
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
  }).single();

  if (error) { console.error("Unable to save invoice", error); return; }
  console.log("Invoice saved successfully", data);
};

/* ============================================================
   GENERATE PDF  —  pixel-perfect professional layout
   ============================================================ */
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
  customerGST = "not provided",
  paymentQRBase64,
  bankName,
  accountNumber,
  ifscCode
) => {
  if (invoiceItems.length === 0 || calculateTotal(invoiceItems) === 0) {
    toast("Please add items with valid price", { autoClose: 2000 });
    return;
  }

  const doc = new jsPDF({ unit: "mm", format: "a4" });

  /* ── Page geometry ── */
  const PW  = doc.internal.pageSize.getWidth();   // 210
  const PH  = doc.internal.pageSize.getHeight();  // 297
  const ML  = 14;   // margin left
  const MR  = 196;  // margin right
  const CW  = MR - ML; // content width = 182

  /* ── Colour palette ── */
  const DARK   = [0,   0,   0];    // pure black text
  const MID    = [0,   0,   0];    // pure black (was grey)
  const ACCENT = [30,  64, 175];   // deep blue (headers/badges only)
  const LIGHT  = [240, 244, 255];  // very pale blue fill

  /* ── Helpers ── */
  const setColor  = ([r, g, b]) => doc.setTextColor(r, g, b);
  const setDraw   = ([r, g, b]) => doc.setDrawColor(r, g, b);
  const setFill   = ([r, g, b]) => doc.setFillColor(r, g, b);
  const bold      = (sz) => { doc.setFont("helvetica", "bold");   doc.setFontSize(sz); };
  const normal    = (sz) => { doc.setFont("helvetica", "normal"); doc.setFontSize(sz); };
  const hline     = (y, lw = 0.3) => {
    doc.setLineWidth(lw);
    doc.line(ML, y, MR, y);
  };

  let y = 8; // start below page border (border is at y=5)

  /* ── Top solid accent band — stays INSIDE page border ── */
  setFill(ACCENT);
  doc.rect(ML, y, CW, 2.5, "F");
  y += 2.5;

  /* ── Thin gold rule just below band ── */
  setDraw([212, 175, 55]);
  doc.setLineWidth(0.4);
  doc.line(ML, y, MR, y);
  y += 5;

  /* ── LOGO (centred, clean) ── */
  const LOGO_W = 32;
  const LOGO_H = 32;
  const logoX  = (PW - LOGO_W) / 2;
  const logoY  = y;

  doc.addImage(imgData, "JPEG", logoX, logoY, LOGO_W, LOGO_H);
  y = logoY + LOGO_H + 4;

  /* ── Company name ── */
  setColor(ACCENT);
  bold(17);
  doc.text("BHARDWAJ ELECTRICALS", PW / 2, y, { align: "center" });
  y += 2;

  /* ── Gold underline beneath company name ── */
  setDraw([212, 175, 55]);
  doc.setLineWidth(0.5);
  doc.line(PW / 2 - 44, y, PW / 2 + 44, y);
  y += 5;

  /* ── Tagline ── */
  setColor(DARK);
  normal(8);
  doc.text(
    "Audio / Visual Rentals   \u2022   Events   \u2022   Conferences   \u2022   Exhibitions   \u2022   Seminars",
    PW / 2, y, { align: "center" }
  );
  y += 6;

  /* ── Contact info bar ── */
  const BAR_H = 9;
  setFill([240, 244, 255]);
  doc.roundedRect(ML, y, CW, BAR_H, 2, 2, "F");
  setFill(ACCENT);
  doc.roundedRect(ML, y, 3, BAR_H, 1, 1, "F");

  const barTextY = y + 5.8;
  normal(7.5);
  setColor(DARK);
  // No emoji — plain text label avoids garbage characters
  doc.text("Address:", ML + 5, barTextY);
  doc.text("Shop No. 3, Jarnail Enclave, Zirakpur, Mohali - 140603", ML + 15, barTextY);

  setDraw([180, 190, 220]);
  doc.setLineWidth(0.2);
  doc.line(PW / 2 - 2, y + 2, PW / 2 - 2, y + BAR_H - 2);

  doc.text(
    "+91-7888915584  |  +91-7986584344  |  bhardwajelectrical2023@gmail.com",
    PW / 2 + 1, barTextY
  );

  y += BAR_H + 2;

  /* ── Bottom accent band — stays INSIDE page border ── */
  setDraw([212, 175, 55]);
  doc.setLineWidth(0.4);
  doc.line(ML, y, MR, y);
  y += 1;
  setFill(ACCENT);
  doc.rect(ML, y, CW, 2.5, "F");
  y += 5;

  /* ══════════════════════════════════════════════
     SECTION 3 — TAX INVOICE badge + invoice meta
     ══════════════════════════════════════════════ */
  const BADGE_Y = y;

  // Badge pill — left
  setFill(ACCENT);
  doc.roundedRect(ML, BADGE_Y, 34, 8, 1.5, 1.5, "F");
  setColor([255, 255, 255]);
  bold(9);
  doc.text("INVOICE", ML + 17, BADGE_Y + 5.5, { align: "center" });

  // Invoice meta — right side, fully within MR
  const metaX1 = 118;
  const metaX2 = 152;

  bold(8.5);   setColor(MID);   doc.text("Invoice No.:",  metaX1, BADGE_Y + 3);
  bold(8.5);   setColor(DARK);  doc.text(String(invoiceNo), metaX2, BADGE_Y + 3);
  bold(8.5);   setColor(MID);   doc.text("Invoice Date:", metaX1, BADGE_Y + 8);
  normal(8.5); setColor(DARK);  doc.text(formatToReadableDate(invoiceDate), metaX2, BADGE_Y + 8);

  y = BADGE_Y + 13;

  /* ══════════════════════════════════════════════
     SECTION 4 — BILLED TO  +  EVENT DETAILS  (two columns)
     ══════════════════════════════════════════════ */
  const BOX_TOP = y;
  const BOX_H   = 36;
  const COL_MID = ML + CW / 2 + 2; // centre divider x

  // Left box — Billed To
  setFill(LIGHT);
  doc.roundedRect(ML, BOX_TOP, CW / 2 - 1, BOX_H, 1.5, 1.5, "F");

  // Right box — Event Details
  doc.roundedRect(COL_MID, BOX_TOP, CW / 2 - 1, BOX_H, 1.5, 1.5, "F");

  // ── Left content
  let bx = ML + 3;
  let by = BOX_TOP + 5;

  setColor(ACCENT); bold(7.5);
  doc.text("BILLED TO", bx, by);
  by += 5;

  setColor(DARK); bold(9);
  doc.text(customerName, bx, by);
  by += 5;

  setColor(MID); normal(8);
  const addrLines = doc.splitTextToSize(customerAddress, CW / 2 - 8);
  doc.text(addrLines, bx, by);
  by += addrLines.length * 4.5 + 1;

  doc.text("Mob: " + customerPhone, bx, by);

  // ── Right content
  let rx = COL_MID + 3;
  let ry = BOX_TOP + 5;

  setColor(ACCENT); bold(7.5);
  doc.text("EVENT DETAILS", rx, ry);
  ry += 5;

  bold(8.5);    setColor(MID);  doc.text("Event Date:", rx, ry);
  normal(8.5);  setColor(DARK); doc.text(formatToReadableDate(eventDate), rx + 25, ry);
  ry += 5.5;

  bold(8.5);    setColor(MID);  doc.text("Venue:", rx, ry);
  normal(8.5);  setColor(DARK);
  const venueLines = doc.splitTextToSize(enventVenue, CW / 2 - 30);
  doc.text(venueLines, rx + 13, ry);

  y = BOX_TOP + BOX_H + 6;

  /* ══════════════════════════════════════════════
     SECTION 5 — ITEMS TABLE
     ══════════════════════════════════════════════ */

  /* ── Column definitions (x positions + widths) ──
       All values in mm. MR = 196, ML = 14, CW = 182
       Columns must sum: 10+68+18+18+24+44 = 182 = CW ✓  */
  const COL = {
    sno:  { x: ML,        w: 10  },  // 14  → 24
    desc: { x: ML + 10,   w: 68  },  // 24  → 92
    days: { x: ML + 78,   w: 18  },  // 92  → 110
    qty:  { x: ML + 96,   w: 18  },  // 110 → 128
    rate: { x: ML + 114,  w: 24  },  // 128 → 152
    amt:  { x: ML + 138,  w: 44  },  // 152 → 196 = MR ✓
  };

  const ROW_H   = 7;    // data row height
  const HEAD_H  = 8;    // header row height

  /* ── Table header background ── */
  setFill(ACCENT);
  doc.rect(ML, y, CW, HEAD_H, "F");

  /* ── Header text ── */
  setColor([255, 255, 255]);
  bold(8.5);
  const headers = [
    { label: "S.No",        x: COL.sno.x  + COL.sno.w  / 2, align: "center" },
    { label: "Description", x: COL.desc.x + 2,               align: "left"   },
    { label: "Days",        x: COL.days.x + COL.days.w / 2,  align: "center" },
    { label: "Qty",         x: COL.qty.x  + COL.qty.w  / 2,  align: "center" },
    { label: "Rate (Rs.)",   x: COL.rate.x + COL.rate.w / 2,  align: "center" },
    { label: "Amount (Rs.)", x: MR - 2,                        align: "right"  },
  ];
  headers.forEach(({ label, x, align }) => {
    doc.text(label, x, y + 5.5, { align });
  });
  y += HEAD_H;

  /* ── Table rows ── */
  invoiceItems.forEach((item, i) => {

    /* page break */
    if (y + ROW_H > PH - 55) {
      doc.addPage();
      y = 15;
      // reprint header on new page
      setFill(ACCENT);
      doc.rect(ML, y, CW, HEAD_H, "F");
      setColor([255, 255, 255]); bold(8.5);
      headers.forEach(({ label, x, align }) => doc.text(label, x, y + 5.5, { align }));
      y += HEAD_H;
    }

    /* alternating row tint */
    if (i % 2 === 0) {
      setFill(LIGHT);
      doc.rect(ML, y, CW, ROW_H, "F");
    }

    setColor(DARK); normal(8.5);

    // S.No (centred)
    doc.text(String(i + 1), COL.sno.x + COL.sno.w / 2, y + 5, { align: "center" });

    // Description (left, with wrapping guard)
    const descText = doc.splitTextToSize(item.description, COL.desc.w - 2);
    doc.text(descText[0], COL.desc.x + 2, y + 5); // single line; expand ROW_H if you need multi-line

    // Days (centred)
    doc.text(String(item.days), COL.days.x + COL.days.w / 2, y + 5, { align: "center" });

    // Qty (centred)
    doc.text(String(item.qty),  COL.qty.x  + COL.qty.w  / 2, y + 5, { align: "center" });

    // Rate (right-aligned inside column)
    doc.text(
      parseFloat(item.rate).toLocaleString("en-IN"),
      COL.rate.x + COL.rate.w - 1, y + 5, { align: "right" }
    );

    // Amount (right-aligned, flush to right margin with 2mm padding)
    doc.text(
      parseFloat(item.amount).toLocaleString("en-IN"),
      MR - 2, y + 5, { align: "right" }
    );

    y += ROW_H;
  });

  y += 2;

  /* ── TOTAL ROW ── */
  setFill(ACCENT);
  doc.rect(ML, y, CW, 9, "F");
  setColor([255, 255, 255]); bold(10);
  doc.text("TOTAL", COL.rate.x + COL.rate.w - 1, y + 6.5, { align: "right" });
  // Use "Rs." instead of "₹" — jsPDF built-in fonts don't support the rupee glyph
  // so it renders as a box and pushes text outside the column boundary
  const totalStr = "Rs. " + calculateTotal(invoiceItems).toLocaleString("en-IN");
  doc.text(totalStr, MR - 3, y + 6.5, { align: "right" });
  y += 13;

  /* ── Amount in words ── */
  setFill(LIGHT);
  doc.rect(ML, y, CW, 8, "F");
  setColor(MID); bold(7.5);
  doc.text("Amount in Words:", ML + 3, y + 5);
  setColor(DARK); normal(8);
  doc.text(numberToWords(calculateTotal(invoiceItems)), ML + 42, y + 5);
  y += 12;

  /* ══════════════════════════════════════════════
     SECTION 6 — TERMS  +  QR  +  STAMP
     (pinned to bottom — draw from bottom up so
      it never overlaps the table)
     ══════════════════════════════════════════════ */
  const FOOTER_TOP = PH - 70;

  /* ── Terms & Conditions ── */
  let ty = FOOTER_TOP + 5;

  setColor(DARK); bold(8);
  doc.text("Terms & Conditions", ML, ty);
  ty += 5;

  const terms = [
    "1. Payment is due within 15 days from invoice date.",
    "2. Interest @18% p.a. will be charged on overdue payments.",
    "3. Goods once sold will not be taken back.",
    "4. All disputes subject to Mohali jurisdiction only.",
    "5. Rental equipment must be returned in same condition as delivered.",
    "6. Security deposit refundable after return & inspection.",
  ];

  normal(7); setColor(DARK);
  terms.forEach((t) => {
    doc.text(t, ML, ty);
    ty += 4.2;
  });

  /* ── QR Code (right zone, above stamp) ── */
  const QR_W   = 28;
  const QR_H   = 28;
  const QR_X   = MR - QR_W;          // flush right
  const STAMP_H = 22;
  const QR_Y   = PH - STAMP_H - QR_H - 8;  // sits above stamp

  setColor(DARK); bold(7);
  doc.text("Scan to Pay", QR_X + QR_W / 2, QR_Y - 2, { align: "center" });
  doc.addImage(paymentQRBase64, "JPEG", QR_X, QR_Y, QR_W, QR_H);

  /* ── Bank details (left of QR) ── */
  const BD_X = MR - QR_W - 58;
  let bd_y = QR_Y + 5;
  setColor(DARK); bold(7.5);
  doc.text("Bank Details", BD_X, bd_y); bd_y += 5;
  normal(7.5); setColor(DARK);
  doc.text("Bank:   " + bankName,       BD_X, bd_y); bd_y += 4.5;
  doc.text("A/c No: " + accountNumber,  BD_X, bd_y); bd_y += 4.5;
  doc.text("IFSC:   " + ifscCode,        BD_X, bd_y);

  /* ── Stamp (bottom-right) ── */
  const STAMP_W = 42;
  const STAMP_X = MR - STAMP_W;
  const STAMP_Y = PH - STAMP_H - 5;

  doc.addImage(stampImageData, "JPEG", STAMP_X, STAMP_Y, STAMP_W, STAMP_H);

  /* ── Authorised signatory label ── */
  setColor(DARK); normal(7);
  doc.text("Authorised Signatory", STAMP_X + STAMP_W / 2, PH - 4, { align: "center" });

  /* ── Page border (gives printed invoice a clean frame) ── */
  setDraw(ACCENT);
  doc.setLineWidth(0.5);
  doc.rect(8, 5, PW - 16, PH - 10);

  /* ── Save ── */
  doc.save(`invoice_${invoiceNo}.pdf`);
};