const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const strpie = require('stripe')('sk_test_51HVHHYKTcLtwblEU9vOBYeJLdNsKskAv11zAtJxPuyviezpiCvOwn4VjBAuseiFPXG2WwtwftN7Ht0qQt36ebxy000k2sXXcVE');

// API

// APP config
const app = express();

// Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// API routes
app.get('/',(req,res) => {
    res.status(200).send('Hello world');
})

app.post('/payments/create', async (req,res) => {
    const total = req.query.total;
    console.log('payment value ',total);
    const paymentIntent = await strpie.paymentIntents.create({
        amount: total,
        currency: 'INR'
    })

    res.status(201).json({
        clientSecret: paymentIntent.client_secret, 
     })
}) 



// Listen commands
exports.api = functions.https.onRequest(app);

