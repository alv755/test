import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'
import PackageDetail from './components/PackageDetail'
import Picture from './components/Picture'
import Feature from './components/Features'

import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"Package Details"} />

            <Navbar />
            <PackageDetail 
            name={"Economic"} 
            basicprice={"Rs.1200/monthly"} 
            proprice={"Rs.1300/monthly"} 
            exclusiveprice={"Rs.1500/monthly"} 
            






            />

            <Feature />
            <Footer />




        </Fragment>
    )
}

export default Home
