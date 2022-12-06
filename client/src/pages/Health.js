import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Form autoComplete='off' className='HealthForm' onSubmit={handleForm}>
            <h3>Health History Form</h3>
                <Form.Group className="mb-3" controlId="formBasicInfo">
                <Row className="mb-3">
                <Col>
                    <Form.Label htmlFor='last'>
                        Last name: <Form.Control id='last' type='text' onChange={(e) => setLastname(e.target.value)} value={lastname} />
                    </Form.Label>   
                </Col>
                <Col>
                    <Form.Label htmlFor='first'>
                        First name: <Form.Control id='first' type='text' onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                    </Form.Label>   
                </Col>
                <Col>
                    <Form.Label htmlFor='middle'>
                       Middle initial: <Form.Control id='middle' type='text' onChange={(e) => setMiddleinitial(e.target.value)} value={middleinitial} />
                    </Form.Label>  
                </Col>
                </Row>
                </Form.Group>
             
                <Row className="mb-3">
                <Col>
                <Form.Label htmlFor='dob'>
                    Date of Birth: <Form.Control id='dob' type='text' onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                </Form.Label> 
                </Col>

                <Col>
                <Form.Label htmlFor='number'>
                    Phone #: <Form.Control id='number' type='text' onChange={(e) => setPhone(e.target.value)} value={phonenumber}  />
                </Form.Label>
                </Col>

                <Col>
                <Form.Label htmlFor='address'>
                    Address: <Form.Control id='address' type='text' onChange={(e) => setAddress(e.target.value)} value={address}  />
                </Form.Label>
                </Col>

                <Col>
                <Form.Label htmlFor='email'>
                    Email: <Form.Control id='email' type='email' placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email}  />
                </Form.Label>
                </Col>
                </Row>

            <h3>Medical Information</h3>
            <Form.Group className="mb-3" controlId="formMedicalHistory">
                <Form.Label htmlFor="meds">Are you or have you recently taken any prescription or over the counter medicine(s)? <br/>If so, please list all, including vitamins, natural or herbal preparations and/or dietary supplements: </Form.Label>
                <Form.Control id="meds" type="text" onChange={(e) => setMeds(e.target.value)} value={medications}/><br/>
            
            <div>
                <p className="mb-3">Are you allergic to or have you had a reaction to:</p>
                <Form.Label htmlFor='LA'>
                <Form.Check inline id="LA" type='checkbox' label='Local Anesthetics' checked={localAnesthetic} onChange={(e) => setLa(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='aspirin'>
                <Form.Check inline id="aspirin" type='checkbox' label='Aspirin' checked={aspirin} onChange={(e) => setAspirin(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='penicillin'>
                <Form.Check inline label='Penicillin or other antibiotics' id="penicillin" type='checkbox' checked={penicillin} onChange={(e) => setPenicillin(toggle)}/>
                </Form.Label>

                <Form.Label htmlFor='barb'>
                <Form.Check inline label='Barbiturates, sedatives, or sleeping pills' id="barb" type='checkbox' checked={barb} onChange={(e) => setBarb(toggle)}/>
                </Form.Label>

                <Form.Label htmlFor='sulfa'>
                <Form.Check inline label='Sulfa drugs' id="sulfa" type='checkbox' checked={sulfa} onChange={(e) => setSulfa(toggle)}/>
                </Form.Label>

                <Form.Label htmlFor='codeine'>
                <Form.Check inline label='Codeine or other narcotics' id="codeine" type='checkbox' checked={codeine} onChange={(e) => setCodeine(toggle)}/>
                </Form.Label>

                <Form.Label htmlFor='latex'>
                <Form.Check inline label='Latex' id="latex" type='checkbox' checked={latex} onChange={(e) => setLatex(toggle)}/>
                </Form.Label>
            </div>

            <div className="mb-3">
                <p>Have you had an orthopedic total joint (hip, knee, elbow, finger) replacement? <br/>
                <Form.Label htmlFor='tjr'> If yes, please provide the date and any complications: <Form.Control id="tjr" type="text" onChange={(e) => setOrthoJointReplacement(e.target.value)} value={orthojointreplacement}/> </Form.Label></p>
            </div>

            <div className="mb-3">
                <Form.Label htmlFor='bis'>
                <Form.Check label="Check this box if you are taking or scheduled to begin taking an antiresorptive agent (like Fosamax®, Actonel®, Atelvia, Boniva®, Reclast, Prolia) for osteoporosis or Paget's disease" id="bis" type='checkbox' checked={antiresorptive} onChange={(e) => setAntiresorptive(toggle)}/>
                </Form.Label>
            </div>

            <div>
                <div>
                    Please select the box to indicate if you HAVE had any of the following diseases or problems.
                </div>
                <Form.Label htmlFor='CVD'>
                <Form.Check inline label='Cardiovascular Disease' id="CVD" type='checkbox' checked={cvd} onChange={(e) => setCvd(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='CHF'>
                <Form.Check inline label='Congestive Heart Failure' id="CHF" type='checkbox' checked={chf} onChange={(e) => setChf(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='DHV'>
                <Form.Check inline label='Damaged Heart Valves' id="DHV" type='checkbox' checked={dhv} onChange={(e) => setDhv(toggle)}/>
                </Form.Label>

                <Form.Label htmlFor='HA'>
                <Form.Check inline label='Heart Attack' id="HA" type='checkbox' checked={ha} onChange={(e) => setHa(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='HBP'>
                <Form.Check inline label='High Blood Pressure' id="HBP" type='checkbox' checked={hbp} onChange={(e) => setHbp(toggle)} />
                </Form.Label>
                
                <Form.Label htmlFor='OCHD'>
                <Form.Check inline label='Other Congenital Heart Defects' id="OCHD" type='checkbox' checked={otherchd} onChange={(e) => setOtherchd(toggle)} />
                </Form.Label><br/>

                <Form.Label htmlFor='aids'>
                <Form.Check inline label='AIDS or HIV infection' id="aids" type='checkbox' checked={aidshiv} onChange={(e) => setAidshiv(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='asthma'>
                <Form.Check inline label='Asthma' id="asthma" type='checkbox' checked={asthma} onChange={(e) => setAsthma(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='stroke'>
                <Form.Check inline label='Stroke' id="stroke" type='checkbox' checked={stroke} onChange={(e) => setStroke(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='gerd'>
                <Form.Check inline label='GERD' id="gerd" type='checkbox' checked={gerd} onChange={(e) => setGerd(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='diabetes'>
                <Form.Check inline label='Diabetes' id="diabetes" type='checkbox' checked={diabetes} onChange={(e) => setDiabetes(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='seizures'>
                <Form.Check inline label='Seizures' id="seizures" type='checkbox' checked={seizures} onChange={(e) => setSeizures(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='epilepsy'>
                <Form.Check inline label='Epilepsy' id="epilepsy" type='checkbox' checked={epilepsy} onChange={(e) => setEpilepsy(toggle)} />
                </Form.Label><br/>

                <Form.Label htmlFor='OT'>
                <Form.Check inline label='Organ Transplants - Specify:' id="OT" type='checkbox' checked={organtrans} onChange={(e) => setOrgantrans(toggle)} />
                <Form.Control id= "OT" type="text" onChange={(e) => setOrgantranselab(e.target.value)} value={organtranselab}/>
                </Form.Label><br/>

                <Form.Label htmlFor='smoke'>
                <Form.Check inline label='Usage of tobacco (smoking, snuff, chew, bidis)?' id="smoke" type='checkbox' checked={tobacco} onChange={(e) => setTobacco(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='CD'>
                <Form.Check inline label='Usage of controlled substances (drugs)?' id="cd" type='checkbox' checked={controlsub} onChange={(e) => setControlsub(toggle)} />
                </Form.Label>

                <Form.Label htmlFor='alcohol'>
                <Form.Check inline label='Drink alcoholic beverages?' id="alcohol" type='checkbox' checked={alcohol} onChange={(e) => setAlcohol(toggle)}/>
                </Form.Label>
                </div>
            </Form.Group>

            <h3>Dental Information</h3>
            <div>Please select the box to indicate if you HAVE had any of the following problems.</div>

            <Form.Group className="mb-3" controlId="formMedicalHistory">
                <Form.Label htmlFor='sensitive'>
                <Form.Check inline label='Your teeth are sensitive to cold, hot, sweets, or pressure' id="sensitive" type='checkbox' checked={sensitive} onChange={(e) => setSensitive(toggle)}/>
            </Form.Label>

            <Form.Label htmlFor='dry'>
                <Form.Check inline label='Your mouth is dry' id="dry" type='checkbox' checked={dry} onChange={(e) => setDry(toggle)} />
                    
            </Form.Label>

            <Form.Label htmlFor='TMJ'>
                <Form.Check inline label='You have clicking, popping, or discomfort in the jaw' id="TMJ" type='checkbox' checked={click} onChange={(e) => setClick(toggle)} />
            </Form.Label>

            <Form.Label htmlFor='grind'>
                <Form.Check inline label='You grind your teeth' id="grind" type='checkbox' checked={brux} onChange={(e) => setBrux(toggle)} />
            </Form.Label>

            <Form.Label htmlFor='injury'>
                <Form.Check inline label='You had a serious injury to your head or mouth' id="injury" type='checkbox' checked={serious} onChange={(e) => setSerious(toggle)} />
            </Form.Label>

            <div>
            <Form.Label htmlFor='exam'>
                Date of your last dental exam:
                <Form.Control id="exam" type='text' onChange={(e) => setDentalexam(e.target.value)} value={dentalexam} />
                What was done at that time?
                <Form.Control type='text' onChange={(e) => setExamwork(e.target.value)} value={examwork} />
            </Form.Label>
            </div>
            </Form.Group>
            <div>
                <Button variant="success" type='submit' className='submit-button'>Submit</Button>
            </div> 
        </Form>
    </div>
  )
}

export default Health;