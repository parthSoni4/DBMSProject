import React, { useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import "../Farmer/FarmerOption.";
import { useNavigate } from 'react-router-dom';

export default function ProductInsert() {
    const navigate=useNavigate("/root");
    const[text, setText]=useState("");
    const[file,setFile]=useState(null);
    const[cost,setCost]=useState("");
    const[quantity,setQuantity]=useState("");
    const[category,setCategory]=useState("");
    const[type,setType]=useState("");
    const[description,setDescription]=useState("");
    const[date, setDate]=useState("");
    const[latitude, setLatitude]=useState(null);
    const[longitude, setLongitude]=useState(null);


    //const farmer_id=location.state.farmer_id;
    //console.log(" farmer id is",farmer_id);

    const handleSubmit = (event) => {
        console.log(quantity);
        console.log(date);
        console.log(type);
        event.preventDefault();
        const formdata = new FormData();

        formdata.append("text", text);
        console.log(text);
        formdata.append("file", file);
        console.log(file);
        formdata.append("date", date);
        formdata.append("type", type);
        formdata.append("description", description);
        formdata.append("quantity", quantity);
        formdata.append("category", category);
        formdata.append("cost", cost);
        formdata.append("farmer_id", farmer_id);
        console.log(cost);

        axios.post("http://localhost:3001/insertProduct",formdata).then((response)=>{
            console.log("this is the ",response.data.message);
            if(response.data.message==="successful")
            {
                console.log("we will redirect to the previous page")
                // navigate("../FarmerOption")
                navigate(`../FarmerOption/farmer_id/${farmer_id}`, { state: {farmer_id}});

            }
            // console.log(response);
            // console.log(formdata);
        })
            .catch((error) => {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    const get_location=()=>{
        console.log('yes the farmer id is', farmer_id);
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log("the longitude is", longitude);
            console.log("the latitude is",latitude);
            axios.post("http://localhost:3001/farmer_location",{
                farmer_id: farmer_id,
                latitude: latitude,
                longitude: longitude
            }).then((response)=>{
                console.log(response);
            })
        }, (error)=>{
            console.log(error);
        })
    }
    
      
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Enter the Product details</h2>
                <div className="input-group">

                    <input type="text" value={text} placeholder="Enter the product name ..." className="form-control" onChange={(event) => setText(event.target.value)} />
                </div>
                <div className="input-group1">
                    <input type="file" placeholder="Select product picture" className="form-control" onChange={(event) => setFile(event.target.files[0])} />
                </div>
                <div className="input-group">


                    <input type="number" placeholder="Enter the cost ..." value={cost} className="form-control" onChange={(event) => setCost(event.target.value)} />
                </div>
                <div className="input-group1">
                    <select name="" id="" className='form-control' onChange={(e) => { setCategory(e.target.value) }}>
                        <option value="" disabled="disabled">Select Category ...</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="Grains">Grains</option>
                    </select>
                </div>
                <div className="input-group">
                    Organic  <input type="radio" name="Category" value="organic" onChange={(e) => { setType(e.target.value); }} />
                    Non-organic  <input type="radio" name="Category" value="non-organic" onChange={(e) => { setType(e.target.value) }} />
                </div>
                <div className="input-group">
                    <input type="text" placeholder='Enter the quantity ...' className="form-control" onChange={(e) => { setQuantity(e.target.value); }} />
                </div>
                <div className="input-group1">
                    <textarea name="Description" id="" cols="30" rows="10" className="form-control" placeholder='Enter the product description ...' onChange={(e) => { setDescription(e.target.value); }}></textarea>
                </div>
                <div className="input-group">
                    Enter the date when product can be received ...<input type="date" onChange={(e) => { setDate(e.target.value); }} />
                </div>
                
                <div className="input-group">
                    <button className="btn btn-default btn-primary" type="submit">Upload</button>
                </div>
            </form>
            <div>
                    <button className="btn btn btn-primary" onClick={get_location}>Set Location</button>
                    <br />
                </div>
        </>
    )
}
