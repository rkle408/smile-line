import React from "react";
import HIPAAForm from "../assets/HIPAA_Consent_Form.png";
import ConsentForm from "../assets/Consent_Form.png";
import Button from 'react-bootstrap/Button';
import "./style.css";

const HIPAA = () => {

    const openFile = () => {
        window.open("https://docs.google.com/document/d/1bHAw7sAaak70oSj7hMnX4vJ8vwJ34MuAc-zigLyF9Pc/edit?usp=sharing")
      }

  return (
    <div className="hipaa">
      <h1 className="title">HIPAA and Procedure Consent Forms</h1>
      <p>Your dentist's office will likely have their own forms for you to sign. Make sure you read theirs very thoroughly before signing!</p>
      <p>In order to help you prepare and save time, here are some examples of what those forms may look like. Read through, and make notes if you have questions for your dentist!</p><br/>
        <img src={HIPAAForm} alt="Screenshot of HIPAA form" style={{border: "2px solid black", borderRadius: "10px"}}></img>
        <img src={ConsentForm} alt="Screenshot of Consent" style={{border: "2px solid black", borderRadius: "10px"}}></img><br/><br/>
        <Button className='submit' style={{backgroundColor: '#6247aa'}} onClick={openFile} target="_blank">View HIPAA and Procedure Consent Forms</Button><br/>
    </div>
  )
}


export default HIPAA;