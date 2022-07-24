import React from 'react';
import Link from 'next/link';

const ContactFormSection = () => {
    return (
        <div className="contact-wrapper pos-rel mb-40 wow fadeInUp">
            <div className=" contact-inner">
                <div className="contact-content">
                    <h4>Get in Touch</h4>
                    <p className="mb-35">Please feel free to contact with us for any kinds of inquiries and
                        information. Our support team always available to help the clients.</p>
                    <form className="contact-form" action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label htmlFor="m-id">Email</label>
                                    <input type="email" name="m-id" id="m-id" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" name="phone" id="phone" placeholder="Your phone" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-unit">
                                    <label htmlFor="s-select">Subject</label>
                                    <div className="common-select-arrow common-select-arrow-60 mb-30 w-full">
                                        <select name="s-select" id="s-select" className="gender-category-select">
                                            <option value="1">Select subject</option>
                                            <option value="2">Subject One</option>
                                            <option value="4">Subject Two</option>
                                            <option value="5">Subject Three</option>
                                            <option value="6">Subject Four</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="single-input-unit">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" placeholder="Write a messages..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="contact-btn">
                            <div className="note">By check this box I agree with <Link href="/terms"><a className="text-btn">Terms & Conditions</a></Link></div>
                            <button className="fill-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;