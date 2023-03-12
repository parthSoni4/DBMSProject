import React from 'react'
import { useState, useEffect} from "react";
import axios from "axios";
import "./All.css";


export default function Allpayment() {
    const[ detail,setDetail]=useState([]);
    useEffect(() => {
      axios.get("http://localhost:3001/Allpayment").then((response)=>{
        console.log(response.data);
        setDetail(response.data);
      })
    }, [])
    
    return (
    <>
        <div className="container container-display">
            {
                detail.map(item=>(
                    <div className="row row-display">
                        <div className="col-sm">

                        <div>
                            Farmer Id: {item.farmer_id}
                        </div>          
                        

                           <div>
                            Farmer first name: {item.farmerFname}
                            </div> 
                            <div>
                                Farmer last name: {item.farmerLname} 
                                
                            </div>
                            <div>
                                Farmer Phone no: {item.farmer_phone_no}
                            </div>
                        
                        </div>
                        <div className="col-sm">
                            <div>
                                Customer id: {item.customer_id}
                            </div>
                            <div>
                                Customer First name: {item.customerFname}
                            </div>
                            <div>
                                Customer last name: {item.customerLname}
                            </div>
                            <div>
                                Customer Phone no : {item.customer_phone_no}
                            </div>
                            <div>
                                Customer email: {item.email}
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                product id : {item.product_id}
                            </div>
                            <div>
                                Payment: {item.payment_id}
                            </div>
                            <div>
                                product name: {item.text}
                            </div>
                            <div>
                                Type: {item.type}
                            </div>
                            <div>
                                quantity: {item.quantity}
                            </div>
                            <div>
                                date: {item.product_date}
                            </div>
                            <div>
                                description: {item.description}
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}
