import { React, Fragment } from 'react'

import Image from "next/image"

import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

function ContactBanner() {
    return (
        <Fragment>
            <div className="bradcam_area breadcam_bg overlay2">
                <h3>Contact Us</h3>
            </div>
            <section class="contact-section">
                <div class="container">
                    <div class="d-none d-sm-block mb-5 pb-4">

                        <div id="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.575458567592!2d85.33497931548197!3d27.6995134324421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19291015ade1%3A0xa655f212b3dce4a7!2sSpell%20Innovation!5e0!3m2!1sen!2snp!4v1607494366909!5m2!1sen!2snp" width="100%" height="450" frameborder="0" style={{ border: '0' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </div>


                        <div class="row">
                            <div class="col-12">
                                <h2 class="contact-title">Get in Touch</h2>
                            </div>
                            <div class="col-lg-8">
                                <form
                                    class="form-contact contact_form"
                                    action="contact_process.php"
                                    method="post"
                                    id="contactForm"
                                    novalidate="novalidate"
                                >
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <textarea
                                                    class="form-control w-100"
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="9"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter Message'"
                                                    placeholder=" Name"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input
                                                    class="form-control valid"
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter your name'"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input
                                                    class="form-control valid"
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter email address'"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input
                                                    class="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    type="text"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter Subject'"
                                                    placeholder="Enter Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <button
                                            type="submit"
                                            class="button button-contactForm boxed-btn"
                                        >
                                            Send
                </button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="media contact-info">
                                    <span class="contact-info__icon"><HomeIcon /></span>
                                    <div class="media-body">
                                        <h3>Pipal Bot, Mid Baneshwor</h3>
                                        <p>Kathmandu,Nepal</p>
                                    </div>
                                </div>
                                <div class="media contact-info">
                                    <span class="contact-info__icon"><CallIcon /></span>
                                    <div class="media-body">
                                        <h3>+977-9823009044 </h3>

                                    </div>
                                </div>
                                <div class="media contact-info">
                                    <span class="contact-info__icon"><MailIcon /></span>
                                    <div class="media-body">
                                        <h3>contact@spellinnovation.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </Fragment >

    )
}

export default ContactBanner
