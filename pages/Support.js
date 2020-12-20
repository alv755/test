import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'

import SupportBanner from './components/SupportBanner'




import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"Support"} />

            <Navbar />

            <SupportBanner />


            <Footer />




        </Fragment>
    )
}

export default Home
