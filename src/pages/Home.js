import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextSection from "../components/TextSection";
import TextSectionComponent from "../components/TextSectionComponent";
import AlertInfo from "../components/AlertInfo";
import Console from "../components/Console";
import Counter from "../components/Counter";
import PostDetailsList from "../components/PostDetailsList";

const TEXTS = {
    TEXT_SECTION: 'This is my first page',
    TEXT_SECTION_COMPONENT_CONTENT: 'This is a text inside text section',
    HEADER: 'This is a header',
    TEXT_SECTION_COMPONENT: 'This is a class component',
    LOGIN_BUTTON: 'Log in!',
    ALERT_INFO: 'User info',
    FOOTER_NOTE: `Copyright - ${(new Date().getFullYear())}`
}

function Home() {
    return (
        <>
        <Header text={TEXTS.HEADER}/>
        <Console loginButtonLabel={TEXTS.LOGIN_BUTTON}/>
        <TextSection text={TEXTS.TEXT_SECTION}/>
        <TextSectionComponent text={TEXTS.TEXT_SECTION_COMPONENT}/>
        {TEXTS.TEXT_SECTION_COMPONENT_CONTENT}
        <br/>
        <Counter/>
        <br/>
        <PostDetailsList />
        <AlertInfo text={TEXTS.ALERT_INFO}/>
        <Footer text={TEXTS.FOOTER_NOTE}/>
    </>
);
}

export default Home;
