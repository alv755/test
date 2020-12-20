import { React, Fragment } from 'react'

import Image from "next/image"

import Link from "next/link"

function Picture(props) {

    console.log(typeof (props.url1))
    return (
        <Fragment>
            <div className="bradcam_area breadcam_bg overlay2">
                <h3> {props.packagename}</h3>
            </div>
            <div className="section_title text-center p-20">
                <h3>Ultra  <span style={{ color: "#c0392b", fontWeight: "600" }}>Fast SSD</span> Web Hosting</h3>
                <p>
                    Your domain control panel is designed for ease-of-use and <br />
                allows for all aspects of your domains.
              </p>
            </div>




            <div className="package_prsing_area">


                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_prising">
                                <div className="prising_header">
                                    <h3>{props.cardtittle1}</h3>
                                </div>
                                <div className="middle_content">
                                    <div className="list">
                                        <ul>
                                            <p style={{ padding: "2rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "30px", color: "#c0392b", fontWeight: "800" }}>$2.5/m</span></p>
                                            <li>{props.site}</li>
                                            <li>{props.visit}</li>
                                            <li>{props.backups}</li>
                                            <li>{props.certificate}</li>
                                            <li>{props.support}</li>
                                        </ul>
                                    </div>

                                    <div className="start_btn text-center">
                                        <Link href={props.url1}>
                                            <a className="boxed_btn_green" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_prising">
                                <div className="prising_header">
                                    <h3>{props.cardtittle2}</h3>
                                </div>
                                <div className="middle_content">
                                    <div className="list">
                                        <ul>
                                            <p style={{ padding: "2rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "30px", color: "#c0392b", fontWeight: "800" }}>$2.5/m</span></p>
                                            <li>{props.site}</li>
                                            <li>{props.visit}</li>
                                            <li>{props.backups}</li>
                                            <li>{props.certificate}</li>
                                            <li>{props.support}</li>
                                        </ul>
                                    </div>

                                    <div className="start_btn text-center">
                                        <Link href={props.url2}>
                                            <a className="boxed_btn_green" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="single_prising">
                                <div className="prising_header">
                                    <h3>{props.cardtittle3}</h3>
                                </div>
                                <div className="middle_content">
                                    <div className="list">
                                        <ul>
                                            <p style={{ padding: "2rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "30px", color: "#c0392b", fontWeight: "800" }}>$2.5/m</span></p>
                                            <li>{props.site}</li>
                                            <li>{props.visit}</li>
                                            <li>{props.backups}</li>
                                            <li>{props.certificate}</li>
                                            <li>{props.support}</li>
                                        </ul>
                                    </div>

                                    <div className="start_btn text-center">

                                        <Link href={props.url3}>
                                            <a className="boxed_btn_green" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>

                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>






        </Fragment >

    )
}

export default Picture
