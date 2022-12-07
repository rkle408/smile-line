import React from "react";
import './style.css';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

function Footer() {
    const ricons = [
        {
            name: "fa-brands fa-github",
            link: "https://github.com/rkle408"
        },
        {
            name: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/rosakle/"
        }
    ]

    const vicons = [
        {
            name: "fa-brands fa-github",
            link: "https://github.com/vivianc11"
        },
        {
            name: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/vivian-chen-b19483145/"
        }
    ]

    return (
        <div className="footer">
            <Col xs={1} md={2}>
                <Badge bg="#6247aa">Rosa</Badge><br/>
                    {ricons.map(icon => {
                        return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a> 
                    })}
            </Col>

            <Col xs={1} md={2}>
                <Badge bg="#6247aa">Vivian</Badge><br/>
                    {vicons.map(icon => {
                        return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a> 
                    })}
            </Col>
        </div>
    )
}

export default Footer;