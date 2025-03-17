const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { email, subject, message, name } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const htmlContent = `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #0B1956;">Thank you for contacting Jivhala Foundation</h2>
    <p>Dear ${name},</p>
    <p>We appreciate you reaching out to us. Your message has been successfully received and our team is reviewing your inquiry. Below is a summary of the details you provided:</p>
    <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <div style="margin: 20px 0;">
      <h3 style="margin-bottom: 10px;">Message:</h3>
      <p>${message}</p>
    </div>
    <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
    <p>Our team will get back to you as soon as possible with further information or answers to your queries.</p>
    <p>Thank you for your interest and support.</p>
    <p>Sincerely,<br />The Jivhala Foundation Team</p>
  </div>
`;

    // Send mail
    const info = await transporter.sendMail({
      from: `"Jivhala Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.MAIL_USER,
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: htmlContent,
    });

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
