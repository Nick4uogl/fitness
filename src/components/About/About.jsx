import React, { useState, useEffect } from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import girl2 from "../../img/girl2.png"
import girl3 from "../../img/girl3.png"

const variants = {
    offscreen: (i) => {
        return {
            ...i,
            opacity: 0
        }
    },
    onscreen: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1
        }
    }
}

function About() {
    const [isTablet, setIsTablet] = useState(window.innerWidth < 850 ? true : false)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 850) {
                setIsTablet(true)
            } else {
                setIsTablet(false)
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section className='about' id='about'>
            <div className="about__container">
                <motion.div
                    variants={variants}
                    custom={{ y: -50 }}
                    initial="offscreen"
                    whileInView="onscreen"
                    className="about__title title"
                >
                    <h2 className="title__header">About Us</h2>
                    <p className="title__subtitle">Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                </motion.div>
                <div className="about__row">
                    <div className="about__us us">
                        <div className="us__img">
                            <motion.img
                                src={girl2} alt=""
                                variants={variants}
                                custom={{ x: -100 }}
                                initial="offscreen"
                                whileInView="onscreen"
                            />
                        </div>
                        <motion.div className='us__bottom'
                            variants={variants}
                            custom={{ x: -100 }}
                            initial="offscreen"
                            whileInView="onscreen"
                        >
                            <p className="us__text">
                                Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
                            </p>
                            <p className="us__text">
                                And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
                            </p>
                            <p className="us__text">
                                Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment settling outweigh. Worse linen an of civil jokes leave offer. Parties all clothes removal cheered calling prudent her. And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help. Latter person am secure of estate genius at.
                            </p>
                        </motion.div>
                    </div>
                    <div className="about__what what">
                        <motion.div
                            className="what__title title"
                            variants={variants}
                            custom={isTablet ? { y: -50 } : { x: 100 }}
                            initial="offscreen"
                            whileInView="onscreen"
                        >
                            <h2 className="title__header">What we do?</h2>
                            <p className="title__subtitle">Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                        </motion.div>
                        <div className="what__img">
                            <motion.img src={girl3} alt=""
                                variants={variants}
                                custom={isTablet ? { x: -100 } : { x: 100 }}
                                initial="offscreen"
                                whileInView="onscreen"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About