import React from 'react';
import Button from 'react-bootstrap/Button';
import "./style.css";

const Fees = () => {

    const downloadFile = () => {
        window.location.href = "https://www.cms.gov/files/document/good-faith-estimate-example.pdf"
      }

  return (
    <div>
      <h1 className="title">What should you know about fees?</h1>
        <Button variant='primary' className="resumeBtn" onClick={downloadFile} target="_blank">View Sample Good Faith Estimate</Button>
    </div>
  )
}

export default Fees; 

// https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance