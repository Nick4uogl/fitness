import React from 'react'
import { motion } from 'framer-motion'
import "./Faq.scss"

const titleVariants = {
    offscreen: {
        y: -50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
}


const cardVariants = {
    offscreen: {
        y: -70,
        opacity: 0
    },
    onscreen: (i) => {
        const delay = 0.2 + i * 0.01;
        return {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.7,
                delay
            }
        }
    }
}

function Faq() {
    return (
        <div className="faq">
            <motion.div className="faq__text"
                variants={titleVariants}
                initial="offscreen"
                whileInView="onscreen"
                custom={1}
            >
                <h2 className="faq__title">
                    FAQs
                </h2>
                <p className="faq__subtitle">
                    Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
                </p>
            </motion.div>
            <div className="faq__faqs faqs">
                <div className="faqs__container">
                    <motion.div
                        className="faqs__card"
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={1}
                    >
                        <h2 className="faqs__question">Can I use an Oyster card?</h2>
                        <p className="faqs__answer">
                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                        </p>
                    </motion.div>
                    <motion.div
                        className="faqs__card"
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={2}
                    >
                        <h2 className="faqs__question">Can I use a Freedom Pass?</h2>
                        <p className="faqs__answer">
                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                        </p>
                    </motion.div>
                    <motion.div
                        className="faqs__card"
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={3}
                    >
                        <h2 className="faqs__question">Can I use the offers for a large group?</h2>
                        <p className="faqs__answer">
                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                        </p>
                    </motion.div>
                    <motion.div
                        className="faqs__card"
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={4}
                    >
                        <h2 className="faqs__question">When do you renew your offers?</h2>
                        <p className="faqs__answer">
                            Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Faq