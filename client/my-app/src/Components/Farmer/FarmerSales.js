import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';

export default function FarmerSales() {
    const[ detail,setDetail]=useState([]);

    const farmer_id=sessionStorage.getItem("farmer_id");
    console.log("farmer id is",farmer_id);
    useEffect(() => {
      axios.post("http://localhost:3001/farmer_sales",{
        farmer_id: farmer_id
      }).then((response)=>{
        console.log(response);
        setDetail(response.data);

      })
    }, [])
    
  return (
    <>
    {/* hello in the farmer zone */}
    <div className="container container-display">
            {
                detail.map(item=>(
                    <div className="row row-display">
                        
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
