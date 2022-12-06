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
    <Nav className="nav">
        <Navbar>
        <Container>
            <h1 className="brand">Smile Line</h1>
            {pages.map((page) => {
                return (
                <Nav.Link className={currentPage.name === page.name && "active"} key={page.name} id="navLink">
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