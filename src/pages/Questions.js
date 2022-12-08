import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./style.css";

const Questions = () => {

    return (
        <div className="questions">  
            <h1 className="title">You have dental questions? We have answers!</h1><br/>
        
        <section>

            <Accordion flush>
            
                <Accordion.Item eventKey="0">  
                    <Accordion.Header as="h5">Without doing too much work, how do I prevent my teeth from falling out?</Accordion.Header>
                        <Accordion.Body>
                            The answer is simple: brush twice a day and floss at least once a day, especially important before going to sleep, and getting your routine check-ups and cleanings!
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header as="h5">Why do I need to see a dentist twice a year?</Accordion.Header>
                        <Accordion.Body>
                            We need to check all aspects of your teeth, especially the surfaces you can't see and that are hard to reach, to make sure they're healthy or if they're not, to catch it before it becomes a bigger problem! Dealing with a small cavity is always easier and cheaper to deal with than a crown, root canal, or pulling the tooth out!
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header as="h5">What happens during a cleaning? It just feels like you're scratching my teeth.</Accordion.Header>
                        <Accordion.Body>
                            We use special instruments that curve to the roots and direction of your teeth. Generally, we try to go at and below the gumline to pull any plaque or food particles that are hardened on to your teeth or in a place your brush and floss can't reach!
                        </Accordion.Body>
                </Accordion.Item>
                    
                <Accordion.Item eventKey="3">
                    <Accordion.Header as="h5">Why should I floss??</Accordion.Header>
                        <Accordion.Body>
                            Brushing will miss the areas in between your teeth! And it's definitely not going to get out that piece of garlic lodged into your gums!<br/>
                            It'll help to remove plaque/build up and bacteria that you can't see or feel. Removing the plaque with floss will help to remove the bacteria that causes swollen and bleeding gums!<br/><br/>
                            <hr />
                            <a className="link" href="https://www.youtube.com/watch?v=WviE5aa5Ha0" rel="noreferrer" target="_blank">Click here to see a video on proper flossing!</a>
                        </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="4">
                    <Accordion.Header as="h5">Why should I use string floss? It's so hard, and I'd rather use a water flosser or a floss pick...</Accordion.Header>
                        <Accordion.Body>
                            If you are physically able to use string floss, it's the best option because it can curve around your teeth, and actually remove the plaque!<br/>
                            A different type of floss is a great ADDITION to string flossing, but is usually insufficient on its own because it could just move the plaque lower into your gums, or can even cause damage to them if used incorrectly or with too much force!
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header as="h5">I heard fluoride was bad, why do you guys always push it?</Accordion.Header>
                        <Accordion.Body>
                            Like many other substances in the world, too much can be bad! We are suggesting just a little flouride to help remineralize your teeth after all the work they do for you!<br/>In many cities, there is already fluoride added to your water, which is why we suggest drinking filtered tap water! We also suggest using toothpaste that contains fluoride, but that you do not swallow, and PLEASE DON'T RINSE IT OUT!<br/><br/>
                            For low cavity risk patients, no other supplemental fluoride is needed. <br/>
                            You may see it if you are more prone to cavities, have a dry-mouth issue from under-functioning saliva glands, medications, or even cancer treatment.
                        </Accordion.Body>
                </Accordion.Item>
            
            </Accordion>
    </section>
    </div>
    )
};

export default Questions;