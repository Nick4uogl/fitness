import React from 'react'
import "./Partners.scss"
import { motion } from 'framer-motion'
import partner1 from "../../img/partners/partner1.png"
import partner2 from "../../img/partners/partner2.png"
import partner3 from "../../img/partners/partner3.png"
import partner4 from "../../img/partners/partner4.png"
import partner5 from "../../img/partners/partner5.png"

const titleVariants = {
    offscreen: {
        x: -200,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}

const partnersVariants = {
    offscreen: {
        y: -60,
        opacity: 0
    },
    onscreen: (i) => {
        const delay = 0.3 + i * 0.01;
        return {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
                delay
            }
        }
    }
}

function Partners() {
    return (
        <section className='partners'>
            <div className="partners__container">
                <motion.div
                    className="partners__title title"
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                >
                    <h2 className="title__header">Our Partners</h2>
                    <p className="title__subtitle">Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                </motion.div>
                <motion.div transition={{ delayChildren: 1 }} className="partners__logoes logoes">
                    <motion.div custom={1} variants={partnersVariants} initial="offscreen" whileInView="onscreen" className="logoes__item">
                        <img src={partner1} alt="" />
                    </motion.div>
                    <motion.div custom={2} variants={partnersVariants} initial="offscreen" whileInView="onscreen" className="logoes__item">
                        <img src={partner2} alt="" />
                    </motion.div>
                    <motion.div custom={3} variants={partnersVariants} initial="offscreen" whileInView="onscreen" className="logoes__item">
                        <img src={partner3} alt="" />
                    </motion.div>
                    <motion.div custom={4} variants={partnersVariants} initial="offscreen" whileInView="onscreen" className="logoes__item">
                        <img src={partner4} alt="" />
                    </motion.div>
                    <motion.div custom={5} variants={partnersVariants} initial="offscreen" whileInView="onscreen" className="logoes__item">
                        <img src={partner5} alt="" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Partners