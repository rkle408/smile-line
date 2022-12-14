import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./style.css";
import caries from '../assets/caries.jpg';
import plaquecalc from '../assets/plaquecalc.png';
import calculus from '../assets/calculus.png';
import perio from '../assets/perio.jpg';
import filling from '../assets/filling.jpg';
import crown from '../assets/crown.jpg';

const Terms = () => {

    return (
        <div className="terms">
            <h1 className="title">What's that word you're using, doc?</h1><br/>
            
            <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header  as="h5">Caries</Accordion.Header>
                <Accordion.Body>
                    <img className="termImg" alt="Illustration about dental decay" src={caries} style={{height:"50%", width:"50%"}}/><br/><br/>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Caries means <b>tooth decay</b>! Tooth decay means that the surface your tooth is getting weak or already weak, and if it gets too weak, a hole will develop and <i>that</i> is a cavity.
                            <br/><br/>

                            Most of the time, these cavities or holes, are in areas you can't see or are too small for you to see. That's why we also need x-rays. Often times, we will see a big hole once we have already started the process of doing your filling! At the first appointment with us, it's really important for us to feel the teeth for holes in hard-to-see places.
                            <br/><br/>

                            Caries are caused by some of the bacteria in your mouth, we all have a bunch of bacteria -- don't worry, living in the film on your teeth, and eating your lunch stuck between your teeth! They then make acid as a result of eating your leftovers, which weakens the tooth, and causes a hole also known as a cavity.
                            <br/><br/>

                            If you don't get a cavity taken care of when it's smaller or not painful, it could cause you to have to get a bigger procedure. The cavity continues to get bigger, and it could cause pain if it hits that very sensitive nerve of yours!
                            <br/><br/>
                            
                            Bonus: If you know dental Spanish, then this should be the same!
                            {' '}
                        </p>
                        {/* <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer> */}
                    </blockquote>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header as="h5">Plaque</Accordion.Header>
                <Accordion.Body>
                    <img className="termImg" alt="Illustration comparing plaque and tartar" src={plaquecalc}/><br/><br/>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Go ahead and run your tongue against your teeth... we'll wait...
                            <br/><br/>

                            Do you feel a <b>fuzzy film</b> over your teeth? Do you see those white spots that you can push off with your fingernail? -- this is gross, please don't do this... if you do, please wash your hands!
                            <br/><br/>

                            That fuzzy film is what we call plaque. It is something that we all form everyday! That's why we have to brush everyday. It is known as a 'biofilm' that is a perfect place for bacteria to live. Just think of that green gross stuff floating on top of lakes.
                            <br/><br/>

                            It is REALLY important to remove this plaque everyday, especially before bedtime. All the bacteria living in your plaque will come to life when you're sleeping. This is because you're not producing as much spit as when you're awake, and the spit in your mouth helps keep the bacteria a proper level. Since your mouth is more dry at night, they can live their best life!
                            {' '}
                        </p>
                        {/* <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer> */}
                    </blockquote>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header as="h5">Calculus</Accordion.Header>
                <Accordion.Body>
                    <img className="termImg" alt="Calculus on teeth and after it is removed" src={calculus}/><br/><br/>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            No, don't worry, we're not talking about math here.
                            <br/><br/>
                            
                            Calculus is also known as 'tartar'. But isn't that a spice too? I know, it's confusing...
                            <br/><br/>

                            Calculus or tartar is the <b>hard build-up</b> of plaque if it is not removed properly with brushing and flossing. Unfortunately, when plaque hardens into calculus, it can really only be removed safely in a dental office. If there is a lot or if it's deep, we will get you numb since we need to reach below the gumline to remove all that hard stuff!
                            <br/><br/>
                        
                            Do you brush and floss really well everyday, but still see this hard build up, especially around the bottom front teeth on the tongue side? It's totally normal: we have spit/saliva glands under our tongues and minerals from all the spit that sits in this area contributes to this. Just make sure you visit your dentist every 6 months so they can remove this for you-- this doesn't usually need numbing since it's not usually deep under the gumline!
                            {' '}
                        </p>
                    </blockquote>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header as="h5">Gum Disease: Gingivitis, Periodontitis</Accordion.Header>
                <Accordion.Body>
                    <img className="termImg" alt="Illustration of stages of gum disease" src={perio}/><br/><br/>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            When we are talking about gum disease, we are basically saying that your <b>gums and possibly bones around your teeth are not healthy</b>.
                            <br/><br/>
                            
                            <b>Gingivitis</b> - this is when you ONLY have unhealthy gums! At this stage, the bone around your teeth/under your gums are fine! Why are your gums unhealthy? Just a lot of film/plaque build-up around the teeth FILLED with bacteria that is irritating the gums. Your gums interpret the plaque full of bacteria as an invader, so it activates it's defense system, your immune system, to protect you, which means swelling and bleeding -- like when you get a bug bite or swollen ankle or a cut.
                            <br/><br/>

                            <b>Periodontitis</b> - this is when you have BOTH unhealthy gums AND the bone surrounding your teeth! At this stage, your gums and bone have started shrinking. This one is a very big deal! If you don't brush and floss regulary, or go to the dentist 2 times a year, you will likely get food that's really stuck deep in between the gums, and hard plaque that starts to make the bone sick. At this stage, you will hear us talking about "pockets," which is just the space between your tooth and gums -- deep pockets are bad because that means the bone is moving away from your teeth! <i>Your teeth may start to get loose</i>, and may need to be taken out if you do not get regular care possibly every 3 months! <i>Infection can also spread under the teeth</i>!
                            {' '}
                        </p>
                    </blockquote>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header as="h5">Filling</Accordion.Header>
                <Accordion.Body>
                    <img className="termImg" alt="Illustration of a filling" src={filling}/><br/><br/>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            When you have a smaller cavity that does not reach the nerve, we need to remove and <b>clean out the cavity</b>, rotten tooth structure, and bacteria. We can't leave this new clean tooth area open, so we put in a filling! This may be tooth-colored or silver.
                            <br/><br/>
                            
                            There are both good and bad things about tooth-colored and silver fillings, and it's different for every patient and every dentist. Please talk to your doctor about what's best for the both of you! Note that insurance sometimes will be picky about which one they'll pay for.
                            <br/><br/>
                            {' '}
                        </p>
                    </blockquote>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header as="h5">Crown</Accordion.Header>
                <Accordion.Body>
                    <img className="termImg" alt="Illustration about dental decay" src={crown}/><br/><br/>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            A crown is a <b>complete cover</b> for your tooth. A crown is usually needed when your tooth is broken, a cavity is too big for a filling, or you had a root canal done on that tooth.
                            <br/><br/>

                            A crown can be made of porcelain/ceramic, porcelain and metal, or just metal. These different options usually come at different prices. 
                            <br/><br/>
                            
                            Crowns usually have to be sent out to a lab to be made, so you'll go home from your appointment with a temporary crown, and you'll come back to have the permanent crown placed after it comes back from the lab. With new technology, some dental offices have a machine that makes a crown in the office, so you can have it placed the same day. Note: These same-day crowns are convenient, but aren't always the best choice for every patient, tooth, or doctor, so make sure you talk to your dentist to find the best choice for you.
                            {' '}
                        </p>
                    </blockquote>
                </Accordion.Body>
            </Accordion.Item>

            {/* <Accordion.Item eventKey="0">
                <Accordion.Header as="h5"></Accordion.Header>
                <Accordion.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            .
                            <br/><br/>
                            
                            .
                            <br/><br/>

                            .
                            {' '}
                        </p>
                    </blockquote>
                </Accordion.Body>
            </Accordion.Item>*/}
        </Accordion>
        </div>
    )
}

export default Terms;