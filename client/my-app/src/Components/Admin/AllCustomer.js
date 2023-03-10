import React, {useState, useEffect} from 'react'
import Axios from "axios"

export default function AllCustomer() {
  const[data, setdata]=useState([]);
  function get_value()
  {
    Axios.get("http://localhost:3001/AllCustomer").then((response)=>{
        setdata(response.data);
    })
  }
    return (
        
    <>
        <button onClick={get_value}>Print</button>

        <div>
            {
                data.map(item=>(
                    <div key={item.customer_id}>
                        <div>
                            {item.fname}
                        </div>
                        <div>
                            {item.lname}
                            {item.lname}
                            {item.phone_no}
                            {item.email}
                            {item.address}
                            {item.state}
                            {item.city}
                            {item.password}
                        </div>
                    </div>

                ))
            }
        </div>
    </>
  )
}
