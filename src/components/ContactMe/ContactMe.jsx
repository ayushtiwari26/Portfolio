import React, { useState, useRef } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const [formState, setFormState] = useState({});
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_vr8dt2o",
        "template_n55tgiu",
        form.current,
        "ijrOs5xIDcwXdZiYf"
      )
      .then(
        (result) => {
          result.text = "Email Sent Successfully";
          alert(result.text);

          // show the user a success message
        },
        (error) => {
          alert(error.text);
          // show the user an error
        }
      );
  };
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "b56c3388-a748-4669-85db-8703b93fc6b2",
      To: "kayushtiwari26@gmail.com",
      From: formState.email,
      Mobile: formState.Number,
      Subject: formState.subject,
      Body: `${formState.message} conneted to you over email.`,
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert("Email Sent Successfully"));
    }
  };

  return (
    <>
      <div className="contactBack" id="contact">
        <div className="centreDiv">
          <div id="contact">Contact Me</div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputs">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formState.name || ""}
                  placeholder="Full Name"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Number"
                  value={formState.Number || ""}
                  placeholder="Mobile Number"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formState.email || ""}
                  placeholder="Email Address"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="Subject">
              <input
                type="text"
                name="subject"
                value={formState.subject || ""}
                placeholder="Subject"
                onChange={changeHandler}
              />
            </div>
            <div className="message">
              <input
                type="text"
                name="message"
                value={formState.message || ""}
                placeholder="Write Message"
                onChange={changeHandler}
              />
            </div>
            <div className="butt">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
