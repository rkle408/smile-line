import React from 'react';

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
  return (
    <div>
        <form>
            <h3>Medical Information</h3>
            <div>
                <label htmlFor="meds">Are you or have you recently taken any prescription or over the counter medicine(s)? If so, please list all, including vitamins, natural or herbal preparations and/or dietary supplements: </label>
                <textarea id="meds" type="text" />
            </div>
            <div>
                <div>Are you allergic to or have you had a reaction to:</div>
                <label htmlFor='LA'>
                <input id="LA" type='checkbox' />
                Local Anesthetics
                </label>
                <label htmlFor='aspirin'>
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
            </div>
            <div>
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
            </div>
        </form>
    </div>
  )
}

export default Health;