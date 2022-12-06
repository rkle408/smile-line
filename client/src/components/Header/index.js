import React, { useEffect } from "react";
import "./style.css";
import Nav from 'react-bootstrap/Nav'

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
    <Nav className="justify-content-end">
        <ul className="nav-container">
            {pages.map((page) => {
                return (
                <Nav.Item style={{cursor: "pointer"}} className={currentPage.name === page.name && "active"} key={page.name}>
                <span onClick={() => setCurrentPage(page)}>
                    {page.name}
                </span></Nav.Item>
                )
            })}
        </ul>
    </Nav>
    );
}

export default Header;