import React from "react";

const HIPAA = () => {

    const downloadFile = () => {
        window.location.href = "https://docs.google.com/document/d/1bHAw7sAaak70oSj7hMnX4vJ8vwJ34MuAc-zigLyF9Pc/edit?usp=sharing"
      }

  return (
    <div>
        <button onClick={downloadFile} target="_blank">View HIPAA and Consent Forms</button>
    </div>
  )
}


export default HIPAA;