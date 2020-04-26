import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const TEXTS = {
    HEADER: '404',
    FOOTER_NOTE: 'This page does not exist'
}

function ErrorPage() {
    return (
        <>
        <Header text={TEXTS.HEADER}/>
        <Footer text={TEXTS.FOOTER_NOTE}/>
    </>
);
}

export default ErrorPage;
