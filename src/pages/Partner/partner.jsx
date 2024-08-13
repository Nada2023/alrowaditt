import React from 'react';
import Slider from 'react-slick';
import style from './partner.module.css';
import img1 from '../../assets/img/fawry-logo.png';
import img2 from '../../assets/img/rowad.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partner() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        dots: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className={`${style.partner} py-5`}>
            <div className={`${style.inner} py-5`}>
                <h2>Our Partners</h2>
                <div className="container text-center">
                    <Slider {...settings}>
                        <div className={style.slideContent}>
                            <img src={img1} alt="Client 1" className={style.imgPartner} />
                        </div>
                        <div className={style.slideContent}>
                            <img src={img2} alt="Client 2" className={style.imgPartner} />
                        </div>


                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Partner;
