// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ success: false, message: "Method not allowed" });
//   }

//   try {
//     const { firstName, lastName, email, phone, message } = req.body;

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.MAIL_USER, // your Gmail
//         pass: process.env.MAIL_PASS, // 16-digit App Password
//       },
//     });

//     // 1️⃣ Send email to admin
//     await transporter.sendMail({
//       from: process.env.MAIL_USER,
//       to: process.env.MAIL_USER,
//       subject: "New Contact Form Submission",
//       html: `
//         <h2>New Form Submission</h2>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone || "-"}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     // 2️⃣ Auto-reply to user
//     await transporter.sendMail({
//       from: process.env.MAIL_USER,
//       to: email,
//       subject: "We received your inquiry — Upliftr Media",
//       html: `
//         <p>Hi <strong>${firstName}</strong>,</p>
//         <p>Thank you for contacting <strong>Upliftr Media</strong>. 
//            We have received your message and will get back to you shortly.</p>
//         <p>Meanwhile, feel free to reply to this email if needed.</p>
//         <p>Regards,<br/>Upliftr Media Team</p>
//       `,
//     });

//     return res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("Contact API Error:", error);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// }

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail
        pass: process.env.MAIL_PASS, // 16-digit App Password
      },
    });

    // 1️⃣ Send email to admin
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2️⃣ Auto-reply to user
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "We received your inquiry — Upliftr Media",
      html: `
        <p>Hi <strong>${firstName}</strong>,</p>
        <p>Thank you for contacting <strong>Upliftr Media</strong>. 
           We have received your message and will get back to you shortly.</p>
        <p>Meanwhile, feel free to reply to this email if needed.</p>
        <p>Regards,<br/>Upliftr Media Team</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}




