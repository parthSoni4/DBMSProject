import React, {useState, useEffect} from 'react'
import Axios from "axios"
import "./All.css";
import image from "../HomeImages/bg3.webp";


export default function AllCustomer() {
  const[data, setdata]=useState([]);
  const Delete=(a)=>{
    console.log("the customer to delete is",a);
    Axios.post("http://localhost:3001/customer_delete",{
      customer_id: a
    }).then((response)=>{
      console.log(response);
    })
  }
  function get_value()
  {
    Axios.get("http://localhost:3001/AllCustomer").then((response)=>{
        setdata(response.data);
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/AllCustomer").then((response)=>{
        setdata(response.data);
        
    })
   
    
  }, [])
  
    return (
        
    <>
        {/* <button onClick={get_value}>Print</button> */}

        <div className="container container-display">
            
            {

                
                data.map(item=>(
                    <div className="row row-display"  key={item.customer_id}>
                        <div>
                           first name: {item.fname}
                        </div>
                        <div>
                           last name: {item.lname} &nbsp; &nbsp;&nbsp; 
                            {/* {item.lname} <br></br> */}
                            phone no: {item.phone_no} <br></br>
                           email: {item.email} &nbsp; &nbsp;&nbsp; 
                           address: {item.address} <br></br>
                           state: {item.state} &nbsp; &nbsp;&nbsp; 
                           city:  {item.city} <br></br>
                           password:  {item.password} <br></br>
                        </div>
                        <div>
                          <button className="btn btn-default btn-primary option-button2" onClick={()=>{Delete(item.customer_id)}}>Delete</button>
                        </div>
                    </div>

                ))
            }
        </div>
    </>
  )
}
