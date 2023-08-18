const express = require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });


app.enable('trust proxy');
app.get('/api/whoami',function(req,res){
    const information = req.headers;
    res.send({
        "ipaddress":req.ip,
        "language":information['accept-language'],
        "software":information['user-agent']
    });
    console.log(information);
});

app.listen(process.env.PORT || 8000,function(){
    console.log("Server is listening on port 8000");
})