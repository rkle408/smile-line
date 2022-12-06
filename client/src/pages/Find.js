import React from "react";
import Alert from 'react-bootstrap/Alert';

const Find = () => {

    return (
        <section>
            <Alert variant="dark">
                <Alert.Heading>Find a Dentist near you!</Alert.Heading>
            </Alert><br /><br />
            <a href="https://findadentist.ada.org/dentists-catalog" target="_blank" rel="noopener noreferrer">Click here to find ADA dentists</a>
        </section>
    )
};

export default Find;