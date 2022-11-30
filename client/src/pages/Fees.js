import React from 'react';

const Fees = () => {

    const downloadFile = () => {
        window.location.href = "https://www.cms.gov/files/document/good-faith-estimate-example.pdf"
      }

  return (
    <div>
        <button className="resumeBtn" onClick={downloadFile} target="_blank">View Sample Good Faith Estimate</button>
    </div>
  )
}

export default Fees; 

// https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance