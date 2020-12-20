import { React, Fragment } from 'react'



function SinglePackage({ price }) {
    return (

        <Fragment>

            <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_prising">
                    <div className="prising_header">
                        <h3>Economic</h3>
                    </div>
                    <div className="middle_content">
                        <div className="list">
                            <ul>
                                <p style={{ padding: "2rem", fontSize: "20px", color: "black" }}>Start from <span style={{ fontSize: "30px", color: "#c0392b", fontWeight: "800" }}>{price}/m</span></p>
                                <li>1 Site</li>
                                <li>100k Visits Per Month</li>
                                <li>1GB Backups</li>
                                <li>Free SSL Certificate</li>
                                <li>Quick support</li>
                            </ul>
                        </div>

                        <div className="start_btn text-center">
                            <a className="boxed_btn_green" href="#">
                                Start Now
        </a>
                        </div>
                    </div>
                </div>
            </div>






        </Fragment>

    )
}

export default SinglePackage
