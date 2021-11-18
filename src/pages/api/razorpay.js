const app = require("express")();
const path = require("path");

const cors = require("cors");
require('dotenv').config()

const shortid = require("shortid");
const Razorpay = require("razorpay");

console.log(process.env.RAZOR_PAY_KEY)

const razorpay = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY,
  key_secret:process.env.RAZOR_PAY_SECRET,
});

app.use(cors());




  
export default async  function handler(req, res) {
  // const body = JSON.parse(req.body)

   const payment_capture = 1;
    const amount = req.query.price;
    const currency = "INR";
  
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
  
    try {
      console.log("===================================",req)
      const response = await razorpay.orders.create(options);
      console.log(response);
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
    }

}
