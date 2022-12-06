import React, { useEffect } from "react";
import "./style.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header(props) {
    const {
        pages =[],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => {
        document.title = currentPage.name
    }, [currentPage])

    return (
    <Nav>
        <Navbar style={{backgroundColor:"lightgrey"}}>
        <Container>
            <Navbar.Brand>Smile Line</Navbar.Brand>
            {pages.map((page) => {
                return (
                <Nav.Link style={{cursor: "pointer"}} className={currentPage.name === page.name && "active"} key={page.name}>
                <span onClick={() => setCurrentPage(page)}>
                    {page.name}
                </span></Nav.Link>
                )
            })}
            </Container>
        </Navbar>
    </Nav>
    );
}

export default Header;