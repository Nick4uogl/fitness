import React from 'react'
import AccordionContent from './AccordionContent'
import { motion } from 'framer-motion'
import "./How.scss"

const textVariants = {
    offscreen: {
        x: -100
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1
        }
    }
}

function How() {
    return (
        <section className="how">
            <div className="how__container">
                <div className="how__left">
                    <motion.div className="how__title title"
                        variants={textVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                    >
                        <h2 className="title__header">How it Works?</h2>
                        <div className="title__subtitle">Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</div>
                    </motion.div>
                    <div className="how__links">
                        <motion.a href="/#" className="how__btn1 button"
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.1 } }}
                        >Create Account</motion.a>
                        <motion.a href="/#" className="how__btn2 button"
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.1 } }}
                        >Need Help?</motion.a>
                    </div>
                </div>
                <div className="how__right">
                    <AccordionContent
                        title="Create Account on Fitness.co"
                        content="Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common."
                    />
                    <AccordionContent
                        title="View Daily Task Tutorials"
                        content="Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common."
                    />
                    <AccordionContent
                        title="Practice on your own"
                        content="Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common."
                    />
                </div>
            </div>
        </section >
    )
}

export default How