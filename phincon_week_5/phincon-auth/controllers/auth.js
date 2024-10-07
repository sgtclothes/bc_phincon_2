const { User } = require("@/models");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { generateVerificationToken } = require("@/controllers/token");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const registerUser = async (req, res) => {
    try {
        const { fullname, username, email, password, phoneNumber } = req.body;
        const newUser = await User.create({
            us_fullname: fullname,
            us_username: username,
            us_email: email,
            us_password: await bcrypt.hash(password, 10),
            us_phone_number: phoneNumber,
            us_active: false,
        });
        // const verificationToken = generateVerificationToken(newUser.us_id, newUser.us_email);

        // const emailTemplateSource = fs.readFileSync(
        //     path.join(__dirname, "../views/templates/emailVerification.hbs"),
        //     "utf8"
        // );
        // const template = handlebars.compile(emailTemplateSource);
        // const htmlToSend = template({
        //     logoUrl: `${process.env.BASE_URL}:${process.env.PORT}/images/logo-phincon-academy.png`,
        //     username: username,
        //     verificationLink: `${process.env.BASE_URL}:${process.env.PORT}/auth/verify-email?token=${verificationToken}`,
        // });
        const transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_APP_PASSWORD,
            },
        });
        const mailOptions = {
            from: "phinconacademy@gmail.com",
            to: email,
            subject: "Verification Mail",
            html: '<div>Tes Verifikasi</div>',
        };
        await transporter.sendMail(mailOptions);
        return res
            .status(201)
            .send({ status: "success", code: 201, message: "Successfully add new user", data: newUser });
    } catch (error) {
        return res.status(500).send({ status: "failed", code: 500, message: error.message });
    }
};

module.exports = { registerUser };
