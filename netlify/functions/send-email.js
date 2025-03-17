const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    console.log(event.body);
    const { email, phone, address } = JSON.parse(event.body);
    
    const name = email.substring(0, email.lastIndexOf("@"));

    if (!email || !phone || !address) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
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

    const info = await transporter.sendMail({
      from: `"Jivhala Foundation" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Thank You for Your Interest in Supporting Jivhala Foundation",
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
