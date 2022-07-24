import Head from 'next/head';
import React from 'react';
import CreatorProfileMain from '../components/CreatorProfile/CreatorProfileMain';
import Footer from '../components/Layout/Footer/FooterTwo/FooterTwo';
import Header from '../components/Layout/Header/Header';


export default function Contact() {

    return (
        <>
            <Head>
                <title>Craftt - Hire professionals that share your values</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <CreatorProfileMain />
            <Footer />
        </>
    )
}