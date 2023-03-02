import React from 'react'
import  {useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

export default function ProductDetailedDisplay() {
    // console.log(product_id);
    const location=useLocation();
    const [data, setData]=useState([]);
    const id=location.state.a;
    
    useEffect(() => {
      axios.post("http://localhost:3001/product_detailed_display", {id})
      .then(response=>{console.log(response.data)
        setData(response.data)
        console.log(response.data.id);
        })
      .catch(error=>console.log(error));
    }, [])
    

  return (
    <>
    <div>ProductDetailedDisplay</div>
    {/* <div>{id}</div>
     */}
     <h1>{data.id}</h1>
    </>
  )
}
