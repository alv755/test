import React, { Fragment } from 'react'
import Layout from './components/layout'

import Navbar from './components/Navbar'
import ResellerPackage from './components/ResellerPackage'

import Feature from './components/Features'

import Footer from './components/Footer'






function Home() {
    return (
        <Fragment>
            <Layout tittle={"Package Details"} />

            <Navbar />
            <ResellerPackage
                name={"Mega"}
                basicprice={"Rs.1200/monthly"}
                proprice={"Rs.1300/monthly"}
                exclusiveprice={"Rs.1500/monthly"}



                tittle1={"Silver"}
                tittle2={"Gold"}
                panel1={"20 separate cPanel accounts with WHM"}
                storage1={"50 GB NVMe SSD Sorage"}

                access1={"SSH access in all cPanel accounts"}
                bandwidth1={"500 GB Monthly Bandwidth"}
                ssl={"Free SSL certificate"}
                email={"Unlimited Email, FTP accounts , Subdomains, Databases etc"}
                processor={"Processor"}
                backups={"Free Weekly and Monthly Backups"}
                panel2={"50 separate cPanel accounts with WHM"}
                storage2={"120 GB NVMe SSD Sorage"}

                access2={"SSH access in all cPanel accounts"}
                bandwidth2={"1200 GB Monthly Bandwidth"}









            />

            <Feature />
            <Footer />




        </Fragment>
    )
}

export default Home
