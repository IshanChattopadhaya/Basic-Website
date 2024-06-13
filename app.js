const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());

// PUG specific stuff
// set template engine as pug
app.set('view engine','pug');
//set the views directory
app.set('views',path.join(__dirname,'views'));

//Endpoints
app.get('/',(req,res)=>{
    const params = {};
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req,res)=>{
    const params = {};
    res.status(200).render('contact.pug',params);
});
app.listen(port,()=>{
    console.log(`App started on port ${port}`);
});
// vid 12:29