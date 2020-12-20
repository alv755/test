import { React, Fragment } from 'react'

import Image from "next/image"
import Link from "next/link"
import styles from "./Table.module.css"

function Package(props) {
    return (
        <Fragment>
            <div className="bradcam_area breadcam_bg overlay2">
                <h3> {props.packagename}</h3>
            </div>
            <div className="prising_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title text-center mb-100">
                                <h3>Choose your Plan</h3>
                                <p>
                                    Your domain control panel is designed for ease-of-use and <br />
                allows for all aspects of your domains.
              </p>
                            </div>
                        </div>
                    </div>





                    <div className="col-xl-12 col-md-6 col-sm-4">
                        <table className={styles.table}>
                            <thead className="col-xl-12 col-md-6 col-sm-4">
                                <tr>
                                    <td>Domains</td>
                                    <th>Registration</th>
                                    <th>Transfer</th>
                                    <th>Renewal</th>

                                </tr>
                            </thead>
                            <tbody className="col-xl-12 col-md-6 col-sm-4">
                                <tr >
                                    <th>.COM</th>
                                    <td>NPR 1099</td>
                                    <td>NPR 1099</td>

                                    <td>NPR 1199</td>
                                </tr>
                                <tr>
                                    <th>.NET</th>
                                    <td>NPR 1320</td>

                                    <td>NPR 1599</td>
                                    <td>NPR 1699</td>
                                </tr>
                                <tr>
                                    <th>.ASIA</th>
                                    <td>NPR 1599</td>
                                    <td>NPR 1699</td>

                                    <td>NPR 1699</td>
                                </tr>
                                <tr>
                                    <th>.INFO</th>
                                    <td>NPR 1399</td>
                                    <td>NPR 1899</td>

                                    <td>NPR 1899</td>
                                </tr>
                                <tr>
                                    <th>.BIZ</th>
                                    <td>NPR 1499</td>
                                    <td>NPR 1999</td>

                                    <td>NPR 1999</td>
                                </tr>

                                <tr>
                                    <th>.CO</th>
                                    <td>NPR 1499</td>
                                    <td>NPR 1999</td>

                                    <td>NPR 1999</td>
                                </tr>

                                <tr>
                                    <th>.ORG</th>
                                    <td>NPR 1450</td>
                                    <td>NPR 1450</td>
                                    <td>NPR 1599</td>
                                </tr>
                            </tbody>
                        </table>



                    </div>
                </div>
            </div>






        </Fragment >

    )
}

export default Package
