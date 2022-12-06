import React from 'react';
import Button from 'react-bootstrap/Button';
import "./style.css";

const Fees = () => {

    const downloadFile = () => {
        window.location.href = "https://www.cms.gov/files/document/good-faith-estimate-example.pdf"
      }

  return (
    <div>
      <h1 className="title">What should you know about fees?</h1><br/>
      
      <p>Dental offices will have their own fee schedules. Please check with your office for their pricing.</p>
      
      <p>Pricing does change with insurance as well!</p>
      
      <p>However, it is difficult to give patients an estimate BEFORE their exam, so what usually happens is:</p>
      
      <ol>
        <li>Make an appointment with your dentist</li>
        <li>Let the dentist do the exam, answer any questions you may have</li>
        <li>Wait for a complete treatment plan -- this will come with the price estimate</li>
      </ol>

      <p>Please keep in mind that your treatment plan and fees could change during the course of your treatment, as your dentist may uncover more cavities after a cleaning or while doing other work! You may start to notice something as you become more aware of what's going on in your mouth as well!</p>

      <p>If you are not covered by insurance or do not want to submit to your insurer, we have a <a className="link" href='https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance'>resource for you regarding fees</a>! No one likes a surprise bill... </p>
      <Button variant='primary' className="resumeBtn" onClick={downloadFile} target="_blank">View Sample Good Faith Estimate</Button>
    </div>
  )
}

export default Fees; 