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
      <h2 style="color: #0B1956;">Thank You for Your Interest in Supporting Jivhala Foundation</h2>
      <p>Dear ${name},</p>
      <p>Thank you for your interest in supporting Jivhala Foundation. We truly appreciate your willingness to contribute towards our cause.</p>
      <p>Our team has received your details and will reach out to you shortly to discuss the donation process and how your support can make a meaningful impact.</p>
      <p>If you have any questions or specific preferences regarding your donation, please feel free to reply to this email or contact us at:</p>
      <ul>
        <li>Email: <a href="mailto:jivhalafoundation2015@gmail.com">jivhalafoundation2015@gmail.com</a></li>
        <li>Phone: 8208769088 / 9049144902</li>
      </ul>
      <p>Your generosity helps us continue our mission, and we look forward to connecting with you soon.</p>
      <p>Warm regards,</p>
      <p><strong>Jivhala Foundation</strong></p>
      <p><a href="https://jivhala.com" target="_blank">jivhala.com</a> | <a href="mailto:jivhalafoundation2015@gmail.com">jivhalafoundation2015@gmail.com</a> | 8208769088 / 9049144902</p>
    </div>
  `;
  
    // Send mail
    const info = await transporter.sendMail({
      from: `"Jivhala Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.MAIL_USER,
      replyTo: email,
      subject: ` Thank You for Your Interest in Supporting Jivhala Foundation`,
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
