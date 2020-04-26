import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const TEXTS = {
    HEADER: 'Contact us at example@domain.com',
    FOOTER_NOTE: `Copyright - ${(new Date().getFullYear())}`
}

function Contact() {
    return (
        <>
        <Header text={TEXTS.HEADER}/>
        <Footer text={TEXTS.FOOTER_NOTE}/>
    </>
);
}

export default Contact;
