import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from "react";
import "./All.css";



export default function AllContact() {

    const[message, setMessage]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/AllContact").then((response)=>{
          console.log(response);
          setMessage(response.data);
          console.log(message);
        })
      }, [])
      
  return (
    <><div className="container container-display">
        {/* hwllo */}
        {
            message.map(item=>(
                <div className="row row-display" key={item.message_id}>
                    <div>
                        Name: {item.name}
                    </div>
                    <div>
                        Email: {item.email}
                    </div>
                    <div>
                        Message: {item.description}
                    </div>
                </div>
            ))
        }
        </div></>
  )
}
