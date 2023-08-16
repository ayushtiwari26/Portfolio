// import React, { useState } from "react";
// import "./ContactMe.css";

// const ContactMe = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     Number: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     Number: "",
//     email: "",
//   });

//   const validateEmail = (email) => {
//     // Basic email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateNumber = (number) => {
//     // Basic mobile number validation (digits only)
//     const numberRegex = /^\d+$/;
//     return numberRegex.test(number);
//   };

//   // const changeHandler = (event) => {
//   //   const { name, value } = event.target;
//   const changeHandler =(event) =>{
//       setFormState({...formState , [event.target.name]: event.target.value});
//     }
  
//     // Update the formState
//     setFormState((prevFormState) => ({
//       ...prevFormState,
//       [name]: value,
//     }));

//     // Clear previous error for the field
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     // Validate fields
//     const newErrors = {};

//     if (!formState.name) {
//       newErrors.name = "Name is required";
//     }

//     if (!formState.Number) {
//       newErrors.Number = "Mobile Number is required";
//     } else if (!validateNumber(formState.Number)) {
//       newErrors.Number = "Enter a valid mobile number";
//     }

//     if (!formState.email) {
//       newErrors.email = "Email is required";
//     } else if (!validateEmail(formState.email)) {
//       newErrors.email = "Enter a valid email address";
//     }

//     // If there are errors, setErrors and return
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // If no errors, proceed with sending the email
    
//     const submitHandler =( event) =>{
//       event.preventDefault();
//       const config ={
//         Host : "smtp.elasticemail.com",
//         Username : "kayushtiwari26@gmail.com",
//         Password : "D719C2A930B772AE1D695CBED5ED988AC2EB",
//         Port : 2525,
//         To : "kayushtiwari26@gmail.com",
//         From : formState.email,
//         Mobile: formState.Number,
//         Subject : formState.subject,
//         Body : `${formState.message} conneted to you over email.`,
//       }
//       if(window.Email){
//         window.Email.send(config).then(()=> alert("Email Sent Successfully"));
//       }
//     }
    

//   return (
//     <>
//       <div className="contactBack" id="contact">
//         <div className="centreDiv">
//           <div id="contact">Contact Me</div>
//           <form onSubmit={submitHandler}>
//             <div className="inputs">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formState.name}
//                   placeholder="Full Name"
//                   onChange={changeHandler}
//                 />
//                 {errors.name && <p className="error">{errors.name}</p>}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="Number"
//                   value={formState.Number}
//                   placeholder="Mobile Number"
//                   onChange={changeHandler}
//                 />
//                 {errors.Number && <p className="error">{errors.Number}</p>}
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formState.email}
//                   placeholder="Email Address"
//                   onChange={changeHandler}
//                 />
//                 {errors.email && <p className="error">{errors.email}</p>}
//               </div>
//             </div>
//             <div className="Subject">
//               <input
//                 type="text"
//                 name="subject"
//                 value={formState.subject}
//                 placeholder="Subject"
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="message">
//               <input
//                 type="text"
//                 name="message"
//                 value={formState.message}
//                 placeholder="Write Message"
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="butt">
//               <input type="submit" value="Send Message" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactMe;


import React, { useState } from "react";
import "./ContactMe.css"

const ContactMe = () => {

  const [formState, setFormState] = useState({});

  const changeHandler =(event) =>{
    setFormState({...formState , [event.target.name]: event.target.value});
  }

  const submitHandler =(event) =>{
    event.preventDefault();
    const config ={
      SecureToken :"b56c3388-a748-4669-85db-8703b93fc6b2",
      To : "kayushtiwari26@gmail.com",
      From : formState.email,
      Mobile: formState.Number,
      Subject : formState.subject,
      Body : `${formState.message} conneted to you over email.`,
    }
    if(window.Email){
      window.Email.send(config).then(()=> alert("Email Sent Successfully"));
    }
  }
  
  return (
    <>
      <div className="contactBack" id="contact">
        <div className="centreDiv">
            <div id='contact'>Contact Me</div>
            <form onSubmit={submitHandler}>
            <div className="inputs">
                <div><input type="text"  name="name" value={formState.name || ""} placeholder="Full Name" onChange={changeHandler}/></div>
                <div><input type="text"  name="Number" value={formState.Number || ""}  placeholder="Mobile Number"onChange={changeHandler}/></div>
                <div><input type="email"  name="email" value={formState.email || ""}  placeholder="Email Address" onChange={changeHandler}/></div>

            </div>
            <div className="Subject">
                <input type="text" name="subject" value={formState.subject || ""}  placeholder="Subject" onChange={changeHandler}/>
            </div>
            <div className="message">
                <input type="text" name="message" value={formState.message || ""}  placeholder="Write Message" onChange={changeHandler}/>
            </div>
            <div className="butt"><input type="submit" value="Send Message" /></div>
            </form>    
        </div>
      </div>
    </>
  );
};

export default ContactMe; 