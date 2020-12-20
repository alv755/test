import React, { Fragment } from 'react'
import Layout from './components/Layout'

import Navbar from './components/Navbar'

import Banner from './components/Banner'

import Package from './components/Package'

import Feature from './components/Features'
import Question from './components/Question'
import Footer from './components/Footer'

import Cards from "./components/Card"


function Home() {
    return (
        <Fragment>
            <Layout tittle={"Home"} />

            <Navbar />

            <Banner />

            <Package />

            <Feature />

            <Cards />

            <Question />

            <Footer />







        </Fragment>
    )
}

export default Home
