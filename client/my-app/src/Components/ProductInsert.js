import React, {useState} from 'react';
import axios from "axios";

export default function ProductInsert() {
    const[text, setText]=useState("");
    const[file,setFile]=useState(null);
    
    
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        const formdata=new FormData();

        formdata.append("text",text);
        console.log(text);
        formdata.append("file",file);
        console.log(file);

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
            <input type="text" value={text} onChange={(event)=>setText(event.target.value)} />
            <input type="file" onChange={(event)=>setFile(event.target.files[0])}  />
            <button type="submit">Upload</button>
        </form>
    </>
  )
}
