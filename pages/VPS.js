import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'
import VpsPackage from './components/VpsPackage'

import Feature from './components/Features'

import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"Package Details"} />

            <Navbar />
            <VpsPackage
                name={"Vps"}
                price1={"Rs.999/monthly"}
                price2={"Rs.1999/monthly"}
                price3={"Rs.2999/monthly"}
                price4={"Rs.3999/monthly"}

                price5={"Rs.7999/monthly"}
                price6={"Rs.15999/monthly"}







            />

            <Feature />
            <Footer />




        </Fragment>
    )
}

export default Home
