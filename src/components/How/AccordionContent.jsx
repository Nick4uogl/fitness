import React, { useState } from 'react'
import { motion } from "framer-motion"

const accordionVariants = {
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

function AccordionContent({ title, content }) {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(prev => !prev)
    }

    return (
        <motion.div className={`accordion ${toggle ? "active" : ""}`}
            variants={accordionVariants}
            initial="offscreen"
            whileInView="onscreen"
            animate={toggle ? { maxHeight: "200px" } : { maxHeight: "100px" }}
            transition={{ duration: 0.3 }}
        >
            <div className="accordion__header">
                <span onClick={handleToggle}>{title}</span>
                <button onClick={handleToggle} className='accordion__plus'>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <motion.div
                animate={toggle ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                className="accordion__content"
            >
                {content}
            </motion.div>
        </motion.div>
    )
}

export default AccordionContent