import React, { useState } from "react";
import './Contact.css';

function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(contact);
  };
  return (
    <form onSubmit={handleSubmit} title="formSubmit">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <div className="firstname">
            <h4>Full Name *</h4>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={contact.firstName}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="lastname">
            <h4>Full Name *</h4>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={contact.lastName}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="email">
            <h4>Email *</h4>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={contact.email}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="message">
            <h4>Message *</h4>
            <textarea
              placeholder="Message"
              name="message"
              onChange={handleChange}
              value={contact.message}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
          <div className="submit-contact">
            <button
              type="submit"
              className="btn btn-default btn-border"
              title="submitBtn"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
