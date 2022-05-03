const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");


const stripe = require("stripe")("sk_test_51Kj2rgJH100EsiJionnJrKr3Pin18Wl5sOU93Kwiuo0ptQy28KEiliolnjblTOAHzFOtWaPL089OfNxJOWOud3lZ00hWVS7owF")
//Api

// App config 
const app = express();

// Midleware
app.use(cors({origin: true}));
app.use(express.json());

//Api routes
app.get('/',(request, response)=> response.status(200).send("Hello World"));

app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;
    console.log('payment request received Boom >>>>', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency:'usd',
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//Listen command
exports.api = functions.https.onRequest(app)



