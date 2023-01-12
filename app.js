const bodyParser = require("body-parser");
const express = require("express");
const nodeMailer = require("nodemailer");

const app = new express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.post("/", async (req, res) => {
    const { email } = req.body;
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'smitamanikandan2221@gmail.com',
            pass: 'juolzmbbxoedbkyu'
        }
    });

    const message = {
        from: 'smitamanikandan2221@gmail.com',
        to: `${email}`,
        subject: "node-mailer-assignment",
        html: '<html><body><div><p><b>Hello My dear friend,</b></p><p><b>Greetings,</b></p><p>Hope you are doing well.</p><p>This is my first mail by using nodemailer.</p><p><b>Thanks & Regards,</b></p><p><b>Smita</b></p></div> </body></html>'
    }

    let info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);

    res.send("email sended successfully !");
})


app.listen(port, () => {
    console.log(`the server is listening at http://localhost:${port}`);
})
