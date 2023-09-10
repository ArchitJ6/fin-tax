import React, {useRef} from "react";
import "./Contact.css";
// import Youtube from "../../assets/youtube.png";
// import Instagram from "../../assets/instagram.png";
// import Linkedin from "../../assets/linkedin.png";
// import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ne4am79",
        "template_bzhbx2m",
        form.current,
        "0M2MfBSpU_ppCI0dk4pvA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Us</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any query.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name"/>
          <input type="email" className="email" placeholder="Your Email" name="your_email"/>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
