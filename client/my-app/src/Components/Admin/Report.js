import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function Report() {
    const [totalSale, setTotalSale]=useState("");
    const [totalCustomer, setTotalCustomer]=useState("");
    const [totalFarmer, setTotalFarmer ]=useState("");
    const [totalProduct, setTotalProduct]=useState("");
    const [totalPayment, setTotalPayment]=useState("");
    const [averageSaleperCustomer, setASPC]=useState("");
    const [averageSaleperFarmer, setASPF]=useState("");
    useEffect(() => {
    
    var tSales;
    var tCust;
    var tFarmer;

    return () => {
        axios.post("http://localhost:3001/total_sale",{

        }).then((response)=>{
            console.log(response);
            console.log("the response is",response.data[0].answer);
            setTotalSale(response.data[0].answer);
             tSales=parseInt(response.data[0].answer);
            console.log("yes",tSales);
        })

        axios.post("http://localhost:3001/total_customer",{

        }).then((response)=>{
            console.log(response);
            setTotalCustomer(response.data[0].answer);
             tCust=parseInt(response.data[0].answer);
            console.log("yes2",tCust);
            setASPC(tSales/tCust);
        })

        axios.post("http://localhost:3001/total_farmer",{

        }).then((response)=>{
            console.log(response);
            setTotalFarmer(response.data[0].answer);
            tFarmer=parseInt(response.data[0].answer);
            setASPF(tSales/tFarmer);
        })

        axios.post("http://localhost:3001/total_product",{

        }).then((response)=>{
            console.log(response);
            setTotalProduct(response.data[0].answer);
        })

        axios.post("http://localhost:3001/total_payment",{

        }).then((response)=>{
            console.log(response);

            setTotalPayment(response.data[0].answer);
            console.log("payment is",totalPayment);
        })

        console.log("try ", parseInt(totalSale));

    }
  }, [])
  
    return (
    <>
        <div className="container container-display report-container">
            <div className="row">
                <h2 className='text-center'> Report Section</h2>
                
            </div>
            <div className="row row-report">

                <div className="col-md-5">
                    <div>

                    Total sale: {totalSale} Rs
                    </div>
                    
                    <div>
                        Total product : {totalProduct}
                    </div>
                    <div>
                        Total payment: {totalPayment}
                    </div>
                </div>
                <div className="col-md-5">
                   <div>

                    No of customer :   {totalCustomer}
                   </div>
                    <div>

                    No of farmer :  {totalFarmer}
                    </div>
                    <div>
                        Average purchase per customer: {averageSaleperCustomer}
                    </div>
                    <div>
                        Average Sale per Farmer : {averageSaleperFarmer}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
