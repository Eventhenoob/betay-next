import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "otp1873@gmail.com",
    pass: "lzza bsft dukg glrf",
  },
});

const sendMail = async (name:string, email:string, message:string) => {
  return await transporter.sendMail({
    from: `${email}`,
    to: `contact@betaye.fr`,
    subject: "From Contact Us",
    text: `
    name: ${name},
    email: ${email},
    message: ${message}
    `,
  });
};

export default sendMail;
