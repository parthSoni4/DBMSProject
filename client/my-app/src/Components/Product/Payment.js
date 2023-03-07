import React, {useState} from 'react'
import {  useElements, useStripe } from '@stripe/react-stripe-js'
import { CardElement } from '@stripe/react-stripe-js';
import axios from "axios";
import "./payment.css"

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}


export default function Payment() {
  const[sucess, setSuccess]=useState(false);
  const stripe=useStripe();
  const elements=useElements();

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
      }).then((response)=>{
        console.log("this is the response",response);
      })
      console.log(response);
      if(response)
      {
        console.log("successful payment")
        setSuccess(true);
      }
    }
    catch(error)
    {
      // console.log("message", response.message);
      console.log("in Error section", error)
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
      </form>
      : <div>
        <h2>You just bought </h2>
      </div>
    }   
    </>
  )
}
