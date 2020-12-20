import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'

import AboutBanner from './components/AboutBanner'



import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"About"} />

            <Navbar />

            <AboutBanner />

            <Footer />




        </Fragment>
    )
}

export default Home
