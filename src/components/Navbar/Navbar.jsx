import React, { useEffect, useRef, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import "./Navbar.scss"


const sidebar = {
    open: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.1
        }
    },
    closed: {
        x: "-100%",
        transition: {
            type: "spring",
            bounce: 0.1,
            delay: 0.3
        }
    }
};

function Navbar() {
    const ref = useRef()
    const [toggle, setToggle] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const isBurger = useMediaQuery({ query: '(max-width: 767.98px)' })

    const toggleClick = () => {
        setToggle((prevState) => !prevState)
    }

    useEffect(() => {
        const handleScroll = event => {
            window.scrollY >= 50 ? setIsScroll(true) : setIsScroll(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <nav className={`nav ${isScroll ? "scroll-nav" : ""}`} ref={ref}>
            <div className="nav__container">
                <Link to='/' onClick={toggleHome} className="nav__logo">Fitness</Link>
                <motion.ul className={`nav__list ${toggle ? "active" : ""}`}
                    variants={sidebar}
                    initial={false}
                    animate={isBurger ? (toggle ? "open" : "closed") : {}}
                >
                    <motion.li
                        animate={isBurger ? (toggle ? { y: 0, opacity: 1, transition: { delay: 0.2, bounce: 0.2 } } : { y: 50, opacity: 0, transition: { delay: 0.15, bounce: 0.2 } }) : {}}
                        exit={{ opacity: 0 }}
                    >
                        <Link
                            to="home"
                            className="nav__link"
                            duration={500}
                            onClick={() => setToggle(false)}
                        >
                            Home
                        </Link>
                    </motion.li>
                    <motion.li
                        animate={isBurger ? (toggle ? { y: 0, opacity: 1, transition: { delay: 0.3, bounce: 0.2 } } : { y: 50, opacity: 0, transition: { delay: 0.1, bounce: 0.2 } }) : {}}
                    >
                        <Link
                            to="about"
                            className="nav__link"
                            duration={500}
                            offset={-70}
                            onClick={() => setToggle(false)}
                        >
                            About
                        </Link>
                    </motion.li>
                    <motion.li
                        animate={isBurger ? (toggle ? { y: 0, opacity: 1, transition: { delay: 0.4, bounce: 0.2 } } : { y: 50, opacity: 0, transition: { delay: 0.07, bounce: 0.2 } }) : {}}
                    >
                        <Link
                            to="reviews"
                            className="nav__link"
                            duration={500}
                            onClick={() => setToggle(false)}
                        >
                            Testimonials
                        </Link>
                    </motion.li>
                    <motion.li
                        animate={isBurger ? (toggle ? { y: 0, opacity: 1, transition: { delay: 0.5, bounce: 0.2 } } : { y: 50, opacity: 0, transition: { delay: 0.05, bounce: 0.2 } }) : {}}
                    >
                        <Link
                            to="footer"
                            className="nav__link"
                            duration={500}
                            onClick={() => setToggle(false)}
                        >
                            Contact
                        </Link>
                    </motion.li>
                    {isMobile &&
                        <motion.li
                            animate={(toggle ? { y: 0, opacity: 1, transition: { delay: 0.6, bounce: 0.2 } } : { y: 50, opacity: 0, transition: { delay: 0.04, bounce: 0.2 } })}
                        ><a href="/#" className="nav__link">Sign in</a></motion.li>
                    }
                </motion.ul>
                <div className="nav__authorization authorization">
                    <a href='/#' className="authorization__in">Sign in</a>
                    <motion.a href='/#' className="authorization__up"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 },
                        }}
                    >Sign up
                    </motion.a>
                </div>
                <div className={`burger ${toggle ? "active" : ""}`} onClick={toggleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav >
    )
}

export default Navbar