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
                name={"StartUp"}
                basicprice={"Rs.1200/monthly"}
                proprice={"Rs.1300/monthly"}
                exclusiveprice={"Rs.1500/monthly"}


                tittle1={"Silver"}
                tittle2={"Gold"}

                panel1={"5 separate cPanel accounts with WHM"}
                storage1={"10 GB NVMe SSD Sorage"}

                access1={"SSH access in all cPanel accounts"}
                bandwidth1={"100 GB Monthly Bandwidth"}
                ssl={"Free SSL certificate"}
                email={"Unlimited Email, FTP accounts , Subdomains, Databases etc"}
                processor={"Processor"}
                backups={"Free Weekly and Monthly Backups"}
                panel2={"10 separate cPanel accounts with WHM"}
                storage2={"25 GB NVMe SSD Sorage"}

                access2={"SSH access in all cPanel accounts"}
                bandwidth2={"250 GB Monthly Bandwidth"}











            />

            <Feature />
            <Footer />




        </Fragment>
    )
}

export default Home
