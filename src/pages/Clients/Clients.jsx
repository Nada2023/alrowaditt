import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import style from './Clients.module.css';
import img1 from '../../assets/img/value.webp';
import img2 from '../../assets/img/jad.webp';
import img3 from '../../assets/img/rowad.webp';
import img4 from '../../assets/img/kaizen.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Clients() {
    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
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
        <section className={`${style.Clients} py-5`}>
            <div className={`${style.inner} py-5`}>
                <div className="container text-center">
                    <h2>{listRef.current.our_clients}</h2>
                    <Slider {...settings}>
                        <div className={style.slideContent}>
                            <img src={img1} alt="Client 1" className={style.imgClient} />
                            <h3>{listRef.current.value}</h3>
                        </div>
                        <div className={style.slideContent}>
                            <img src={img2} alt="Client 2" className={style.imgClient} />
                            <h3>{listRef.current.jad}</h3>
                        </div>
                        <div className={style.slideContent}>
                            <img src={img3} alt="Client 3" className={style.imgClient} />
                            <h3>{listRef.current.alrowad}</h3>
                        </div>
                        <div className={style.slideContent}>
                            <img src={img4} alt="Client 4" className={style.imgClient} />
                            <h3>{listRef.current.kaizen}</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Clients;
