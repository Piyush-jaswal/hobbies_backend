const nodemailer = require("nodemailer");
const sendMail = async (req,res) =>
{
    console.log("hi");
     var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'piyush1233210jas@gmail.com',
            pass: 'xgmtdpdfpciyrrrc'
        }
     });
     console.log("hi-2");
     console.log(req.body)
     const info = JSON.stringify(req.body);
     console.log("info"+info+typeof(info))
      var mailOptions = {
        from: 'piyush1233210jas@gmail.com',
        to: 'info.redpositive.in',
        subject: 'Data to be sent',
        text: info,
       
     }
     console.log("hi-3");

     transporter.sendMail(mailOptions,function(error,info){
        res.send(req.body);
        console.log("hi-4")
        if(error)
        {
            console.log(error);
        }
        else{
            console.log('mail Sent '+ info.response);
        }
     })
}
module.exports = sendMail;