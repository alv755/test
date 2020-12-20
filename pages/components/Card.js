import React, { Fragment } from "react"

import styles from "./Card.module.css"

import Image from "next/image"

const Cards = () => {
    return (

        <Fragment>

            <div className="col-xl-12" style={{ paddingTop: "8rem" }}>
                <div className="section_title text-center mb-100">
                    <h3>Our <span style={{ color: "#c0392b", fontWeight: "600" }}>Guarantee</span> To You.</h3>
                    <p>
                        Your domain control panel is designed for ease-of-use and <br />
                allows for all aspects of your domains.
              </p>
                </div>
            </div>


            <div className="flex row-xl-8 row-md-6 row-sm-32">

                <div className=" row" style={{ paddingLeft: "30rem", marginBottom: "0rem", marginTop: "0rem", marginLeft: "15px", marginRight: "15px" }}>

                    <div className={styles.container}>
                        <Image src="/img/icon/support.webp" className="img-fluid" width="500" height="400" style={{ margin: "60rem" }} />
                        <p className={styles.title}>24/7 Support</p>
                        <div className={styles.overlay}></div>
                        {/* <div className={styles.button}><a href="#"> BUTTON </a></div> */}
                    </div>


                    <div className={styles.container} style={{ marginLeft: "4rem" }}>

                        <Image src="/img/icon/moneybacks.webp" className="img-fluid" width="300" height={280} style={{ margin: "60rem" }} />
                        <p className={styles.title}>Money Back</p>
                        <div className={styles.overlay}></div>
                        <div className={styles.button}><a href="#"> BUTTON </a></div>
                    </div>

                    <div className={styles.container} style={{ marginLeft: "4rem" }}>
                        <Image src="/img/icon/uptime.webp" className="img-fluid" width="300" height={280} style={{ margin: "60rem" }} />
                        <p className={styles.title}>Uptime</p>
                        <div className={styles.overlay}></div>
                        {/* <div className={styles.button}><a href="#"> BUTTON </a></div> */}
                    </div>
                </div>







            </div>
        </Fragment >


    )
}


export default Cards