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
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [middleinitial, setMiddleinitial] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phonenumber, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [medications, setMeds] = useState('');
    const [localAnesthetic, setLa] = useState(false);
    const [aspirin, setAspirin] = useState(false);
    const [penicillin, setPenicillin] = useState(false);
    const [barb, setBarb] = useState(false);
    const [sulfa, setSulfa]= useState(false);
    const [codeine, setCodeine] = useState(false);
    const [latex, setLatex] = useState(false);
    const [orthojointreplacement, setOrthoJointReplacement] = useState('');
    const [antiresorptive, setAntiresorptive] = useState(false);
    const [cvd, setCvd] = useState(false);
    const [chf, setChf] = useState(false);
    const [dhv, setDhv] = useState(false);
    const [ha, setHa] = useState(false);
    const [hbp, setHbp] = useState(false);
    const [otherchd, setOtherchd] = useState(false);
    const [aidshiv, setAidshiv] = useState(false);
    const [asthma, setAsthma] = useState(false);
    const [stroke, setStroke] = useState(false);
    const [gerd, setGerd] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [seizures, setSeizures] = useState(false);
    const [epilepsy, setEpilepsy] = useState(false);
    const [organtrans, setOrgantrans] = useState(false);
    const [organtranselab, setOrgantranselab] = useState('');
    const [tobacco, setTobacco] = useState(false);
    const [controlsub, setControlsub] = useState(false);
    const [alcohol, setAlcohol] = useState(false);
    const [sensitive, setSensitive] = useState(false);
    const [dry, setDry] = useState(false);
    const [click, setClick] = useState(false);
    const [brux, setBrux] = useState(false);
    const [serious, setSerious] = useState(false);
    const [dentalexam, setDentalexam] = useState('');
    const [examwork, setExamwork] = useState('');


    // handleform event
    const handleForm = (e) => {
        e.preventDefault();
        const data ={
            LastName: lastname,
            FirstName: firstname,
            MiddleInitial: middleinitial,
            DateofBirth: birthday,
            PhoneNumber: phonenumber,
            Address: address,
            Email: email,
            Medications: medications,
            LocalAnesthetic: localAnesthetic,
            Aspirin: aspirin,
            Penicillin: penicillin,
            Barbiturates: barb,
            Sulfa: sulfa,
            Codeine: codeine,
            Latex: latex,
            OrthoJointReplacement: orthojointreplacement,
            AntiresorptiveDrugs: antiresorptive,
            CVD: cvd,
            CongestiveHeartFailure: chf,
            DamagedHeartValves: dhv,
            HeartAttack: ha,
            HighBloodPressure: hbp,
            OtherCongenitalHeartDefects: otherchd,
            AIDSandHIV: aidshiv,
            Asthma: asthma,
            Stroke: stroke,
            Gerd: gerd,
            Diabetes: diabetes,
            Seizures: seizures,
            Epilepsy: epilepsy,
            OrganTransplants: organtrans,
            OrganTransplantSpecifics: organtranselab,
            Tobacco: tobacco,
            ControlledSubstances: controlsub,
            Alcohol: alcohol,
            ToothSensitivity: sensitive,
            DryMouth: dry,
            TMJProblems: click,
            Bruxism: brux,
            SeriousInjurytoHead: serious,
            LastDentalExam: dentalexam,
            WorkDoneAtLastExam: examwork,
        }
        console.log(data);
        axios.post('https://sheet.best/api/sheets/fce5df6d-ed54-4767-aedf-292547f116ec', data)
        .then((response) => { 
            console.log(response);
            setLastname('');
            setFirstname('');
            setMiddleinitial('');
            setBirthday('');
            setPhone('');
            setAddress('');
            setEmail('');
            setMeds('');
            setLa(false);
            setAspirin(false);
            setPenicillin(false);
            setBarb(false);
            setSulfa(false);
            setCodeine(false);
            setLatex(false);
            setOrthoJointReplacement('');
            setAntiresorptive(false);
            setCvd(false);
            setChf(false);
            setDhv(false);
            setHa(false);
            setHbp(false);
            setOtherchd(false);
            setAidshiv(false);
            setAsthma(false);
            setStroke(false);
            setGerd(false);
            setDiabetes(false);
            setSeizures(false);
            setEpilepsy(false);
            setOrgantrans(false);
            setOrgantranselab('');
            setTobacco(false);
            setControlsub(false);
            setAlcohol(false);
            setSensitive(false);
            setDry(false);
            setClick(false);
            setBrux(false);
            setSerious(false);
            setDentalexam('');
            setExamwork('');
        })
    }

  return (
    <div>
        <form autoComplete='off' className='HealthForm' onSubmit={handleForm}>
            <h3>Health History Form</h3>
            <div>
                <label htmlFor='last'>
                    Last name: <input id='last' type='text' onChange={(e) => setLastname(e.target.value)} value={lastname} />
                </label>
                <label htmlFor='first'>
                    First name: <input id='first' type='text' onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                </label>
                <label htmlFor='middle'>
                    Middle initial: <input id='middle' type='text' onChange={(e) => setMiddleinitial(e.target.value)} value={middleinitial} />
                </label>
                <label htmlFor='dob'>
                    Date of Birth: <input id='dob' type='text' onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                </label> 
            </div>
            <div>
                <label htmlFor='number'>
                    Phone #: <input id='number' type='text' onChange={(e) => setPhone(e.target.value)} value={phonenumber}  />
                </label>
            </div>
            <div>
                <label htmlFor='address'>
                    Address: <input id='address' type='text' onChange={(e) => setAddress(e.target.value)} value={address}  />
                </label>
            </div>
            <div>
                <label htmlFor='email'>
                    Email: <input id='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email}  />
                </label>
            </div>
            <h3>Medical Information</h3>
            <div>
                <label htmlFor="meds">Are you or have you recently taken any prescription or over the counter medicine(s)? If so, please list all, including vitamins, natural or herbal preparations and/or dietary supplements: </label>
                <textarea id="meds" type="text" onChange={(e) => setMeds(e.target.value)} value={medications}/>
            </div>
            <div>
                <div>Are you allergic to or have you had a reaction to:</div>
                <label htmlFor='LA'>
                <input id="LA" type='checkbox' checked={localAnesthetic} onChange={(e) => setLa(toggle)} />
                Local Anesthetics
                </label>
                <label htmlFor='aspirin'>
                <input id="aspirin" type='checkbox' checked={aspirin} onChange={(e) => setAspirin(toggle)} />
                Aspirin
                </label>
                <label htmlFor='penicillin'>
                <input id="penicillin" type='checkbox' checked={penicillin} onChange={(e) => setPenicillin(toggle)}/>
                Penicillin or other antibiotics
                </label>
                <label htmlFor='barb'>
                <input id="barb" type='checkbox' checked={barb} onChange={(e) => setBarb(toggle)}/>
                Barbiturates, sedatives, or sleeping pills
                </label>
                <label htmlFor='sulfa'>
                <input id="sulfa" type='checkbox' checked={sulfa} onChange={(e) => setSulfa(toggle)}/>
                Sulfa Drugs
                </label>
                <label htmlFor='codeine'>
                <input id="codeine" type='checkbox' checked={codeine} onChange={(e) => setCodeine(toggle)}/>
                Codeine or other narcotics
                </label>
                <label htmlFor='latex'>
                <input id="latex" type='checkbox' checked={latex} onChange={(e) => setLatex(toggle)}/>
                Latex
                </label>
            </div>
            <div>
                <div>Have you had an orthopedic total joint (hip, knee, elbow, finger) replacement?</div>
                <label htmlFor='tjr'> If yes, please provide the date and any complications: <input id="tjr" type="text" onChange={(e) => setOrthoJointReplacement(e.target.value)} value={orthojointreplacement}/> </label>
            </div>
            <div>
                <label htmlFor='bis'>
                <input id="bis" type='checkbox' checked={antiresorptive} onChange={(e) => setAntiresorptive(toggle)}/>
                Check this box if you are taking or scheduled to begin taking an antiresorptive agent (like Fosamax®, Actonel®, Atelvia, Boniva®, Reclast, Prolia) for osteoporosis or Paget's disease?
                </label>
            </div>
            <div>
                <div>
                    Please select the box to indicate if you HAVE had any of the following diseases or problems.
                </div>
                <label htmlFor='CVD'>
                <input id="CVD" type='checkbox' checked={cvd} onChange={(e) => setCvd(toggle)} />
                    Cardiovascular Disease
                </label>
                <label htmlFor='CHF'>
                <input id="CHF" type='checkbox' checked={chf} onChange={(e) => setChf(toggle)} />
                    Congestive Heart Failure
                </label>
                <label htmlFor='DHV'>
                <input id="DHV" type='checkbox' checked={dhv} onChange={(e) => setDhv(toggle)}/>
                    Damaged Heart Valves
                </label>
                <label htmlFor='HA'>
                <input id="HA" type='checkbox' checked={ha} onChange={(e) => setHa(toggle)} />
                    Heart Attack
                </label>
                <label htmlFor='HBP'>
                <input id="HBP" type='checkbox' checked={hbp} onChange={(e) => setHbp(toggle)} />
                    High Blood Pressure
                </label>
                <label htmlFor='OCHD'>
                <input id="OCHD" type='checkbox' checked={otherchd} onChange={(e) => setOtherchd(toggle)} />
                    Other Congenital Heart Defects
                </label>
                <label htmlFor='aids'>
                <input id="aids" type='checkbox' checked={aidshiv} onChange={(e) => setAidshiv(toggle)} />
                    AIDS or HIV infection
                </label>
                <label htmlFor='asthma'>
                <input id="asthma" type='checkbox' checked={asthma} onChange={(e) => setAsthma(toggle)} />
                    Asthma
                </label>
                <label htmlFor='stroke'>
                <input id="stroke" type='checkbox' checked={stroke} onChange={(e) => setStroke(toggle)} />
                    Stroke
                </label>
                <label htmlFor='gerd'>
                <input id="gerd" type='checkbox' checked={gerd} onChange={(e) => setGerd(toggle)} />
                    GERD
                </label>
                <label htmlFor='diabetes'>
                <input id="diabetes" type='checkbox' checked={diabetes} onChange={(e) => setDiabetes(toggle)} />
                    Diabetes
                </label>
                <label htmlFor='seizures'>
                <input id="seizures" type='checkbox' checked={seizures} onChange={(e) => setSeizures(toggle)} />
                    Seizures
                </label>
                <label htmlFor='epilepsy'>
                <input id="epilepsy" type='checkbox' checked={epilepsy} onChange={(e) => setEpilepsy(toggle)} />
                    Epilepsy
                </label>
                <label htmlFor='OT'>
                <input id="OT" type='checkbox' checked={organtrans} onChange={(e) => setOrgantrans(toggle)} />
                    Organ Transplants Specify: 
                <input id= "OT" type="text" onChange={(e) => setOrgantranselab(e.target.value)} value={organtranselab}/>
                </label>
                <label htmlFor='smoke'>
                <input id="smoke" type='checkbox' checked={tobacco} onChange={(e) => setTobacco(toggle)} />
                    Usage of tobacco (smoking, snuff, chew, bidis)?
                </label>
                <label htmlFor='CD'>
                <input id="cd" type='checkbox' checked={controlsub} onChange={(e) => setControlsub(toggle)} />
                    Usage of controlled substances (drugs)?
                </label>
                <label htmlFor='alcohol'>
                <input id="alcohol" type='checkbox' checked={alcohol} onChange={(e) => setAlcohol(toggle)}/>
                    Drink alcoholic beverages?
                </label>
            </div>

            <h3>Dental Information</h3>
            <div>Please select the box to indicate if you HAVE had any of the following problems.</div>
            <div>
                <label htmlFor='sensitive'>
                <input id="sensitive" type='checkbox' checked={sensitive} onChange={(e) => setSensitive(toggle)}/>
                    Your teeth are sensitive to cold, hot, sweets, or pressure
            </label>
            <label htmlFor='dry'>
                <input id="dry" type='checkbox' checked={dry} onChange={(e) => setDry(toggle)} />
                    Your mouth is dry
            </label>
            <label htmlFor='TMJ'>
                <input id="TMJ" type='checkbox' checked={click} onChange={(e) => setClick(toggle)} />
                    You have clicking, popping, or discomfort in the jaw
            </label>
            <label htmlFor='grind'>
                <input id="grind" type='checkbox' checked={brux} onChange={(e) => setBrux(toggle)} />
                    You brux or grind your teeth
            </label>
            <label htmlFor='injury'>
                <input id="injury" type='checkbox' checked={serious} onChange={(e) => setSerious(toggle)} />
                    You had a serious injury to your head or mouth
            </label>
            </div>
            <div>
            <label htmlFor='exam'>
                Date of your last dental exam:
                <input id="exam" type='text' onChange={(e) => setDentalexam(e.target.value)} value={dentalexam} />
                What was done at that time?
                <input type='text' onChange={(e) => setExamwork(e.target.value)} value={examwork} />
            </label>
            </div>
            <div>
                <button type='submit' className='submit-button'>Submit</button>
            </div> 
        </form>
    </div>
  )
}

export default Health;