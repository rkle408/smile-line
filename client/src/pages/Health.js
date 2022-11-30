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
        </form>
    </div>
  )
}

export default Health;