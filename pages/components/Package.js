import { React, Fragment } from 'react'

import Image from "next/image"
import Link from "next/link"


function Package() {
  return (
    <Fragment>
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




          <div className="packagerow">
            <div className="col-1-of-3">
              <div className="package">
                <div className="package__side package__side--front-1">
                  <div className="package__title package__title--1">

                    <Image className="img-fluid" src="/img/icon/paper.webp"
                      width={100}
                      height={100} alt="" />



                    <h1 className="package__heading" style={{ fontSize: "22px" }}>Web Hosting</h1>
                  </div>

                  <div className="package__details">
                    <ul>
                      <li>1 Website</li>
                      <li>50 GB SSD Storage</li>
                      <li>Unmetered Bandwidth</li>
                      <li>Free SSL Certificate</li>
                      <li>1 Included Domain</li>
                      <li>1 Included Domain</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="package__side package__side--back package__side--back-1"
                >
                  <div className="package__cta">
                    <div className="package__price-box">
                      <p className="package__price-only" style={{ color: "white" }}>Only</p>
                      <p className="package__price-value" style={{ color: "white" }}>$2.95/mo*</p>
                    </div>

                    <Link href="/WebHosting">
                      <a className="btn btn--white" style={{ backgroundColor: "white" }}>Select</a>

                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="package">
                <div className="package__side package__side--front-2">
                  <div className="package__title package__title--2">
                    <Image className="img-fluid" src="/img/icon/plane.webp"
                      width={100}
                      height={100} alt="" />



                    <h1 className="package__heading" style={{ fontSize: "22px" }}>Reseller Hosting</h1>
                  </div>

                  <div className="package__details">
                    <ul>
                      <li>Includes Basic Package Features</li>
                      <li>Unlimited Websites</li>
                      <li>Unlimited SSD Storage</li>
                      <li>Unlimited Domains</li>
                      <li>Unlimited Parked Domains</li>
                      <li>Unlimited Sub Domains</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="package__side package__side--back package__side--back-2"
                >
                  <div className="package__cta">
                    <div className="package__price-box">
                      <p className="package__price-only" style={{ color: "white" }}>Only</p>
                      <p className="package__price-value" style={{ color: "white" }}>$5.45/mo*</p>
                    </div>

                    <Link href="/ResellerHosting">
                      <a className="btn btn--white" style={{ backgroundColor: "white" }}>Select</a>

                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="package">
                <div className="package__side package__side--front-3">
                  <div className="package__title package__title--3">
                    <Image className="img-fluid" src="/img/icon/rocket.png"
                      width={100}
                      height={100} alt="" />

                    <h1 className="package__heading" style={{ fontSize: "22px" }}>Domain Reseller</h1>
                  </div>

                  <div className="package__details">
                    <ul>
                      <li>Includes Plus Plan Features</li>
                      <li>High Performance</li>
                      <li>2 Spam Experts</li>
                      <li>Free SSL Certificate</li>
                      <li>Domain Privacy</li>
                      <li>Site Backup - CodeGuard Basic</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="package__side package__side--back package__side--back-3"
                >
                  <div className="package__cta">
                    <div className="package__price-box">
                      <p className="package__price-only" style={{ color: "white" }}>Only</p>
                      <p className="package__price-value" style={{ color: "white" }}>$13.95/mo</p>
                    </div>

                    <Link href="/DomainReseller">
                      <a className="btn btn--white" style={{ backgroundColor: "white" }}>Select</a>

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

export default Package
