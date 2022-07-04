require('dotenv').config(); //for this we need to add package from npm
const express = require('express');
const app = new express();
const hbs = require('hbs'); //this also need to be added 
const port = process.env.PORT || '8000';
const medinRouter = require("./routers/medins");
//this is we used to recognize the incoming req is json object 
app.use(express.json());
app.use(express.urlencoded({extended : false})); // this is we used to get form data values
app.use(medinRouter); // this is used to regiter router in our app
const path = require('path');
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
app.use(express.static(staticPath)); // need to define root for html/hbs initialize
app.set("view engine", "hbs"); // by default engin is hbs 
app.set("views",templatePath); //to define views folder path
hbs.registerPartials(partialsPath); //now need to tell that we are using "partials"

app.listen(port, () => {
    console.log(`Connection is strup at ${port}`);
});