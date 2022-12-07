import React from "react";
import './style.css';
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
        <div className="footer" style={{gap:"15px"}}>
                <div style={{display:"block"}}><Badge bg="#6247aa">Rosa</Badge><br/>
                    {ricons.map(icon => {
                        return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a> 
                    })}
                    </div>

                <div style={{display:"block"}}><Badge bg="#6247aa">Vivian</Badge><br/>
                    {vicons.map(icon => {
                        return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a> 
                    })}
                </div>
        </div>
    )
}

export default Footer;