import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
 const { name, email, message } = req.body;

 try {
  const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
   },
  });

  await transporter.sendMail({
   from: email,
   to: "your-email@gmail.com",
   subject: `New Contact Form Message from ${name}`,
   text: message,
  });

  res.json({ success: true });
 } catch (error) {
  console.error(error);
  res.json({ success: false });
 }
});

app.listen(5000, () => console.log("Server running on port 5000"));
