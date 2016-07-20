/**
 * Created by asher on 16-7-19.
 */
var nodemailer = require('nodemailer');
var config=require("./config");
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(config.conn_str);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"测试一下" <heavenduke@heavenduke.com>', // sender address
    to: 'wangaoxin@foxmail.com', // list of receivers
    subject: '最近下大雨了', // Subject line
    text: '要注意身体啊孩子', // plaintext body
    html: '<b>身体</b>要紧' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});