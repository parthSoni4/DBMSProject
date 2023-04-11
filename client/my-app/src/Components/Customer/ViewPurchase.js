import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
// import { response } from 'express';

export default function ViewPurchase() {
    const[ detail,setDetail]=useState([]);

    const customer_id=sessionStorage.getItem("customer_id");
    console.log("customer id is", customer_id);
    useEffect(() => {
      axios.post("http://localhost:3001/view_purchase",{
        customer_id: customer_id
      }).then((response)=>{
        console.log(response);
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
                            <div>
                                cost: {item.cost}
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
