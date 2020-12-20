import { React, Fragment, useState } from 'react'

import Image from "next/image"

import Link from "next/link"

import { Button } from 'antd';


import Switch from "./Switch"

function PackageDetails(props) {

    const priceone = props.price1
    const pricetwo = props.price2
    const pricethree = props.price3

    const pricefour = props.price4
    const pricefive = props.price5
    const pricesix = props.price6



    const [toggled, setToggled] = useState(false)

    const [price1, setPrice1] = useState(priceone)

    const [price2, setPrice2] = useState(pricetwo)
    const [price3, setPrice3] = useState(pricethree)


    const handleClick = () => {
        setToggled((s) => !s);

        if (toggled === true) {

            setPrice1(priceone)
            setPrice2(pricetwo)
            setPrice3(pricethree)
        }
        else {
            setPrice1("Rs.1250/annually")
            setPrice2("Rs.1251/annually")
            setPrice3("Rs.1252/annually")
        }

        // setPrice("Rs1250");
    }



    return (
        <Fragment>
            <div className="bradcam_area breadcam_bg overlay2">
                <h3> {props.name} Packages Details</h3>

                <Button type="primary">Button</Button>
            </div>
            <div className="section_title text-center p-20">
                <h3>Choose Your  <span style={{ color: "#c0392b", fontWeight: "600" }}>Plan</span> for {props.name}</h3>
                <p>
                    Your domain control panel is designed for ease-of-use and <br />
                allows for all aspects of your domains.
              </p>
            </div>

            <div className="pricing-container">


                <div className="package_prsing_area">
                    <div className="container">


                        <div className="flex p-4 ml-24">


                            <h1 style={{ marginLeft: "30rem", padding: "12px", fontSize: "30px" }}>Monthly</h1>
                            <Switch toggled={toggled} onClick={handleClick} />

                            <h1 style={{ padding: "12px", fontSize: "30px" }}>Yearly</h1>


                        </div>


                        <div className="row">


                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_prising">
                                    <div className="prising_header">
                                        <h3>Economic</h3>
                                    </div>
                                    <div className="middle_content">
                                        <div className="list">
                                            <ul>
                                                <p style={{ padding: "1rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "28px", color: "#c0392b", fontWeight: "600" }}>{priceone}</span></p>
                                                <li>vCPUs:1</li>
                                                <li>RAM : 1GB</li>
                                                <li>SSD : 25GB</li>

                                                <li>BandWidth : 2TB</li>


                                            </ul>
                                        </div>

                                        <div className="start_btn text-center">
                                            <a className="boxed_btn_green" href="#" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_prising">
                                    <div className="prising_header">
                                        <h3>Economic</h3>
                                    </div>
                                    <div className="middle_content">
                                        <div className="list">
                                            <ul>
                                                <p style={{ padding: "1rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "28px", color: "#c0392b", fontWeight: "600" }}>{pricetwo}</span></p>
                                                <li>vCPUs:1</li>
                                                <li>RAM : 25GB</li>
                                                <li>SSD : 50GB</li>

                                                <li>BandWidth : 2TB</li>
                                            </ul>
                                        </div>

                                        <div className="start_btn text-center">
                                            <a className="boxed_btn_green" href="#" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_prising">
                                    <div className="prising_header">
                                        <h3>Economic</h3>
                                    </div>
                                    <div className="middle_content">
                                        <div className="list">
                                            <ul>
                                                <p style={{ padding: "1rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "28px", color: "#c0392b", fontWeight: "600" }}>{pricethree}</span></p>
                                                <li>vCPUs:2</li>
                                                <li>RAM : 2GB</li>
                                                <li>SSD : 60TB</li>
                                                <li>BandWidth : 3TB</li>
                                            </ul>
                                        </div>

                                        <div className="start_btn text-center">
                                            <a className="boxed_btn_green" href="#" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_prising">
                                    <div className="prising_header">
                                        <h3>Economic</h3>
                                    </div>
                                    <div className="middle_content">
                                        <div className="list">
                                            <ul>
                                                <p style={{ padding: "1rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "28px", color: "#c0392b", fontWeight: "600" }}>{pricefour}</span></p>
                                                <li>vCPUs:2</li>
                                                <li>RAM : 4GB</li>
                                                <li>SSD : 80TB</li>
                                                <li>BandWidth : 4TB</li>
                                            </ul>
                                        </div>

                                        <div className="start_btn text-center">
                                            <a className="boxed_btn_green" href="#" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_prising">
                                    <div className="prising_header">
                                        <h3>Economic</h3>
                                    </div>
                                    <div className="middle_content">
                                        <div className="list">
                                            <ul>
                                                <p style={{ padding: "1rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "28px", color: "#c0392b", fontWeight: "600" }}>{pricefive}</span></p>
                                                <li>vCPUs:4</li>
                                                <li>RAM : 8GB</li>
                                                <li>SSD : 160GB</li>
                                                <li>BandWidth : 5TB</li>
                                            </ul>
                                        </div>

                                        <div className="start_btn text-center">
                                            <a className="boxed_btn_green" href="#" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4">
                                <div className="single_prising">
                                    <div className="prising_header">
                                        <h3>Economic</h3>
                                    </div>
                                    <div className="middle_content">
                                        <div className="list">
                                            <ul>
                                                <p style={{ padding: "1rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "28px", color: "#c0392b", fontWeight: "600" }}>{pricesix}</span></p>
                                                <li>vCPUs:8</li>
                                                <li>RAM : 16GB</li>
                                                <li>SSD : 320TB</li>
                                                <li>BandWidth : 6TB</li>
                                            </ul>
                                        </div>

                                        <div className="start_btn text-center">
                                            <a className="boxed_btn_green" href="#" style={{ textDecoration: "none" }}>
                                                Start Now
                                </a>
                                        </div>
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

export default PackageDetails

