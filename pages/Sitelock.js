import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'

import Security from './components/Security'
import Feature from './components/Features'

import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"SiteLock Details"} />

            <Navbar />
            <Security name={"Site Lock"} basicprice={"Rs.1500/monthly"} proprice={"Rs.1600/monthly"} exclusiveprice={"Rs.1700/monthly"} caption={"SSl"} tittle1={"Basic"} tittle2={"Professional"} tittle3={"Premium"} tittle4={"Enterprise"} />

            <Feature />
            <Footer />




        </Fragment>
    )
}

export default Home
