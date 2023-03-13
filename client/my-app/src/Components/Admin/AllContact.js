import React from 'react'
import { useEffect, useRef } from 'react'
import axios from "axios";
import { useState } from "react";
import "./All.css";
import emailjs from '@emailjs/browser';




export default function AllContact() {

    const form=useRef();
    const [showForm, setShowForm]=useState(false);
    const[message, setMessage]=useState([]);
    const [reply, setReply]=useState();

    const sendEmail=(e)=>{
        e.preventDefault();
        console.log(e);
        emailjs.sendForm('service_e8rm178', 'template_uong9ad', form.current, 'H1nhxEIsnh11f8ZEl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    useEffect(() => {
        axios.get("http://localhost:3001/AllContact").then((response)=>{
          console.log(response);
          setMessage(response.data);
          console.log(message);
        })
      }, [])
      
    
    const toggleForm=(id)=>{
        setMessage(message.map((item)=>{
            if(item.message_id==id)
            {
                return { ...item, showForm: !item.showForm};
            }
            else{
                return item;
            }
        }));
    }

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
                    <div>
                            <button className="btn btn-default btn-primary" onClick={()=>{toggleForm(item.message_id)}}>
                                Reply
                            </button>
                            {
                                item.showForm && (
                        //             <form onSubmit={()=>{ SendEmail()}}>
                        //                 <textarea name="" id="" cols="30" rows="10"
                        //                 placeholder='Enter the text' onChange={(e)=>{setReply(e.target.value);}}></textarea>
                        // <button className="btn btn-default btn-primary" onClick={()=>{ SendEmail(item.email)}}>Send</button>
                        //             </form>
                        <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                    <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
                                    
                                )
                            }

                    </div>
                </div>
            ))
        }
        </div></>
  )
}
