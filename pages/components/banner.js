import { React, Fragment } from 'react'

import Image from "next/image"

import Link from "next/link"

function banner() {
  return (
    <Fragment>
      <div className="slider_area">
        <div
          className="single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay2" >
          <div class="mt-44">
            <div class="row align-items-center">

              <div class="slider_text text-center" style={{ marginTop: "5rem" }} >
                <Image className="img-fluid" src="/img/one.webp"
                  width="450%"
                  height="350" alt="" />

                <h3 style={{ fontSize: "40px", marginBottom: "0rem" }}>Go Big with your next Domain</h3>
                <div className="find_dowmain" style={{ marginTop: "0rem" }}>
                  <form action="#" className="find_dowmain_form">
                    <input type="text" placeholder="Find your domain" />
                    <button type="submit" style={{ fontSize: "20px" }}>search</button>
                  </form>
                </div>


                <div className="flex row mr-1">




                  <div className=" ml-44 p-4  ">
                    <p ><span style={{ fontSize: "36px", fontWeight: "600", color: "#1abc9c" }}>.com</span> NPR 1,000 </p>


                  </div>

                  <div className="ml-2 p-4">
                    <p ><span style={{ fontSize: "36px", fontWeight: "600", color: "#1abc9c" }}>.org</span> NPR 1,200 </p>

                  </div>
                  <div className="ml-2 p-4">
                    <p ><span style={{ fontSize: "36px", fontWeight: "600", color: "#1abc9c" }}>.online</span> NPR 1,300 </p>

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

export default banner
