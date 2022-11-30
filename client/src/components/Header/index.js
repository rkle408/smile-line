import React, { useEffect } from "react";
import "./style.css";

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
    <nav>
        <ul className="nav-container">
            {pages.map((page) => {
                return (
                <li className={currentPage.name === page.name && "active"} key={page.name}><span onClick={() => setCurrentPage(page)}>
                    {page.name}
                </span></li>
                )
            })}
        </ul>
    </nav>
    );
}

export default Header;