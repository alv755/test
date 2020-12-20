import { React, Fragment } from 'react'

import Image from "next/image"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import InstagramIcon from '@material-ui/icons/Instagram';

import MessengerCustomerChat from 'react-messenger-customer-chat';
import Link from "next/link"

function Footer() {
    return (
        <Fragment>

            <MessengerCustomerChat

                pageId="106932124447118"
                appId="1136883423435261"


            />

            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <div className="footer_logo">
                                        <a href="#">
                                            <Image src="/img/log.webp" alt="" width="140%" height="60%" />
                                        </a>
                                    </div>
                                    <p className="footer_text doanar">
                                        <a className="first" href="#">+977-9823009044 , 9823009045</a> <br />
                                        <a href="#">spellhost@support.com</a>
                                    </p>
                                    <div className="socail_links">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <FacebookIcon />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <TwitterIcon />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <InstagramIcon />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title">Quick Links</h3>
                                    <ul>
                                        <li><a href="#">Unlimited Hosting</a></li>
                                        <li><a href="#">Premium Hosting</a></li>
                                        <li><a href="#">Reseller Hosting</a></li>
                                        <li><a href="#">Cloud Hosting</a></li>
                                        <li><a href="#">WordPress Hosting</a></li>

                                        <li><a href="#">VPS Server</a></li>
                                        <li><a href="#">SSL Certificate</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-lg-2">
                                <div className="footer_widget">
                                    <h3 className="footer_title">Company</h3>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About</a></li>

                                        <li><a href="#">Forums</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Client Reviews</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="footer_widget">
                                    <h3 className="footer_title">Newsletter</h3>
                                    <form action="#" className="newsletter_form">
                                        <input type="text" placeholder="Enter your mail" />
                                        <button type="submit">Sign Up</button>
                                    </form>
                                    <p className="newsletter_text">
                                        Subscribe newsletter to get updates
                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border"></div>
                        <div className="row">
                            <div className="col-xl-12">
                                <p className="copy_right text-center">


                                    All rights reserved | Proudly Powered By
                                    <FavoriteIcon />

                                    <Link href="https://spellinnovation.com"><a>Spell Innovation</a>

                                    </Link>


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>

    )
}

export default Footer
