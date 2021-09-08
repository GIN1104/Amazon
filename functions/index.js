const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require('stripe')('sk_test_51JWnK2CvczMvL8dLo6wGarTfPKVWBHeFO2PniDTUUAYR3lQ139fn1bGFLXKpL30hEAahyVJe65w1qOowkecnmHru00zvAUzauZ');

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Resieved !!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

exports.api = functions.https.onRequest(app);

// console.log(functions, express, cors, stripe);
//  http://localhost:5001/fir-8b960/us-central1/api
