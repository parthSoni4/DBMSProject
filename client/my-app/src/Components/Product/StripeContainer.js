import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";

const PUBLIC_KEY="pk_test_51MiFRcSDgVDtkN9NXnwTEbFjanaIAM9oen8WliuDp00IvsvBWWG0kqFVEoLlC4Zm5Hi251sxljc7FeX90AtQSmsm00xLcxSiQE"
const stripTestPromise=loadStripe("pk_test_51MiFRcSDgVDtkN9NXnwTEbFjanaIAM9oen8WliuDp00IvsvBWWG0kqFVEoLlC4Zm5Hi251sxljc7FeX90AtQSmsm00xLcxSiQE")

export default function StripeContainer() {
  const amount=sessionStorage.getItem("amount");
  console.log("the amount in stripe container", amount);
  return (
    <Elements stripe={stripTestPromise}>
        <Payment></Payment>
    </Elements>
  
  )
}
