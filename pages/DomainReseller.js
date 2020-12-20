import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'
import Table from './components/Table'
import Feature from './components/Features'

import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"Reseller Package"} />

            <Navbar />
            <Table packagename={"Reseller Hosting  Package"}
                cardtittle1={"Start Up"}
                cardtittle2={"Mega"}
                cardtittle3={"Unlimited"}
                url1={"/Startup"}
                url2={"/Mega"}
                url3={"/Unlimit"}
                padding={"20rem"}



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
