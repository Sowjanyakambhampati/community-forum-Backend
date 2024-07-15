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
    async sendEmailProdOwner(req, res) {
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
                to: req.body.userEmail,
                subject: 'BuurtHub - Product Reservation notification !!',
                html: '<h1> Hello,  Your posted product on community forum has been registered!</h1>'
            }
        ).then(() => {
            console.log('Email sent');
        }).catch((error) => {
            console.error('Error sending email', error);
        });
    }


}

module.exports = new EmailController();