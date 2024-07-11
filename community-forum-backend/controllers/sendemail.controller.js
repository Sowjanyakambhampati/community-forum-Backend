
const nodemailer = require("nodemailer");

class EmailController {

    // Create a new  post
    async sendEmail(req, res) {
        const transporter = nodemailer.createTransport(
            {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'info.buurthub@gmail.com',
                    pass: 'gtnyrirmubzfzngo',
                },
            }
        );
        transporter.sendMail(
            {
                to: req.body.email,
                subject: 'BuurtHub - Registered Event notification !!',
                html: '<h1> Hello,  Thanks for registering this event!</h1>'
            }
        ).then(() => {
            console.log('Email sent');
        }).catch((error) => {
            console.error('Error sending email', error);
        });
    }

    //Reserve product with image by node mailer
    async reserveProduct(req, res) {
        const transporter = nodemailer.createTransport(
            {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'info@buurthub.com',
                    pass: 'gtnyrirmubzfzngo',
                },
            }
        );
        transporter.sendMail(
            {
                to: req.body.email,
                subject: 'BuurtHub - Product Reservation notification !!',
                html: '<h1> Hello,  Reservation successful and email sent!</h1>'
            }
        ).then(() => {
            console.log('Email sent');
        }).catch((error) => {
            console.error('Error sending email', error);
        });
}

//Reserve product with image by node mailer
async reserveProduct(req, res) {
    const transporter = nodemailer.createTransport(
        {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'info@buurthub.com',
                pass: 'gtnyrirmubzfzngo',
            },

        );
        transporter.sendMail(
            {
                to: req.body.email,
                subject: 'BuurtHub - Product Reservation notification !!',
                html: '<h1> Hello,  Reservation successful and email sent!</h1>'
            }
        ).then(() => {
            console.log('Email sent');
        }).catch((error) => {
            console.error('Error sending email', error);
        });
}


module.exports = new EmailController();