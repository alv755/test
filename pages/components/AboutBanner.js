import { React, Fragment } from 'react'

import Image from "next/image"

import Link from "next/link"

import ChatIcon from '@material-ui/icons/Chat';

function AboutBanner() {
    return (
        <Fragment>
            <div className="bradcam_area breadcam_bg overlay2">
                <h3 style={{ padding: "0rem" }}>About Us</h3>
                {/* <Image className="img-fluid" src="/img/two.png"
                    width="400%"
                    height="300" alt=""
                    style={{ padding: "10rem" }} /> */}


            </div>


            <div className="about_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h3 className="about_title text-center">
                                We made Cloud Computing <br />
                                    More Easier
                    </h3>
                        </div>
                    </div>
                    <div className="row mb-60">
                        <div className="col-xl-6">
                            <p>For light wherein fly their he blessed seed behold fourth moveth face moving. Dry for also subdue
                            dominion creepeth the may over fish very greater sixth to fill. Cattle you god heaven above
                            moveth, night. There fruitful upon from fowl, that she’d day man unto that have all herb whose
                        our void evening after under. You’ll sea wherein sea fruitful fill from.</p>
                        </div>
                        <div className="col-xl-6">
                            <p>Dry for also subdue dominion creepeth the may over fish very greater sixth to fill. Cattle you
                            god heaven above moveth, night. There fruitful upon from fowl, that she’d day man unto that have
                        all herb whose our void evening after under. You’ll sea wherein sea fruitful fill from.</p>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-xl-3">
                            <div className="about_info">
                                <h3>2010</h3>
                                <p>Cattle you god heaven above moveth, night. There fruitful upon from fowl, that she’d day man
                                unto that have all herb whose our void evening after under. You’ll sea wherein sea fruitful
                                fill from.

                        </p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="about_info">
                                <h3>2015</h3>
                                <p>Above creeping bearing, lights earth hath day, may them good, darkness. Shall. From for given
                                male from place created stars signs fowl bearing there were him so subdue greater herb.
                        </p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="about_info">
                                <h3>2018</h3>
                                <p>From for given male from place created stars signs fowl bearing there were him so subdue
                            greater herb. Creature thing great male give cattle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_gallery_wrap">
                <div className="container">
                    <div className="row align-items-center mb-80">
                        <div className="col-xl-6">
                            <div className="service_wrap">
                                <div className="thumb-1">
                                    <img src="/img/about/1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about_wrap_text_1">
                                <h3>
                                    Committed to WordPress
                                </h3>
                                <p>Above creeping bearing, lights earth hath day, may them good, darkness. Shall. From for given
                                male from place created stars signs fowl bearing there were him so subdue greater herb.
                                Creature thing great male give cattle is Cattle you god heaven above moveth, night. There
                                fruitful upon from fowl, that she’d day man unto that have all herb whose our void evening
                                    after under. You’ll sea </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="about_wrap_text_1">
                                <h3>
                                    Contributing to Open Source
                                </h3>
                                <p>Above creeping bearing, lights earth hath day, may them good, darkness. Shall. From for given
                                male from place created stars signs fowl bearing there were him so subdue greater herb.
                                Creature thing great male give cattle is Cattle you god heaven above moveth, night. There
                                fruitful upon from fowl, that she’d day man unto that have all herb whose our void evening
                                    after under. You’ll sea </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="service_wrap">
                                <div className="thumb-1">
                                    <img src="/img/about/2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about_boxes">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-md-4">
                            <div class="single_box">
                                <h3>278390</h3>
                                <p>Client around the World</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4">
                            <div class="single_box">
                                <h3>200</h3>
                                <p>Dedicated team</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4">
                            <div class="single_box">
                                <h3>563278</h3>
                                <p>Domain registation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-3">

            </div>
            <div className="have_question">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="single_border">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-md-4 col-lg-6">
                                        <h3>Have any Question?</h3>
                                    </div>
                                    <div className="col-xl-6 col-md-8 col-lg-6">
                                        <div className="chat">
                                            <a className="boxed_btn_green" href="#">
                                                <ChatIcon />
                                                <span>Live Chat</span>
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

export default AboutBanner
