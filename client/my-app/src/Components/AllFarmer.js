import axios from "axios";
import react from "react";

export default function AllFarmer()
{
    const display=()=>{

        axios.get("http://localhost:3001/AllFarmer").then((response)=>{
            console.log(response.data);
        })
    }
    return(
        <>
            <button onClick={display}>Print</button>
        </>
    )
}
