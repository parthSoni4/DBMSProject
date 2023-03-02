import React from 'react'
import  {useLocation} from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios";

export default function ProductDetailedDisplay() {
    // console.log(product_id);
    const location=useLocation();
    const id=location.state.a;
    
    useEffect(() => {
      axios.post("https://localhost:3001/product_detailed_display", {id})
      .then(response=>console.log(response.data))
      .catch(error=>console.log(error));
    }, [])
    

  return (
    <>
    <div>ProductDetailedDisplay</div>
    <div>{id}</div>
    </>
  )
}
