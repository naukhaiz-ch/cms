import React from 'react'
import Footer from './components/Footer'
import Category from './components/home/Category'
import Cta from './components/home/Cta'
import DocPatient from './components/home/DocPatient'
import Hero from './components/home/Hero'
import Navbar from './components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Cta />
            <DocPatient />
            <Category />
            <Footer />

        </>
    )
}

export default Home
