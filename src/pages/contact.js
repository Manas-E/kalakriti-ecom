import React, { useRef, useState } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import axios from 'axios';

function  Contact() {

  const fname=useRef("a");
  const lname=useRef("a");
  const [name,setname] = useState("a");
  const email = useRef("a");
  const msg = useRef("a");
  const sub=useRef("a");


  const handleSubmit = async ()=>{  

  
   setname(fname?.current.value + lname?.current.value)
   
  const req= await axios.post(`http://localhost:3000/api/server?name=${name}&email=${email.current.value}&sub=${sub.current.value}&message=${msg.current.value}`).then((response)=> {
console.log(response);
  
  if (response.status === 200) {
        alert("Message Sent.");
        console.log("Hello");
      } else  {
        alert("Message failed to send.")
      }
    })


  }

    return (
        <div className="grid grid-flow-row-dense bg-amazon_blue items-center h-full">

            {/* header */}
            <div className="flex flex-col text-white font-extrabold text-3xl mt-10 items-center p-5">
                <h1> Thanks! for Showing Interest</h1>
                <h2>Let's have a Chat</h2>
            </div>
           
            {/* form main */}
<div className="flex flex-row items-center ">        
<div class="container ml-20  rounded-md  w-1/3 border border-purple-500 bg-white">
  <div class="p-10 space-y-5 shadow-xl">
    <h4 class="text-center text-3xl">DM Me</h4>

 
      <div class="grid grid-cols-2 gap-5 ">
        <input
          ref={fname}
          type="text"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="First Name"
        />
        <input
          ref={lname}
          type="text"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="Last Name"
        />
        <input
        ref={email}
          type="email"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Email"
        />
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Subject" 
          ref={sub}

        />
        <textarea
          ref={msg}
          cols="10"
          rows="5"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Write your message..."
        ></textarea>
      </div>
      <input
        type="submit"
        onClick={()=>{handleSubmit()}}
        value="Send Message"
        class="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
      />
    
  </div>


 
</div>

<div className="flex flex-col bg-amazon_blue items-center m-10 p-5">
                <h1 className="flex flex-col text-white font-extrabold text-3xl mt-10">You can Find me here</h1>

                <div className="text-3xl text-white m-10 p-5 space-x-5">
                    <GitHubIcon onClick={()=>{window.open("https://github.com/Manas-E")}} fontSize="large" className="hover:-translate-y-1"/>
                    <TwitterIcon  onClick={()=>{window.open("https://twitter.com/ManasReacter")}} fontSize="large"  className="hover:-translate-y-1" /> 
                    <MailIcon  onClick={()=>{window.open("mailto: manazharma@gmail.com")}} fontSize="large"   className="hover:-translate-y-1"/>
                </div>
</div>
</div>             
            {/* footer */}

          

        </div>
    )
}

export default  Contact
