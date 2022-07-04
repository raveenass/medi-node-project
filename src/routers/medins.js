const express = require('express');
const router = new express.Router();
//this is used to connect with model
const Student = require("../modals/contact")

router.get("/", async(req,res) => {
    res.render('index');
});

router.get("/about", async(req,res) => {
    res.render('about');
});
router.get("/product", async(req,res) => {
    res.render('product');
});
router.get("/client", async(req,res) => {
    res.render('client');
});
router.get("/contact", async(req,res) => {
    res.render('contact');
});
module.exports = router;