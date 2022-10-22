import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import "./Footer.scss"

function Footer() {
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)

    function isValid(email) {
        return /\S+@\S+\.\S+/.test(email)
    }

    function handleChange(event) {
        if (!isValid(event.target.value)) {
            setIsError(true)
        } else {
            setIsError(false)
        }
        setEmail(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className="footer" id='footer'>
            <div className="footer__container">
                <div className="footer__top top-footer">
                    <motion.h2
                        className="top-footer__title"
                        initial={{ opacity: 0, y: -70 }}
                        whileInView={{ opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4, duration: 1 } }}
                    >
                        Subscribe to our
                        Newsletter
                    </motion.h2>
                    <motion.form className="top-footer__form" onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4, duration: 1 } }}
                    >
                        <div className={`top-footer__container-input ${isError ? "mail-error" : ""}`}>
                            <input value={email} onChange={handleChange} placeholder="Enter your mail here" type="text" className="top-footer__input" />
                        </div>
                        <button className="top-footer__btn button">Subscribe</button>
                    </motion.form>
                </div>
                <div className="footer__bottom bottom-footer">
                    <div className="bottom-footer__logo">
                        <Link to="home">Fitness</Link>
                        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div className="bottom-footer__links">
                        <h2 className='bottom-footer__title'>Links</h2>
                        <ul className='bottom-footer__list'>
                            <li><a href="/#" className='bottom-footer__link'>Overons</a></li>
                            <li><a href="/#" className='bottom-footer__link'>Social Media</a></li>
                            <li><a href="/#" className='bottom-footer__link'>Counters</a></li>
                            <li><a href="/#" className='bottom-footer__link'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="bottom-footer__links">
                        <h2 className='bottom-footer__title'>Company</h2>
                        <ul className='bottom-footer__list'>
                            <li><a href="/#" className='bottom-footer__link'>Terms & Conditions</a></li>
                            <li><a href="/#" className='bottom-footer__link'>Privacy Policy</a></li>
                            <li><a href="/#" className='bottom-footer__link'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="bottom-footer__links">
                        <h2 className='bottom-footer__title'>Get in touch</h2>
                        <ul className='bottom-footer__list'>
                            <li><a href="/#" className='bottom-footer__link'>Crechterwoord K12 182 DK Alknjkcb  </a></li>
                            <li><a href="/#" className='bottom-footer__link'>085-132567</a></li>
                            <li><a href="/#" className='bottom-footer__link'>info@lobar.net</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyright">
                    © 2021 Fitness.co . All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer