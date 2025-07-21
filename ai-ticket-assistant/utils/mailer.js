import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASSWORD,
        },
    });

 try {
       const info = await transporter.sendMail( {
           from: "DEVCOLLAB-AI",
           to,
           subject,
           text,
       });

         console.log("Email sent successfully:", info.response);
         return info
 } catch (error) {
       console.error("Error sending email:", error);
       throw new Error("Failed to send email");
   }
    
    

  
}