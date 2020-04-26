import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const TEXTS = {
    HEADER: 'About',
    FOOTER_NOTE: `Copyright - ${(new Date().getFullYear())}`
}

function About() {
    return (
        <>
        <Header text={TEXTS.HEADER}/>
        <Footer text={TEXTS.FOOTER_NOTE}/>
    </>
);
}

export default About;
