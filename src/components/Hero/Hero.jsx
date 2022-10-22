import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "./Hero.scss"
import girl from '../../img/girl.png'

function Hero() {
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

    const textVariants = {
        offscreen: {
            y: -200
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    }

    const girlVariants = {
        offscreen: {
            y: 200
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    }

    return (
        <section className='hero' id='home'>
            <div className="hero__container">
                <motion.div className="hero__text"
                    variants={textVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                >
                    <h2 className="hero__title title-hero">
                        <div className='title-hero__text'>Health</div>
                        <div className='title-hero__text'>
                            <svg width="94" height="103" viewBox="0 0 94 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.4906 100.426L64.639 100.587H64.8578H91H92.1586L91.3638 99.7436L70.0456 77.1337L83.3227 63.6732L83.4667 63.5272V63.3221V37.9012V36.6727L82.6088 37.5521L57.2385 63.5571L45.0486 50.6773L47.7252 48.6915C47.7256 48.6912 47.7261 48.6909 47.7265 48.6906C56.8816 41.9817 61.5454 34.3774 61.5454 25.8742C61.5454 18.4486 58.8566 12.3424 53.4809 7.5969C48.2018 2.85636 41.4964 0.5 33.4054 0.5C26.0268 0.5 19.5134 2.86446 13.8858 7.58723L13.8858 7.58722L13.8827 7.58986C8.31374 12.3414 5.53782 18.7276 5.53782 26.6942C5.53782 33.3402 8.98643 40.3802 15.7431 47.8041C15.7433 47.8043 15.7435 47.8046 15.7437 47.8047L16.7322 48.8963C11.3011 52.9058 7.22764 56.8902 4.53495 60.8544L4.53354 60.8565C1.83651 64.8706 0.5 69.7098 0.5 75.3491C0.5 82.5979 3.23718 88.9635 8.67906 94.426L8.67901 94.426L8.68509 94.4319C14.2425 99.8244 21.6385 102.5 30.8185 102.5C40.3396 102.5 48.7831 98.7789 56.1326 91.381L64.4906 100.426ZM28.7986 62.6325L28.8079 62.6258L28.8168 62.6185L29.1348 62.3632L43.4729 77.8021C39.5526 81.7912 35.5177 83.7327 31.3631 83.7327C28.4939 83.7327 26.1292 82.7788 24.2327 80.8771C22.413 78.9618 21.5151 76.7614 21.5151 74.2558C21.5151 70.1012 23.8783 66.2244 28.7986 62.6325ZM30.5018 35.0985L30.5013 35.0979C27.2651 31.6691 25.736 28.6446 25.736 26.0108C25.736 23.3713 26.4783 21.4783 27.8822 20.2349L27.8836 20.2337C29.4222 18.8608 31.254 18.1739 33.4054 18.1739C35.6355 18.1739 37.5041 18.943 39.0422 20.4869L39.0472 20.4919L39.0524 20.4968C40.5854 21.9501 41.3472 23.7317 41.3472 25.8742C41.3472 29.1266 39.6095 32.0901 35.9711 34.7631C35.9703 34.7637 35.9696 34.7642 35.9688 34.7648L32.5166 37.2399L30.5018 35.0985Z" stroke="#313131" />
                            </svg>

                            Fitness
                        </div>
                    </h2>
                    <p className="hero__label">Always get adieus nature day course for common.</p>
                    <p className="hero__description">Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                    <form className="hero__form" onSubmit={handleSubmit}>
                        <input className={`hero__email ${isError ? "error" : ""}`} value={email} onChange={handleChange} type="text" placeholder='Enter your email to get started' />
                        <button className="hero__btn">Get Started</button>
                    </form>
                </motion.div>
                <div className="hero__img">
                    <div className='lines'>
                        <svg className='lines__1' width="568" height="318" viewBox="0 0 568 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 160.31C43.5 74.6432 155.4 -69.1902 263 40.8098C397.5 178.31 296.5 247.81 263 222.31C229.5 196.81 189.5 13.8099 330.5 40.8098C443.3 62.4098 535.167 234.476 567 317.81" stroke="black" strokeDasharray="12 12" />
                        </svg>
                        <svg className='lines__2' width="830" height="812" viewBox="0 0 830 812" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 811C56.5 659.167 194.4 378.6 302 471C436.5 586.5 399 787 322.5 760C246 733 198 583.5 475.5 471C697.5 381 804 120.167 829.5 1" stroke="black" strokeDasharray="12 12" />
                        </svg>
                    </div>
                    <motion.img
                        variants={girlVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        src={girl} alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero