import axios, { Axios } from "axios";
import React, { useState } from "react";
// import { useHistory } from "react-router";


function Contact() {

  const [formdata, setformdata] = useState({
    name: '', email: '', message: '', phone: ''})


  //Sending Mail with Web3Forms!
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    // Web3Form Start
    event.preventDefault(); //This is stops the page reloding
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "99ebf770-160d-4177-92f9-f4c0be85c00b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }


      // Fetching Contact Data with Database Start
      // console.log(formdata)

      axios.post('https://portfolio-api-wnrc.onrender.com/api/contact/',formdata)
      //  .then((response)=>{alert('Message Send Successfully!');
       setformdata({name: '', email: '', message: '', phone: ''}); //For Reset the Form
       
          // .catch((error)=>{
          //   alert("Error submitting form. Please Try Again!");
          // })
        // Fetching Contact Data with Database End

  };
  
  
  return (
    <>
      <div className="contact">
      <span id="result">{result}</span>
        <div className="contact-co">
          <h1>Contact🚀</h1>
          <form action="https://api.web3forms.com/submit" method="POST" onSubmit={onSubmit} >
            <label> Name </label>
            <br />
            <input
              className="mt-1"
              type="text"
              name="name"
              value={formdata.name}
              placeholder="Enter your name"
              required
              onChange={(e) => {
                setformdata({...formdata,name:e.target.value})
              }}
            />
            <br />
            <label>Email</label> <br />
            <input
              className="mt-1"
              type="email"
              name="email"
              value={formdata.email}
              placeholder="Enter your email"
              required
              onChange={(e) => {
                setformdata({...formdata,email:e.target.value})
              }}
            />
            <br />
            <label>Phone No.</label> <br />
            <input
              className="mt-1"
              type="number"
              name="number"
              value={formdata.phone}
              placeholder="Enter your phone"
              onChange={(e) => {
                setformdata({...formdata,phone:e.target.value})
              }}
            />
            <br />
            <label className="">Write Your Message here!</label>
            <br />
            <textarea
              className=" mt-1"
              rows="6"
              cols="50"
              name="msg"
              value={formdata.message}
              id=""
              placeholder="Write your message here!"
              required
              onChange={(e) => {
                setformdata({...formdata,message:e.target.value})
              }}
            ></textarea>
            <br />
            <center>
              <button type="submit">Send</button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}


export default Contact;
