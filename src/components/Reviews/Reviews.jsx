import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'
import 'swiper/css'
import "swiper/css/pagination"
import "./Reviews.scss"
import boy from "../../img/boy.webp"

const leftVariants = {
    offscreen: {
        x: -80,
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


function Reviews() {
    const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' })
    console.log(isMobile)

    return (
        <div className="reviews" id='reviews'>
            <div className="reviews__container">
                <motion.div className="reviews__title title"
                    initial={{
                        y: -80,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1
                        }
                    }}
                >
                    <h2 className="title__header">What Customes Say</h2>
                    <p className="title__subtitle">Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                </motion.div>
                <div className="reviews__row">
                    <motion.div className="reviews__left"
                        variants={leftVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                    >
                        <Swiper className="reviews__slider"
                            spaceBetween={20}
                            modules={[Pagination]}
                            slidesPerView={1}
                            pagination={{
                                el: '.pagination',
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return `<span class="pagination__bullet swiper-pagination-bullet">${index}</span>`;
                                }
                            }}
                        >
                            <SwiperSlide className="reviews__review review">
                                <div className="review__left">
                                    <h2 className="review__title">Great Service!!</h2>
                                    <p className="review__description">“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”</p>
                                    <svg width="145" height="25" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 0L15.8063 7.94928L24.3882 8.63729L17.8497 14.2382L19.8473 22.6127L12.5 18.125L5.15268 22.6127L7.15031 14.2382L0.611794 8.63729L9.19371 7.94928L12.5 0Z" fill="#FDBC64" />
                                        <path d="M42.5 0L45.8063 7.94928L54.3882 8.63729L47.8497 14.2382L49.8473 22.6127L42.5 18.125L35.1527 22.6127L37.1503 14.2382L30.6118 8.63729L39.1937 7.94928L42.5 0Z" fill="#FDBC64" />
                                        <path d="M72.5 0L75.8063 7.94928L84.3882 8.63729L77.8497 14.2382L79.8473 22.6127L72.5 18.125L65.1527 22.6127L67.1503 14.2382L60.6118 8.63729L69.1937 7.94928L72.5 0Z" fill="#FDBC64" />
                                        <path d="M102.5 0L105.806 7.94928L114.388 8.63729L107.85 14.2382L109.847 22.6127L102.5 18.125L95.1527 22.6127L97.1503 14.2382L90.6118 8.63729L99.1937 7.94928L102.5 0Z" fill="#FDBC64" />
                                        <path d="M132.5 0L135.806 7.94928L144.388 8.63729L137.85 14.2382L139.847 22.6127L132.5 18.125L125.153 22.6127L127.15 14.2382L120.612 8.63729L129.194 7.94928L132.5 0Z" fill="#FDBC64" />
                                    </svg>
                                    <p className="review__author">Dragos Gontariu</p>
                                    <p className="review__position-author">Mareting Manager</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="reviews__review review">
                                <div className="review__left">
                                    <h2 className="review__title">Great Service!!</h2>
                                    <p className="review__description">“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”</p>
                                    <svg width="145" height="25" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 0L15.8063 7.94928L24.3882 8.63729L17.8497 14.2382L19.8473 22.6127L12.5 18.125L5.15268 22.6127L7.15031 14.2382L0.611794 8.63729L9.19371 7.94928L12.5 0Z" fill="#FDBC64" />
                                        <path d="M42.5 0L45.8063 7.94928L54.3882 8.63729L47.8497 14.2382L49.8473 22.6127L42.5 18.125L35.1527 22.6127L37.1503 14.2382L30.6118 8.63729L39.1937 7.94928L42.5 0Z" fill="#FDBC64" />
                                        <path d="M72.5 0L75.8063 7.94928L84.3882 8.63729L77.8497 14.2382L79.8473 22.6127L72.5 18.125L65.1527 22.6127L67.1503 14.2382L60.6118 8.63729L69.1937 7.94928L72.5 0Z" fill="#FDBC64" />
                                        <path d="M102.5 0L105.806 7.94928L114.388 8.63729L107.85 14.2382L109.847 22.6127L102.5 18.125L95.1527 22.6127L97.1503 14.2382L90.6118 8.63729L99.1937 7.94928L102.5 0Z" fill="#FDBC64" />
                                        <path d="M132.5 0L135.806 7.94928L144.388 8.63729L137.85 14.2382L139.847 22.6127L132.5 18.125L125.153 22.6127L127.15 14.2382L120.612 8.63729L129.194 7.94928L132.5 0Z" fill="#FDBC64" />
                                    </svg>
                                    <p className="review__author">Dragos Gontariu</p>
                                    <p className="review__position-author">Mareting Manager</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="reviews__review review">
                                <div className="review__left">
                                    <h2 className="review__title">Great Service!!</h2>
                                    <p className="review__description">“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”</p>
                                    <svg width="145" height="25" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 0L15.8063 7.94928L24.3882 8.63729L17.8497 14.2382L19.8473 22.6127L12.5 18.125L5.15268 22.6127L7.15031 14.2382L0.611794 8.63729L9.19371 7.94928L12.5 0Z" fill="#FDBC64" />
                                        <path d="M42.5 0L45.8063 7.94928L54.3882 8.63729L47.8497 14.2382L49.8473 22.6127L42.5 18.125L35.1527 22.6127L37.1503 14.2382L30.6118 8.63729L39.1937 7.94928L42.5 0Z" fill="#FDBC64" />
                                        <path d="M72.5 0L75.8063 7.94928L84.3882 8.63729L77.8497 14.2382L79.8473 22.6127L72.5 18.125L65.1527 22.6127L67.1503 14.2382L60.6118 8.63729L69.1937 7.94928L72.5 0Z" fill="#FDBC64" />
                                        <path d="M102.5 0L105.806 7.94928L114.388 8.63729L107.85 14.2382L109.847 22.6127L102.5 18.125L95.1527 22.6127L97.1503 14.2382L90.6118 8.63729L99.1937 7.94928L102.5 0Z" fill="#FDBC64" />
                                        <path d="M132.5 0L135.806 7.94928L144.388 8.63729L137.85 14.2382L139.847 22.6127L132.5 18.125L125.153 22.6127L127.15 14.2382L120.612 8.63729L129.194 7.94928L132.5 0Z" fill="#FDBC64" />
                                    </svg>
                                    <p className="review__author">Dragos Gontariu</p>
                                    <p className="review__position-author">Mareting Manager</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="pagination"></div>
                    </motion.div>
                    <div className="reviews__right">
                        <div className="reviews__img">
                            <motion.img src={boy} alt="review author"
                                initial={{ x: isMobile ? -80 : 80, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1 } }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews