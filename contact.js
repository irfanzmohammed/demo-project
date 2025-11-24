import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form  not submitted:", formData);
    alert("Thank you for just contacting us!");
  };

   console.log("hi")

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={formData.name}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={formData.email}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          required
          onChange={handleChange}
          value={formData.message}
        />

        <button type="submit" style={{ marginTop: "12px" }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
