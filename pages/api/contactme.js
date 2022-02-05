const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xanikishkhan@gmail.com",
    pass: "x5a5n5i5k5",
  },
});

export default function handler(req, res) {
  var { name, email, message } = JSON.parse(req.body);
  const mailOptions = {
    from: email,
    to: "xanikishkhan@gmail.com",
    subject:
      "This mail is sent from you Portfolio page from " +
      name +
      " email - " +
      email,
    text: message,
  };
  transporter.sendMail(mailOptions);
  res.json({ msg: "Your message has been sent" });
}
