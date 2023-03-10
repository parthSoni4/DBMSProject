import axios from "axios";
import react, {useState, useEffect} from "react";
// import { useEffect } from "react";
import "./All.css";

export default function AllFarmer()
{
    const[data,setdata]=useState([]);
    var display="";
    function get_value()
    {

        axios.get("http://localhost:3001/AllFarmer").then((response)=>{
            // console.log(response.data);
            setdata(response.data);
        })
        
         

    }
    useEffect(() => {
        axios.get("http://localhost:3001/AllFarmer").then((response)=>{
            // console.log(response.data);
            setdata(response.data);
        })
    }, [])
    
    return(
        <>
            {/* <button onClick={get_value}>print</button> */}
           <div className="container container-display">
            {
                data.map(item=>(
                    <div classnName="row row-display"  key={item.farmer_id}>
                    <div> {item.fname}   {item.lname}  {item.age}</div>
                    <div> {item.aadhar_no}  {item.unique_id} {item.phone_no} </div>
                    <div>  {item.city}  {item.state} {item.pincode}  {item.password}</div>
                </div>
            ))
            }
           </div>
           
        </>
    )
}
