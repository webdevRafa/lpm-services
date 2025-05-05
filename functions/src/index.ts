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
