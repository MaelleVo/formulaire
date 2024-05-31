require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Mailgun = require("mailgun.js");
const formData = require("form-data");

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "Maelle Vo",
  key: process.env.MAILGUN_API_KEY,
});

const app = express();

app.use(express.json());
app.use(cors());

app.post("/send-form", async (req, res) => {
  try {
    const response = await mg.messages.create(process.env.MAILGUN_SANDBOX, {
      from: `${req.body.firstname} ${req.body.lastname} <${req.body.email}>`,
      to: process.env.EMAIL,
      subject: req.body.subject,
      text: req.body.message,
    });
    console.log(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is on");
});
