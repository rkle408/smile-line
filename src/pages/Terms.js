import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

const Terms = () => {

    return (
        <div className="terms">
            <h1 className="title">What's that word you're using, doc?</h1>
            <Card>
                <Card.Header>Caries</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Caries is just another word for cavities! If you know dental Spanish, then this should be the same!
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Terms;