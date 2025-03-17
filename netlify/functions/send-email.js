const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { email, number, address } = JSON.parse(event.body);

    const name = email.substring(0, email.lastIndexOf("@"));

    if (!email || !number || !address) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: "Missing required fields" }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP Connection Successful");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #0B1956;">Thank You for Your Submission</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received the following details:</p>
        <ul>
          <li>Email: ${email}</li>
          <li>Phone Number: ${number}</li>
          <li>Address: ${address}</li>
        </ul>
        <p>We will contact you shortly.</p>
        <p>Warm regards,</p>
        <p><strong>Jivhala Foundation</strong></p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Jivhala Foundation" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank You for Your Submission",
      html: htmlContent,
    });

    console.log("Email sent successfully:", info);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId,
      }),
    };
  } catch (error) {
    console.error("Function error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Error sending email",
        error: error.message,
      }),
    };
  }
};
