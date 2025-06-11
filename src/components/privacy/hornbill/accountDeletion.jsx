import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

import "../privacy-policy.css";
import "react-toastify/dist/ReactToastify.css";

const firebaseConfig = {
  apiKey: "AIzaSyCuKArLz6XXWoe0aUPqKOOwgVcjzITic3c",
  authDomain: "blood-connect-app.firebaseapp.com",
  projectId: "blood-connect-app",
  storageBucket: "blood-connect-app.appspot.com",
  messagingSenderId: "615432910501",
  appId: "1:615432910501:web:2389fe43b76fa6fa26ff4c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const HornbillAccountDeletion = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: value.length > 1 ? null : "Must not be empty"
    }));
  };

  const handleEmail = (event) => {
    const value = event.target.value.toLowerCase();
    const re = /\S+@\S+\.\S+/;
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: re.test(value) ? null : "Must be a valid email ID"
    }));
  };

  const sendContact = async () => {
    const today = moment();
    let nameWarning = errors["name"];
    let emailWarning = errors["email"];

    if (name && email && !nameWarning && !emailWarning) {
      toast.info("Sending ..", {
        position: "bottom-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      try {
        if (count === 0) {
          await addDoc(collection(db, "delete_requests"), {
            created_at: today.format('Do MMMM, YYYY'),
            name: name,
            email: email,
            reason: message,
            app: "Hornbill",
            isDeleted: false
          });
          setCount(1);
          toast.success("Deletion request submitted", {
            position: "bottom-center",
            autoClose: 2700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setTimeout(() => {
            window.location.reload();
          }, 800);
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      toast.warn("Form Data Invalid", {
        position: "bottom-center",
        autoClose: 2700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      <div className='home_div_three'>
        <p className='home_div_three_header'>Account Deletion for <span style={{color:"#0094d0"}}>Hornbill Festival</span></p>
        <div className="termscontainer">
          <div>
            <p className="policy-Txt">
              The Hornbill Festival app, developed, maintained and owned only by NITI Technologies, understands your right to data privacy concerns. Hence, we allow users to request data deletion. Kindly submit the form below to delete your account within 24-48 hours.
            </p>

            <Row>
              <Col md={6} xs={12} sm={12}>
                <p className="accountDeleteTxtFirst">Full Name</p>
                <input
                  className="input_ messageInputAccountDelete"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={handleName}
                />
                {
                  errors["name"] ?
                  <p className="loginErrorTxt">{errors["name"]}</p>
                  :
                  <div className="inputMargins"></div>
                }
                <p className="accountDeleteTxt">Email ID</p>
                <input
                  className="input_ messageInputAccountDelete"
                  placeholder="Enter your registered email"
                  onChange={handleEmail}
                  value={email}
                  type="text"
                />
                {
                  errors["email"] ?
                  <p className="loginErrorTxt">{errors["email"]}</p>
                  :
                  <div className="inputMargins"></div>
                }
                <p className="accountDeleteTxt">Reason for deletion</p>
                <textarea
                  className="messageInput messageInputAccountDelete"
                  placeholder="(Optional)"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <center>
                  <button className="requestQuote" onClick={sendContact}>
                    Submit
                  </button>
                </center>
              </Col>
              <Col md={6} xs={12} sm={12}>
                <p className="privacy_policy_Title">If you have any further questions or require assistance, please don’t hesitate to contact our customer support team at admin@nititechnologies.in. We are here to assist you.</p>
                <p className="privacy_policy_address">NITI Technologies</p>
                <p className="privacy_policy_address">Opp. Ram Janaki School, Marwari Patti</p>
                <p className="privacy_policy_address">Dimapur - 797112, Nagaland, India</p>
                <p className="privacy_policy_address">Phone: 7005291593</p>
                <p className="privacy_policy_address">Email: admin@nititechnologies.in</p>
              </Col>
            </Row>
            
          </div>
        </div>
      </div>
      
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default HornbillAccountDeletion;
