import React from 'react'
import { motion } from 'framer-motion'
import "./Blog.scss"
import blog1 from "../../img/blog/blog1.webp"
import blog2 from "../../img/blog/blog2.webp"

const titleVariants = {
    offscreen: {
        x: -100,
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


const blogVariants = {
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

function Blog() {
    return (
        <section className="blog">
            <div className="blog__container">
                <motion.h2
                    className="blog__title"
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                >
                    Our Regurlar Updated Blog and media
                </motion.h2>
                <div className="blog__row">
                    <motion.a
                        href='/#'
                        className="blog__item item"
                        variants={blogVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={1}
                    >
                        <div className="item__body">
                            <img src={blog1} alt="" />
                            <div className="item__labels labels-item">
                                <div className="labels-item__new">
                                    New !
                                </div>
                            </div>
                            <h2 className="item__title">Supported me sweetness behaviour shameless excellent so arranging.</h2>
                            <p className="item__content">Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.</p>
                        </div>
                    </motion.a>
                    <motion.a className="blog__item item"
                        href='/#'
                        variants={blogVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={20}
                    >
                        <div className="item__body">
                            <img src={blog2} alt="" />
                            <div className="item__labels labels-item">
                            </div>
                            <div className="item__labels labels-item">
                            </div>
                            <h2 className="item__title">Do believing oh disposing to supported allowance we.</h2>
                            <p className="item__content">Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.
                            </p>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default Blog