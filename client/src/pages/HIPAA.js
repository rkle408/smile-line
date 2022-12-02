import React from "react";
import HIPAAForm from "../assets/HIPAA_Consent_Form.png";
import ConsentForm from "../assets/Consent_Form.png";

const HIPAA = () => {

    const downloadFile = () => {
        window.location.href = "https://docs.google.com/document/d/1bHAw7sAaak70oSj7hMnX4vJ8vwJ34MuAc-zigLyF9Pc/edit?usp=sharing"
      }

  return (
    <div>
        <img src={HIPAAForm} alt="Screenshot of HIPAA form"></img><br/><br/>
        <img src={ConsentForm} alt="Screenshot of Consent"></img><br/><br/>
        <button onClick={downloadFile} target="_blank">View HIPAA and Consent Forms</button><br/>
    </div>
  )
}


export default HIPAA;