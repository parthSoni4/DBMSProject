import React from 'react'
import {useParams} from "react-router-dom";

export default function CustomerOption() {
  let {customer_id}=useParams();
  console.log(customer_id);
  return (
    <div>CustomerOption</div>
  )
}
