import React, { useState } from 'react';
import axios from 'axios';

// medical info
// medication
// drug allergies
// total joint replacement and when
// taking bisphosphonates?
// heart related issues (pros. valves, endocarditis), hbp, heart attack
// aids/HIV
// Asthma
// Stroke
// GERD
// Seizures, epilepsy
// Organ transplants
// Smoke or use drugs
// diabetes

// Dental info
// Dry mouth, tooth sensitivity
// clenching, grind, popping, clicking?
// serious injury to head?

const Health = () => {
    function toggle(value) {
        return !value;
    }
    // form states
    const [medication, setMeds] = useState('');
    const [localAnesthetic, setLa] = useState(false);

    // handleform event
    const handleForm = (e) => {
        e.preventDefault();
        const data ={
            Medication: medication,
            LocalAnesthetic: localAnesthetic,
        }
        console.log(data);
        axios.post('https://sheet.best/api/sheets/fe48f11d-b074-4d60-a64f-4cc9a28a8cfe', data)
        .then((response) => { 
            console.log(response);
            setMeds('');
        })
    }

  return (
    <div>
        <form autoComplete='off' className='HealthForm' onSubmit={handleForm}>
            <h3>Health History Form</h3>
            <div>
                <label htmlFor='last'>
                    Last name: <input id='last' type='text' />
                </label>
                <label htmlFor='first'>
                    First name: <input id='first' type='text' />
                </label>
                <label htmlFor='middle'>
                    Middle initial: <input id='middle' type='text' />
                </label>   
            </div>
            <div>

            </div>
            <h3>Medical Information</h3>
            <div>
                <label htmlFor="meds">Are you or have you recently taken any prescription or over the counter medicine(s)? If so, please list all, including vitamins, natural or herbal preparations and/or dietary supplements: </label>
                <textarea id="meds" type="text" onChange={(e) => setMeds(e.target.value)} value={medication}/>
            </div>
            <div>
                <div>Are you allergic to or have you had a reaction to:</div>
                <label htmlFor='LA'>
                <input id="LA" type='checkbox' checked={localAnesthetic} onChange={(e) => setLa(toggle)}/>
                Local Anesthetics
                </label>
                {/* <label htmlFor='aspirin'>
                <input id="aspirin" type='checkbox' />
                Aspirin
                </label>
                <label htmlFor='allergies'>
                <input id="allergies" type='checkbox' />
                Penicillin or other antibiotics
                </label>
                <label htmlFor='allergies'>
                <input id="allergies" type='checkbox' />
                Barbiturates, sedatives, or sleeping pills
                </label>
                <label htmlFor='allergies'>
                <input id="allergies" type='checkbox' />
                Sulfa Drugs
                </label>
                <label htmlFor='allergies'>
                <input id="allergies" type='checkbox' />
                Codeine or other narcotics

                </label>
                <label htmlFor='allergies'>
                <input id="allergies" type='checkbox' />
                Latex
                </label>
                </label> */}
            </div>
            {/* <div>
                <div>Have you had an orthopedic total joint (hip, knee, elbow, finger) replacement?</div>
                <label> Date: <input id="tjr" type="text"/> </label>
                <label> If yes, have you had any complications? <input id="tjr" type="text"/> </label>
            </div>
            <div>
                <div>
                Are you taking or scheduled to begin taking an antiresorptive agent (like Fosamax®, Actonel®, Atelvia, Boniva®, Reclast, Prolia) for osteoporosis or Paget's disease?...
                </div>
                <label htmlFor='bis'>
                <input id="bis" type='checkbox' />
                Yes
                </label>
                <label htmlFor='bis'>
                <input id="bis" type='checkbox' />
                No
                </label>
            </div>
            <div>
                <div>
                    Please select the box to indicate if you HAVE had any of the following diseases or problems.
                </div>
                <label htmlFor='CVD'>
                <input id="CVD" type='checkbox' />
                    Cardiovascular Disease
                </label>
                <label htmlFor='angina'>
                <input id="angina" type='checkbox' />
                    Angina
                </label>
                <label htmlFor='CHF'>
                <input id="CHF" type='checkbox' />
                    Congestive Heart Failure
                </label>
                <label htmlFor='DHV'>
                <input id="DHV" type='checkbox' />
                    Damaged Heart Valves
                </label>
                <label htmlFor='HA'>
                <input id="HA" type='checkbox' />
                    Heart Attack
                </label>
                <label htmlFor='HBP'>
                <input id="HBP" type='checkbox' />
                    High Blood Pressure
                </label>
                <label htmlFor='OCHD'>
                <input id="OCHD" type='checkbox' />
                    Other Congenital Heart Defects
                </label>
                <label htmlFor='aids'>
                <input id="aids" type='checkbox' />
                    AIDS or HIV infection
                </label>
                <label htmlFor='asthma'>
                <input id="asthma" type='checkbox' />
                    Asthma
                </label>
                <label htmlFor='stroke'>
                <input id="stroke" type='checkbox' />
                    Stroke
                </label>
                <label htmlFor='gerd'>
                <input id="gerd" type='checkbox' />
                    GERD
                </label>
                <label htmlFor='diabetes'>
                <input id="diabetes" type='checkbox' />
                    Diabetes
                </label>
                <label htmlFor='seizures'>
                <input id="seizures" type='checkbox' />
                    Seizures
                </label>
                <label htmlFor='epilepsy'>
                <input id="epilepsy" type='checkbox' />
                    Epilepsy
                </label>
                <label htmlFor='OT'>
                <input id="OT" type='checkbox' />
                    Organ Transplants Specify: 
                <input id= "OT" type="text" />
                </label>
                <label htmlFor='smoke'>
                <input id="smoke" type='checkbox' />
                    Usage of tobacco (smoking, snuff, chew, bidis)?
                </label>
                <label htmlFor='CD'>
                <input id="cd" type='checkbox' />
                    Usage of controlled substances (drugs)?
                </label>
                <label htmlFor='alcohol'>
                <input id="alcohol" type='checkbox' />
                    Drink alcoholic beverages?
                </label>
            </div>

            <h3>Dental Information</h3>
            <div>Please select the box to indicate if you HAVE had any of the following problems.</div>
            <div>
                <label htmlFor='sensitive'>
                <input id="sensitive" type='checkbox' />
                    Your teeth are sensitive to cold, hot, sweets, or pressure
            </label>
            <label htmlFor='dry'>
                <input id="dry" type='checkbox' />
                    Your mouth is dry
            </label>
            <label htmlFor='TMJ'>
                <input id="TMJ" type='checkbox' />
                    You have clicking, popping, or discomfort in the jaw
            </label>
            <label htmlFor='grind'>
                <input id="grind" type='checkbox' />
                    You brux or grind your teeth
            </label>
            <label htmlFor='injury'>
                <input id="injury" type='checkbox' />
                    You had a serious injury to your head or mouth
            </label>
            </div>
            <div>
            <label htmlFor='exam'>
                Date of your last dental exam:
                <input id="exam" type='text' />
                What was done at that time?
                <input type='text' />
            </label>
            </div> */}
            <div>
                <button type='submit' className='submit-button'>Submit</button>
            </div> 
        </form>
    </div>
  )
}

export default Health;