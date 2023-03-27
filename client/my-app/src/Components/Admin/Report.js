import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function Report() {
    const [totalSale, setTotalSale]=useState("");
    useEffect(() => {
    
  
    return () => {
        axios.post("http://localhost:3001/total_sale",{

        }).then((response)=>{
            console.log(response);
            console.log("the response is",response.data[0].answer);
            setTotalSale(response.data[0].answer);
        })
    }
  }, [])
  
    return (
    <>
        <div className="container container-display">
            <div className="row">
                <h2 className='text-center'> Report Section</h2>
                
            </div>
            <div className="row">

                <div className="col-md-5">
                    Total sale: {totalSale} Rs
                </div>
                <div className="col-md-5">
                   <div>

                    No of customer
                   </div>
                    <div>

                    No of farmer
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
