import style from './About.module.css';
import img1 from '../../assets/img/act.webp';
import img2 from '../../assets/img/trust.webp';
import img3 from '../../assets/img/care.webp';
import img4 from '../../assets/img/hand.webp';
import img5 from '../../assets/img/listen.webp';

import './About.css';
import OwlCarousel from "react-owl-carousel";
import {useRef, useState , useEffect} from "react";
import {useSelector} from "react-redux";
import ReactLoading from 'react-loading';
function About(){



    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    const [AboutItems , setServiceItems ] = useState([
        {
            img: img1,
            name: listRef.current.about_three_head,
            content:listRef.current.about_three_parag,
            class: style.item
        },
        {
            img: img2,
            name: listRef.current.about_two_head,
            content:listRef.current.about_two_parag,
            class:style.itemTwo
        },
        {
            img: img3,
            name: listRef.current.about_five_head,
            content:listRef.current.about_five_parag,
            class:style.item
        },
        {
            img: img4,
            name: listRef.current.about_one_head,
            content: listRef.current.about_one_parag,
            class:style.itemTwo
        },
        {
            img: img5,
            name: listRef.current.about_four_head,
            content:listRef.current.about_four_parag,
            class:style.item
        },

    ]);

    const [isChanged , setIsChanged] = useState(true);


    useEffect(() => {

        setIsChanged(false);

        setTimeout(() => {

        },400);


        setServiceItems([
            {
                img: img1,
                name: listRef.current.about_three_head,
                content:listRef.current.about_three_parag,
                class: style.item
            },
            {
                img: img2,
                name: listRef.current.about_two_head,
                content:listRef.current.about_two_parag,
                class:style.itemTwo
            },
            {
                img: img3,
                name: listRef.current.about_five_head,
                content:listRef.current.about_five_parag,
                class:style.item
            },
            {
                img: img4,
                name: listRef.current.about_one_head,
                content: listRef.current.about_one_parag,
                class:style.itemTwo
            },
            {
                img: img5,
                name: listRef.current.about_four_head,
                content:listRef.current.about_four_parag,
                class:style.item
            },

        ]);

        setTimeout(() => {
            setIsChanged(true);
        },400);

    }, [listRef.current]);

    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        autoplayTimeout: 2000,
        smartSpeed: 450,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            }
        }
    };
    return(
        <>
            <section id="about" className={`${style.About} py-5`}>

                <div className={`container text-center`}>
                    <h2>{listRef.current.how_we_work}</h2>
                    <div className={` py-5 d-none d-lg-block`}>
                        <div className={` ${style.inner}`}>
                            <div className={style.item}>
                                <img src={img1} alt="img" />

                                <h3>{listRef.current.about_three_head}</h3>
                                <p>{listRef.current.about_three_parag}</p>
                            </div>

                            <div className={style.itemTwo}>
                                <img src={img2} alt="img" />
                                <h3>{listRef.current.about_two_head}</h3>
                                <p>{listRef.current.about_two_parag}</p>
                            </div>

                            <div className={style.item}>
                                <img src={img3} alt="img" />

                                <h3>{listRef.current.about_five_head}</h3>
                                <p>{listRef.current.about_five_parag}</p>
                            </div>


                            <div className={style.itemTwo}>
                                <img src={img4} alt="img" />
                                <h3>{listRef.current.about_one_head}</h3>
                                <p>{listRef.current.about_one_parag}</p>
                            </div>

                            <div className={style.item}>
                                <img src={img5} alt="img" />
                                <h3>{listRef.current.about_four_head}</h3>
                                <p>{listRef.current.about_four_parag}</p>
                            </div>

                        </div>

                    </div>

                    <div className={`AboutTestimonoals d-lg-none d-block`} dir='ltr'>
                        {isChanged ?
                        <OwlCarousel className=" owl-carousel owl-theme " {...options}>

                            {AboutItems.map((about, index) => {
                                    return (
                                        <div key={index}  className={` ${about.class} item`} >
                                            <div className="d-flex justify-content-center">
                                                <img src={about.img} alt="img"  />
                                            </div>

                                            <h3>{about.name}</h3>
                                            <p>{about.content}</p>

                                        </div>
                                    )
                                }
                            )}
                        </OwlCarousel>
                            :
                            <div className='mt-5 d-flex justify-content-center align-items-center'>
                                <div className='mt-5 '>
                                    <ReactLoading type="spin" color="#0951FE"
                                                  height={100} width={50} />
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </section>


        </>

    )
}

export default About;