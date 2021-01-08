const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I6EhHCQ7wthzA7gLOukMw58uVmNvTw3ZB9ydb2DUz25oeN0gwY1qxgDnrIKlu3skfLg0ruTMJ41CESbaR3CCV4s004BbBCRM1"
);

// API

// app config
const app =express();

// middlewares
app.use(cors({origin:true}));
app.use(express.json());


// api routes
app.get('/',(req,res)=>{
    res.status(200).send("Hello World")
})


app.post('/payments/create',async (req,res)=>{
    const total = req.query.total;
    console.log('Payment request received BOOM!! for this amount >>>> ', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //subunits of the currency
        currency : "usd"
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/whatsapp-clone-5c8a7/us-central1/api

// http://localhost:5001/whatsapp-clone-5c8a7/us-central1/api