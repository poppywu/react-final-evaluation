import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  
  const onSubmit=(data) => {
	  console.log(data);
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

              <ContactForm onSubmit={onSubmit}/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
