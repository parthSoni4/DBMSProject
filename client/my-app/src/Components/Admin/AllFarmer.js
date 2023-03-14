import axios from "axios";
import react, {useState, useEffect} from "react";
// import { useEffect } from "react";
import "./All.css";
import image from "../HomeImages/bg3.webp";

export default function AllFarmer()
{
    const Delete=(id)=>{
        console.log("The id we want to delete",id);
        axios.post("http://localhost:3001/farmer_delete",{
            farmer_id: id
        }).then((response)=>{
            console.log(response);
        })

    }
    // useEffect(() => {
    //     const style = document.createElement('style');
    //     style.textContent = `body { background-image: url(${image}); background-size: cover; background-repeat: no-repeat; }`;
    //     document.head.appendChild(style);
    
    //   }, )
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
                    <div className="row row-display"  key={item.farmer_id}>
                    <div> First name: {item.fname}  <br></br>       last name: {item.lname}         <br></br>      age: {item.age}</div>
                    <div> aadhar no: {item.aadhar_no}    <br></br>         unique id: {item.unique_id}        <br></br>     phone no{item.phone_no} </div>
                    <div> city:  {item.city}   <br></br>         state: {item.state}        <br></br>    pincode: {item.pincode}     <br></br>         password: {item.password}</div>
                   <div>

                    <button className="btn btn-default btn-primary" onClick={()=>{Delete(item.farmer_id)}}>Delete</button>
                   </div>
                </div>
            ))
            }
           </div>
           
        </>
    )
}
