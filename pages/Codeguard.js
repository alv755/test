import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'

import Security from './components/Security'
import Feature from './components/Features'

import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"SSL Details"} />

            <Navbar />
            <Security name={"Code Guard"} basicprice={"Rs.1500/monthly"} proprice={"Rs.1600/monthly"} exclusiveprice={"Rs.1700/monthly"} caption={"SSl"} tittle1={"Professional"} tittle2={"Basic"} tittle3={"Enterprise"} tittle4={"Premium"} />

            <Feature />
            <Footer />




        </Fragment>
    )
}

export default Home
