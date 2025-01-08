import React, { useRef } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const formRef = useRef(null); // Reference to the form element

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.append("access_key", "f4826ed1-485e-4ae1-9480-3e7fcbf47a7f");
    
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const data = await res.json();

      if (data.success) {
        console.log("Success", data);
        formRef.current.reset(); // Clear the form
      } else {
        console.error("Form submission failed", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit} ref={formRef}>
        <h2>CONTACT FORM</h2>
        <div className="input-box">
          <label>FULL NAME</label>
          <input type="text" className="field" placeholder="Enter your name" name="name" required />
        </div>
        <div className="input-box">
          <label>EMAIL ADDRESS</label>
          <input type="email" className="field" placeholder="Enter your email" name="email" required />
        </div>
        <div className="input-box">
          <label>YOUR MESSAGE</label>
          <textarea name="message" className="field mess" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
