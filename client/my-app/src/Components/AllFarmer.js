import axios from "axios";
import react, {useState, useEffect} from "react";

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
    return(
        <>
            <button onClick={get_value}>print</button>
           <div>
            {
                data.map(item=>(
                    <div key={item.fname}>
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
