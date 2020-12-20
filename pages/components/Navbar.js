import React, { Fragment } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ChatIcon from '@material-ui/icons/Chat';

import Image from 'next/image'

import Link from "next/link"

function Navbar() {
    return (
        <Fragment>

            <header>
                <div className="header-area">

                    <div id="sticky-header" className="main-header-area">
                        <div className="  container-fluid p-0">
                            <div className="row align-items-center no-gutters">
                                <div className="  col-xl-2 col-lg-2">
                                    <div className="ml-1 mb-1">
                                        <Link href="/">

                                            <Image src="/img/leg.webp" className=" img-fluid" alt="" width="100%" height="110" />

                                        </Link>

                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7" >
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">

                                                <li>  <Link href="/"><a style={{ textDecoration: "none" }}>home</a></Link></li>


                                                <li>
                                                    <a style={{ textDecoration: "none" }}>Domain <ExpandMoreIcon /></a>
                                                    <ul className="submenu">
                                                        <li><a href="elements.html" style={{ textDecoration: "none" }}>Economic</a></li>
                                                        <li><a href="elements.html" style={{ textDecoration: "none" }}>Unlimited</a></li>
                                                        <li><a href="elements.html" style={{ textDecoration: "none" }}>Business</a></li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a style={{ textDecoration: "none" }}>Hosting <ExpandMoreIcon /></a>
                                                    <ul className="submenu">
                                                        <li><a href="elements.html" style={{ textDecoration: "none" }}>Start Up</a></li>
                                                        <li><a href="elements.html" style={{ textDecoration: "none" }}>Mega</a></li>
                                                        <li><a href="elements.html" style={{ textDecoration: "none" }}>Unlimited</a></li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a style={{ textDecoration: "none" }}>Security <ExpandMoreIcon /></a>
                                                    <ul className="submenu">
                                                        {/* <li><Link href="/Ssl">"<a href="elements.html" style={{ textDecoration: "none" }}>SSL</a></Link></li> */}

                                                        <li><Link href="/Ssl"><a style={{ textDecoration: "none" }} >Ssl</a></Link></li>
                                                        <li><Link href="/Codeguard"><a style={{ textDecoration: "none" }} >Code Guard</a></Link></li>
                                                        <li><Link href="/Sitelock"><a style={{ textDecoration: "none" }} >Site</a></Link></li>
                                                    </ul>
                                                </li> <li><Link href="/VPS"><a style={{ textDecoration: "none" }} >VPS</a></Link></li>

                                                <li><Link href="/About"><a style={{ textDecoration: "none" }} >About</a></Link></li>


                                                <li><Link href="/Contact"><a style={{ textDecoration: "none" }}>Contact </a></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 d-none d-lg-block" style={{ marginBottom: "3rem" }}>
                                    <div className="log_chat_area d-flex align-items-center">
                                        <Link href="/Contact">
                                            <a style={{ textDecoration: "none" }} className="login popup-with-form">
                                                <PersonIcon />
                                                <span > log in</span>
                                            </a>
                                        </Link>
                                        <div className="live_chat_btn">
                                            <a className="boxed_btn_green" style={{ textDecoration: "none" }}>
                                                <ChatIcon />
                                                <span>Live Chat</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </Fragment >


    )
}

export default Navbar
