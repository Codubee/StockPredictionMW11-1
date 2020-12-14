const express = require('express');
const app = express()
const axios = require('axios');
require('dotenv').config()

app.get('/stockname',(req, res)=>{
    const headers = {headers:{'Authorization':process.env.API_KEY}}
    let NAME = 'AAPL'
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${NAME}&token=bv6jgev48v6s9eue2ndg`, headers)
    .then(function(response){
        console.log(response);
        res.status(200).json(response.date);
    })
    .catch(function(error){
        console.log(error)
        res.status(400).json({error:"An error occurred"})
    })
})

app.listen(3001,()=>{
    console.log('API is listening on localhost:3001');
})