//Primero, debemos instalar la librería usando npm: 
//   npm install nodemailer

//Después, definimos un CONTOLADOR eMail.js que exporte un método sendEmail:

const nodemailer = require('nodemailer'); 

// Email sender function
// exports.sendEmail = function(req, res)
// {
//Para enviar un email, primero debemos definir un TRANSPORTER. Lo haremos de la siguiente manera, sustituyendo los datos por los de nuestra cuenta gmail:

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'alfarogrtb2021@gmail.com',
        pass: 'th3br1dg3!'
    }
});

//Definimos el propio EMAIL:
const mailBody = {
    from: 'alfarogrtb2021@gmail.com', //Remitente
    to: 'alfarogr@hotmail.com',   //Destinatario
    subject: 'Correo enviado con NodeJS',
    text: 'Ya sé kungfu'
};

//Enviamos el email
transporter.sendMail(mailBody, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
});
//};