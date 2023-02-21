import React, {useState} from 'react';
import axios from "axios";

export default function ProductInsert() {
    const[text, setText]=useState("");
    const[file,setFile]=useState(null);
    const[cost,setCost]=useState("");
    const[quantity,setQuantity]=useState("");
    const[category,setCategory]=useState("");
    const[type,setType]=useState("");
    const[description,setDescription]=useState("");
    const[date, setDate]=useState("");
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        const formdata=new FormData();

        formdata.append("text",text);
        console.log(text);
        formdata.append("file",file);
        console.log(file);
        formdata.append("date",date);
        formdata.append("type",type);
        formdata.append("description",description);
        formdata.append("quantity",quantity);
        formdata.append("category",category);
        console.log(formdata);

        axios.post("http://localhost:3001/insertProduct",formdata).then((response)=>{
            console.log(response.data)
            console.log(response);
            console.log(formdata);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  
    return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Enter the Product details</h2>
            <div className="input-group">

            <input type="text" value={text}  placeholder="Enterr the product name" className="form-control" onChange={(event)=>setText(event.target.value)} />
            </div>
            <div className="input-group">


            <input type="file" placeholder="Select product picture" className="form-control"  onChange={(event)=>setFile(event.target.files[0])}  />
            </div>
            <div className="input-group">


            <input type="number" placeholder="enter the cost" value={cost} className="form-control" onChange={(event)=>setCost(event.target.value)}/>
            </div>
            <div className="input-group">
                <select name="" id="" className='form-control' onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="Vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="Grains">Grains</option>
                    <option value="Dairy">Dairy Products</option>
                </select>
            </div>
            <div className="input-group">
              organic  <input type="radio" name="Category" value="organic" onChange={(e)=>{setType(e.target.value);}}/>
              Non-organic  <input type="radio" name="Category" value="non-organic" onChange={(e)=>{setType(e.target.value)}} />
            </div>
            <div className="input-group">
                Enter the quantity<input type="text" className="form-control" onChange={(e)=>{setQuantity(e.target.value);}}/>
            </div>
            <div className="input-group">


            <textarea name="Description" id="" cols="30" rows="10" className="form-control" placeholder='Enter the product description' onChange={(e)=>{setDescription(e.target.value);}}></textarea>
            </div>
            <div className="input-group">
                <input type="date" placeholder='Enter the date when product can be received' onChange={(e)=>{setDate(e.target.value);}} />
            </div>
            <div className="input-group">


            <button className="btn btn-default btn-primary" type="submit">Upload</button>
            </div>
        </form>
    </>
  )
}
