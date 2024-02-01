import { app } from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.listen(
  process.env.PORT,
  (res) => res.send("server is running ")
  // console.log(`Server is working on ${process.env.PORT}`)
);
