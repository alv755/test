import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'

import ContactBanner from './components/ContactBanner'



import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"Contact"} />

            <Navbar />

            <ContactBanner />

            <Footer />




        </Fragment>
    )
}

export default Home
