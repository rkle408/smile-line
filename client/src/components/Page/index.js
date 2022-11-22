import React from "react";

import Contact from "../../pages/Contact";
import FeeForm from "../../pages/FeeForm";
import HHForm from "../../pages/HHForm";
import HIPAAForm from "../../pages/HIPAAForm";
import Questions from "../../pages/Questions"
import PageContent from "../PageContent";



function Page({ currentPage }) {
    const renderPage = () => {
        if (currentPage.name === "Contact") {
            return <Contact />
        } else if (currentPage.name === "FeeForm") {
            return <FeeForm />
        } else if (currentPage.name === "HHForm") {
            return <HHForm />
        } else if (currentPage.name === "HIPAAForm") {
            return <HIPAAForm />
        } else if (currentPage.name === "Questions") {
            return <Questions />
        } else {
            return <Contact />
        }
    }
    return <PageContent>
            {renderPage()}
        </PageContent>  
}

export default Page;