import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'
import Picture from './components/Picture'
import Feature from './components/Features'

import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"Package"} />

            <Navbar />
            <Picture packagename={"Web Hosting  Package"}
                cardtittle1={"Economic"}
                cardtittle2={"Unlimited"}
                cardtittle3={"Business"}
                url1={"/Economic"}
                url2={"/Unlimited"}
                url3={"/Business"}

                site={"1 site"}
                visit={"100 k Visits Per Month"}

                backups={"1 GB BackUps"}
                certificate={"Free SSL certificate"}
                support={"Quick SUpport"}








            />
            <Feature />
            <Footer />




        </Fragment>
    )
}

export default Home
