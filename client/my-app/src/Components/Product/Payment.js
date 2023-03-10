import React, {useState} from 'react'
import {  useElements, useStripe } from '@stripe/react-stripe-js'
import { CardElement } from '@stripe/react-stripe-js';
import axios from "axios";
import "./payment.css"
import { useNavigate } from 'react-router-dom';
import "./ProductDisplay";

// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "#c4f0ff",
// 			color: "#fff",
// 			fontWeight: 500,
// 			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "#fce883" },
// 			"::placeholder": { color: "#87bbfd" }
// 		},
// 		invalid: {
// 			iconColor: "#ffc7ee",
// 			color: "#ffc7ee"
// 		}
// 	}
// }


export default function Payment() {
  const navigate=useNavigate("/root");
  const[sucess, setSuccess]=useState(false);
  const[message, setMessage]=useState("Payment status");
  const stripe=useStripe();
  const elements=useElements();
  // console.log(id);
  const product_id=sessionStorage.getItem("product_id");
  console.log("the product id is",product_id);
  const customer_id=sessionStorage.getItem("customer_id");
  console.log("the customer id is", customer_id);

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const{error, paymentMethod}=await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

  if(!error)
  {
    try{
      const {id}=paymentMethod
      const {response}= await axios.post("http://localhost:3001/payment", {
        amount: 1000,
        id
      }).then((r)=>{
        console.log("this is the response",r);
        console.log(r.data);
        if(r.data=="not right")
        {
          console.log("hello");
          setMessage("Your payment is unsuccessful");
        }
        else{
          setMessage("Your payment is successful");
          navigate("../ProductDisplay");
        }
      })
      console.log(response);
      if(response)
      {
        console.log("successful payment")
        setSuccess(true);
        setMessage("payment is not successfull");
      }
    }
    catch(error)
    {
      setSuccess(false);
      // console.log("message", response.message);
      console.log("in Error section", error.data)
    }
  }
  else{
    console.log(error.message)
  }
}
  return (
    <>
      {!sucess ?
      <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
          <div className="FormRow">
            <CardElement/>
          </div>
        </fieldset>
        <button>Pay</button>
        <p>{message}</p>
      </form>
      : <div>
        <h2>You just bought </h2>
      </div>
    }   
    </>
  )
}
