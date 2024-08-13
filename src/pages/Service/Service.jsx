import style from './Service.module.css';
import serv from '../../assets/img/Service.png';
import {useRef, useState , useEffect} from "react";
import img1 from '../../assets/img/img1.webp';
import img2 from '../../assets/img/img2.webp';
import img3 from '../../assets/img/img3.webp';
import img4 from '../../assets/img/img4.webp';
import img5 from '../../assets/img/img5.webp';
import img6 from '../../assets/img/img6.webp';
import img7 from '../../assets/img/img7.webp';
import './Service.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {useSelector} from "react-redux";

import ReactLoading from 'react-loading';

function Service(){

    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    const [img , setImg] = useState(img1);
    const [name , setName] = useState(listRef.current.services_one_head);
    const [content , setContent] = useState( listRef.current.services_one_parag);




    const [ServiceItems , setServiceItems ] = useState([
        {
            icon: "fa-solid fa-desktop",
            name: listRef.current.services_one_head,
            img: img1,
            content:listRef.current.services_one_parag,
            isActive: true
        },
        {
            icon: "fa-solid fa-mobile-screen-button",
            name: listRef.current.services_app_head,
            img: img5,
            content:listRef.current.services_app_parag,
            isActive: false
        },
        {
            icon: "fa-solid fa-computer",
            name: listRef.current.services_three_head,
            img: img3,
            content:listRef.current.services_three_parag,
            isActive: false
        },
        {
            icon: "fa-brands fa-searchengin",
            name: listRef.current.services_two_head,
            img: img2,
            content: listRef.current.services_two_parag,
            isActive: false
        },
        {
            icon: "fa-brands fa-figma",
            name: listRef.current.services_four_head,
            img: img4,
            content:listRef.current.services_four_parag,
            isActive: false
        },
        {
            icon: "fa-solid fa-feather-pointed",
            name: listRef.current.services_five_head,
            img: img5,
            content:listRef.current.services_five_parag,
            isActive: false
        },
        {
            icon: "fa-solid fa-bullhorn",
            name: listRef.current.services_six_head,
            img: img6,
            content:listRef.current.services_six_parag,
            isActive: false
        },
        {
            icon: "fa-solid fa-pen",
            name: listRef.current.services_siven_head,
            img: img7,
            content:listRef.current.services_siven_parag,
            isActive: false
        },
    ]);


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
    const toggleActive = (index) => {
        const updatedItems = ServiceItems.map((item, i) => {
            if (i === index) {
                return { ...item, isActive: !item.isActive };
            }
            return { ...item, isActive: false };
        });

        setServiceItems(updatedItems);
    };



    const [isChanged , setIsChanged] = useState(true);
    //
    useEffect(() => {

        setIsChanged(false);

        setTimeout(() => {

        },400);



        setServiceItems([
            {
                icon: "fa-solid fa-desktop",
                name: listRef.current.services_one_head,
                img: img1,
                content:listRef.current.services_one_parag,
                isActive: true
            },
            {
                icon: "fa-solid fa-mobile-screen-button",
                name: listRef.current.services_app_head,
                img: img5,
                content:listRef.current.services_app_parag,
                isActive: false
            },
            {
                icon: "fa-solid fa-computer",
                name: listRef.current.services_three_head,
                img: img3,
                content:listRef.current.services_three_parag,
                isActive: false
            },
            {
                icon: "fa-brands fa-searchengin",

                name: listRef.current.services_two_head,
                img: img2,

                content: listRef.current.services_two_parag,
                isActive: false
            },
            {
                icon: "fa-brands fa-figma",
                name: listRef.current.services_four_head,
                img: img4,
                content:listRef.current.services_four_parag,
                isActive: false
            },
            {
                icon: "fa-solid fa-feather-pointed",
                name: listRef.current.services_five_head,
                img: img5,
                content:listRef.current.services_five_parag,
                isActive: false
            },
            {
                icon: "fa-solid fa-bullhorn",
                name: listRef.current.services_six_head,
                img: img6,
                content:listRef.current.services_six_parag,
                isActive: false
            },
            {
                icon: "fa-solid fa-pen",
                name: listRef.current.services_siven_head,
                img: img7,
                content:listRef.current.services_siven_parag,
                isActive: false
            },
        ]);

        setName(listRef.current.services_three_head);
        setContent(listRef.current.services_three_parag);


        setTimeout(() => {
            setIsChanged(true);
        },400);

    },[listRef.current]);


    return(
        <section id="services" className={`${style.Service} `}>

            <div className={`container text-center`}>
                <h2>{listRef.current.services}</h2>
                <div className={` py-5 d-none d-lg-block `}>
                    <div className={` row m-0`}>
                        <div className={` col-md-4 ${style.itemMain}`}>
                            <img className="mb-4 w-100" src={img} alt="img"/>
                            <h3>{name}</h3>
                            <p>{content}</p>
                        </div>
                        <div className="col-md-7 offset-md-1">
                            <div className="row">
                                { ServiceItems.map((item, index)=>{
                                    return(
                                        <div key={index} className={` col-lg-6 mb-4`} >
                                            <div
                                                className={`${style.itemSec} ${item.isActive ? style.active : ""}`}
                                                onClick={() => {
                                                    toggleActive(index);
                                                    setImg(item.img);
                                                    setName(item.name);
                                                    setContent(item.content);
                                                }}
                                            >

                                                <div className={style.iconItem}>
                                                    <i className={`${item.icon} fs-4`} ></i>
                                                </div>
                                                <h3 className={style.ItemH3}>{item.name}</h3>
                                            </div>

                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                    </div>
                </div >


                <div className={`ServiceTestimonoals d-lg-none d-block`} dir='ltr'>
                    {isChanged ?
                    <OwlCarousel className=" owl-carousel owl-theme " {...options}>

                            {ServiceItems.map((serv, index) => {
                                    return (
                                        <div key={index}  className={` ${style.itemMain} item`} >
                                            <img className="mb-4 w-100" src={serv.img} alt="img"/>
                                            <h3>{serv.name}</h3>
                                            <p>{serv.content}</p>
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

            <img  className={style.layout} src={serv} alt="layout"/>

        </section>
    )
}

export default Service;