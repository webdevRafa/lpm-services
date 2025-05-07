import * as functions from "firebase-functions/v1"; // ✅ force v1 usage
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: functions.config().gmail.user,
      pass: functions.config().gmail.pass,
    },
  });

export const sendContactEmail = functions.firestore
  .document("contactSubmissions/{docId}")
  .onCreate(async (snapshot) => {
    const data = snapshot.data();

    if (!data) {
      console.error("No data found.");
      return;
    }

    const mailOptions = {
  from: `"Leaked Proof Management Services" <${functions.config().gmail.user}>`,
  to: functions.config().email.receiver,
  subject: `New Contact Submission from ${data.fullName}`,
  text: `Message: ${data.message}\nEmail: ${data.email}\nPhone: ${data.phone}`,
  html: `
    <div style="font-family: Arial, sans-serif; color: #1e1e1e; line-height: 1.5;">
      <p style="margin-bottom: 20px;"><strong>Name:</strong> ${data.fullName}</p>
      <p style="margin-bottom: 20px;"><strong>Message:</strong><br>${data.message}</p>
      <p style="margin-bottom: 6px;"><strong>Email:</strong> 
        <a href="mailto:${data.email}" style="color: #0ea5e9; text-decoration: none;">${data.email}</a>
      </p>
      <p><strong>Phone:</strong> 
        <a href="tel:${data.phone.replace(/\D/g, '')}" style="color: #0ea5e9; text-decoration: none;">${data.phone}</a>
      </p>
    </div>
  `
};

    try {
      await transporter.sendMail(mailOptions);
      console.log("✅ Email sent.");
    } catch (err) {
      console.error("❌ Failed to send email:", err);
    }
  });

  // OFFER REQUEST EMAIL FUNCTION
export const sendOfferEmail = functions.firestore
.document("offerRequests/{docId}")
.onCreate(async (snap) => {
  const data = snap.data();

  const mailOptions = {
    from: `"Offer Notifications" <your-email@gmail.com>`,
    to: functions.config().email.receiver,
    subject: "🔥 New Offer Request Submitted",
    html: `
      <h2 style="margin-bottom:16px;">New Offer Request</h2>
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p><strong>Address:</strong> ${data.propertyAddress}</p>
      <p><strong>Beds:</strong> ${data.beds}</p>
      <p><strong>Baths:</strong> ${data.baths}</p>
      <p><strong>Square Feet:</strong> ${data.squareFeet}</p>
      <p><strong>Additional Details:</strong></p>
      <p>${data.additionalDetails || "N/A"}</p>
      <br />
      <p style="font-size: 12px; color: gray;">Submitted at ${new Date().toLocaleString()}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Offer email sent!");
  } catch (error) {
    console.error("❌ Error sending offer email:", error);
  }
});