const nodemailer = require('nodemailer');

class MailService{

    #transporter;

    constructor(){   
        this.#transporter = this.initializeTransporter();
    }

    #initializeTransporter(){
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        return transporter;
    }

    sendMail(receiver, subject, body){
        this.#transporter.sendMail({
            from: '"'+process.env.MAIL_FROM_NAME+'" <'+process.env.MAIL_FROM_ADDRESS+'>',
            to: receiver,
            subject: subject,
            html: body,
        });
    }
}

module.exports = MailService;