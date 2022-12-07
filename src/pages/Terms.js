import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

const Terms = () => {

    return (
        <div className="terms">
            <h1 className="title">What's that word you're using, doc?</h1>
            <Card>
                <Card.Header  as="h5">Caries</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Caries is just another word for cavities or dental decay!
                            <br/><br/>

                            Caries are caused by the bacteria in your mouth, we all have a bunch of bacteria -- don't worry, living in the film on your teeth, and eating your lunch stuck between your teeth! They then make acid as a result of eating your leftovers, which weakens the tooth, and causes a hole also known as a cavity.
                            <br/><br/>
                            
                            Bonus: If you know dental Spanish, then this should be the same!
                            {' '}
                        </p>
                        {/* <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer> */}
                    </blockquote>
                </Card.Body>
            </Card>
            <br/>

            <Card>
                <Card.Header as="h5">Plaque</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Go ahead and run your tongue against your teeth... we'll wait...
                            <br/><br/>

                            Do you feel a fuzzy film over your teeth? Do you see those white spots that you can push off with your fingernail? -- this is gross, please don't do this... if you do, please wash your hands!
                            <br/><br/>

                            That fuzzy film is what we call plaque. It is something that we all form everyday! That's why we have to brush everyday. It is known as a 'biofilm' that is a perfect place for bacteria to live. Just think of that green gross stuff floating on top of lakes.
                            <br/><br/>

                            It is REALLY important to remove this plaque everyday, especially before bedtime. All the bacteria living in your plaque will come to life when you're sleeping because your mouth is more dry so they can live their best life!
                            {' '}
                        </p>
                        {/* <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer> */}
                    </blockquote>
                </Card.Body>
            </Card>
            <br/>

            <Card>
                <Card.Header as="h5">Gum Disease: Gingivitis, Periodontitis</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            When we are talking about gum disease, we are basically saying that your gums and possibly bones around your teeth are not healthy.
                            <br/><br/>
                            
                            Gingivitis - this is when you ONLY have unhealthy gums! At this stage, the bone around your teeth/under your gums are fine! Why are your gums unhealthy? Just a lot of film/plaque build-up around the teeth FILLED with bacteria that is irritating the gums. Your gums interpret the plaque full of bacteria as an invader, so it activates it's defense system to protect you, which means puffiness and bleeding -- like when you get a bug bite or swollen ankle or a cut.
                            <br/><br/>

                            Periodontitis - this is when you have BOTH unhealthy gums AND the bone surrounding your teeth are lowering! This one is a very big deal! If you don't brush and floss regulary, or go to the dentist 2 times a year, you will likely get food that's really stuck deep in between the gums, and hard plaque that starts to make the bone sick.

                            {' '}
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Terms;