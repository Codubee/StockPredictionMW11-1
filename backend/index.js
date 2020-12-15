const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('API is up and running')
})

app.get('/news/:name', (req,res)=> {

    let currentDate = new Date()
    let weekAgo = new Date()
    weekAgo.setDate(currentDate.getDate() - 7)
    
    let name = req.params.name
    let weekAgoString = weekAgo.toISOString().slice(0, 10)
    let currentString = currentDate.toISOString().slice(0, 10)

    const headers = {headers:{'X-Finnhub-Token':process.env.FINNHUB_TOKEN}}
    axios.get(`https://finnhub.io/api/v1/company-news?symbol=${name}&from=${weekAgoString}&to=${currentString}`, headers)  
    .then(function(response) {
        res.status(200).json(response.data);
    })
    .catch(function(error) {
        console.log(error)
        res.status(400).json({error:"An error occured"})
    })

})

module.exports = app;