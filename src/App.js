import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Partners from './components/Partners/Partners.jsx'
import About from './components/About/About.jsx'
import How from './components/How/How.jsx'
import Blog from './components/Blog/Blog.jsx'
import Faq from './components/Faq/Faq.jsx'
import Reviews from './components/Reviews/Reviews.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Partners />
            <About />
            <How />
            <Blog />
            <Faq />
            <Reviews />
            <Footer />
        </div>
    )
}

export default App