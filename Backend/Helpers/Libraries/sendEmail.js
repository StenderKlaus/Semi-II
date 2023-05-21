const nodemailer = require('nodemailer')

const sendEmail = async (mailOptions) =>{

    const {SMTP_HOST,SMTP_PORT,EMAIL_USERNAME,EMAIL_APP_PASSWORD}=process.env

    let transporter = nodemailer.createTransport({

        // host : SMTP_HOST ,
        // port : SMTP_PORT  ,
        service : 'Gmail',
        auth :{
            user : EMAIL_USERNAME ,
            pass : EMAIL_APP_PASSWORD
        } ,
         tls: {rejectUnauthorized: false}
       
    })

    let info = await transporter.sendMail(mailOptions) ; 

    console.log(`Message send : ${info.messageId}`)

}


module.exports = sendEmail


