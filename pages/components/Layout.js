import React, { Fragment } from 'react'

import Head from "next/head"


function Layout(props) {
    console.log(props.tittle)
    return (
        <Fragment>
            <Head>
                <title>{props.tittle}</title>
                <link rel="shortcut icon" type="image/x-icon" href="/img/fav.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />





                <script src="js/vendor/modernizr-3.5.0.min.js"></script>
                <script src="js/vendor/jquery-1.12.4.min.js"></script>
                {/* <script src="js/popper.min.js"></script> */}
                <script src="js/bootstrap.min.js"></script>
                <script src="js/owl.carousel.min.js"></script>
                <script src="js/isotope.pkgd.min.js"></script>
                <script src="js/ajax-form.js"></script>
                <script src="js/waypoints.min.js"></script>
                <script src="js/jquery.counterup.min.js"></script>
                <script src="js/imagesloaded.pkgd.min.js"></script>
                <script src="js/scrollIt.js"></script>
                {/* <script src="js/jquery.scrollUp.min.js"></script> */}
                <script src="js/wow.min.js"></script>
                {/* <script src="js/nice-select.min.js"></script> */}
                <script src="js/jquery.slicknav.min.js"></script>
                {/* <script src="js/jquery.magnific-popup.min.js"></script>
                <script src="js/plugins.js"></script>
                <script src="js/gijgo.min.js"></script> */}


                {/* <script src="js/contact.js"></script> */}
                <script src="js/jquery.ajaxchimp.min.js"></script>
                <script src="js/jquery.form.js"></script>
                <script src="js/jquery.validate.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
                    integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw=="
                    crossorigin="anonymous"
                ></script>


                <script src="js/main.js"></script>

                <script src="js/detail.js"></script>

            </Head>



        </Fragment>
    )
}

export default Layout
