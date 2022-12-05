import React from "react";

import Contact from "../../pages/Contact";
import Fees from "../../pages/Fees";
import Health from "../../pages/Health";
import HIPAA from "../../pages/HIPAA";
import Questions from "../../pages/Questions"
import PageContent from "../PageContent";
import Find from "../../pages/Find";
import Resources from "../../pages/Resources";



function Page({ currentPage }) {
    const renderPage = () => {
        if (currentPage.name === "Contact") {
            return <Contact />
        } else if (currentPage.name === "Fees") {
            return <Fees />
        } else if (currentPage.name === "Find A Dentist") {
            return <Find />
        } else if (currentPage.name === "Health History Form") {
            return <Health />
        } else if (currentPage.name === "HIPAA") {
            return <HIPAA />
        } else if (currentPage.name === "Resources") {
            return <Resources />
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