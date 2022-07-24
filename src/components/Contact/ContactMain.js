import React from 'react';
import Breadcrumbs from '../Common/PageTitle';
import ThemeChanger from '../Common/ThemeChanger';
import ContactFormSection from './ContactFormSection';
import ContactMap from './ContactMap';

const ContactMain = () => {
    return (
        <main>

            <ThemeChanger />

            <Breadcrumbs breadcrumbTitle="Contact" breadcrumbSubTitle="Contact" />

            <section className="contact-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ContactFormSection />
                        </div>
                        <div className="col-lg-4">
                            <ContactMap />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactMain;