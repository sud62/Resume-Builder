import express from "express";
// const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('this is homepage')
})

app.listen(5000,()=>{console.log("Server is running at port 5000")});