import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [contact, setContact] = useState(null);
  const handleChange=(event) => {
	  const {name,value}=event.target;
	  setContact(state=>{
		  return {
			  ...state,
			  [name]:value
		  }
	  });
	  
  }
  const handleSubmit=(event) => {
	  event.preventDefault();
	  console.log(contact);
  }
  return (
    <div className="contact" id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="contact-header">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="contact-header-quote">
              <h4>"XXXXX"</h4>
              <h4>-XXX</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-instructions">
              <h2>Reaching out to me</h2>
              <p>
                Don't be afraid to contact me! I'm happy to answer any
                questions, provide more information, or just have a nice
                conversation! Fill out the form below to being reaching out to
                me. If you prefer another email client other than your default,
                which will appear after clicking the button and have all of the
                information you just entered, you can email me at XXXXX.
              </p>
              <br />
              <br />
              <br />
            </div>
            <h2>Contact Information</h2>
            <p>XXXX</p>
            <p>XXXX</p>
            <p>(XXXX)-445-7747</p>
            <p>XXXXXX@gmail.com</p>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="contact-form-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <div className="firstname">
                      <h4>Full Name *</h4>
                      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="lastname">
                      <h4>Full Name *</h4>
                      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="email">
                      <h4>Email *</h4>
                      <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="message">
                      <h4>Message *</h4>
                      <textarea placeholder="Message" name="message" onChange={handleChange}></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                    <div className="submit-contact">
                      <button className="btn btn-default btn-border">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
