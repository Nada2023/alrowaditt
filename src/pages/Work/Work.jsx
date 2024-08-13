import style from './Work.module.css';
import "./Work.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { useState ,useEffect  , useRef} from 'react';
import ReactLoading from 'react-loading';
import OwlCarousel from 'react-owl-carousel';
import value from '../../assets/img/value/value.png';
import jad from '../../assets/img/jad-card.png';
import elbarka from '../../assets/img/baraka.png';
import edu from '../../assets/img/edu.webp';
import Modal from 'react-bootstrap/Modal';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import value1 from '../../assets/img/value/1.webp';
import value2 from '../../assets/img/value/2.webp';
import value3 from '../../assets/img/value/3.webp';
import value4 from '../../assets/img/value/4.webp';
import value5 from '../../assets/img/value/5.webp';
import ASMFS from '../../assets/img/ASMFS-mockup.png';
import ASMFS2 from '../../assets/img/ASMFS-mockup2.png';
import alrowadSchool from '../../assets/img/مدرسة-الرواد-mockup-الجمعية.png';
import sana from '../../assets/img/sana.png';
import mantary from '../../assets/img/مانتاراي-mockup.png';

function Work(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [works, setWorks] = useState([]);

    const [isChanged , setIsChanged] = useState(true);

    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,

        autoplayTimeout: 3000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1400: {
                items: 3
            }
        }
    };

    const optionsForOne = {
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
            800: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    };

    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    const [imgs, setImgs] = useState([]);
    const [services, setServices] = useState([]);
    const [icons, seticons] = useState([]);
    const [about, setAbout] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {

        setIsChanged(false);

        setTimeout(() => {

        },400);

        setWorks([
            {
                type: `${listRef.current.web_design} / ${listRef.current.Mobile_app}`  ,
                name: listRef.current.we_v,
                src: value,
                info:{
                    imgs:[value1,value2,value3,value4,value5],
                    about:listRef.current.value_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                        listRef.current.Mobile_application_development
                        ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }

            },
            {
                type: listRef.current.web_design,
                name: listRef.current.Jad_name,
                src: jad,
                info:{
                    imgs:[jad],
                    about:listRef.current.jad_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                    ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }
            },
            {
                type: listRef.current.web_design,
                name: listRef.current.ElBaraka,
                src: elbarka,
                info:{
                    imgs:[elbarka],
                    about:listRef.current.Elbaraka_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                    ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }
        },
            {
                type: listRef.current.web_design,
                name:listRef.current.AlRowad_Edu,
                src: edu,
                info:{
                    imgs:[edu],
                    about:listRef.current.edu_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                    ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }
            },
            {
                type: listRef.current.web_design,
                name:listRef.current.AlRowad_Edu,
                src: ASMFS,
                info:{
                    imgs:[ASMFS],
                    about:listRef.current.edu_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                    ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }
            },
            {
                type: listRef.current.web_design,
                name:listRef.current.AlRowad_Edu,
                src: ASMFS2,
                info:{
                    imgs:[ASMFS2],
                    about:listRef.current.edu_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                    ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }
            },
            {
                type: listRef.current.web_design,
                name:listRef.current.AlRowad_Edu,
                src: alrowadSchool,
                info:{
                    imgs:[alrowadSchool],
                    about:listRef.current.edu_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                    ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }
            },
            {
                type: listRef.current.web_design,
                name:listRef.current.AlRowad_Edu,
                src: sana,
                info:{
                    imgs:[sana],
                    about:listRef.current.edu_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                    ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }
            },
            {
                type: listRef.current.web_design,
                name:listRef.current.AlRowad_Edu,
                src: mantary,
                info:{
                    imgs:[mantary],
                    about:listRef.current.edu_parag,
                    services:[
                        listRef.current.UI_UX,
                        listRef.current.data_analysis,
                        listRef.current.interactive_website,
                        listRef.current.software_development,
                        listRef.current.Database_development,
                    ],
                    icons:["fa-brands fa-figma","fa-brands fa-react","fa-brands fa-python"]
                }
            },


        ]);

        setTimeout(() => {
            setIsChanged(true);
        },400);

    }, [listRef.current]);
    const sliderSettings = {
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        rows: 2,
        slidesPerRow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    rows: 1,
                    slidesPerRow: 2,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    rows: 1,
                    slidesPerRow: 2,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "-3px",
                }
            },
            {
                breakpoint: 360,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "-5px",
                }
            },
        ]
    };

    return(
        <section id="works" className={`${style.Work} py-5`}>
            <div className="container text-center">
                <h2>{listRef?.our_work}our work</h2>
                <p className="text">We build ideas, achieve ambitions, and open new horizons for our clients towards an
                    advanced future.</p>
                <div className={`${style.inner} py-5`}>
                    <div className="row">
                        <div className={`workTestimonoals h-100 col-md-12`} dir="ltr">
                            {isChanged ? (
                                <Slider {...sliderSettings}>
                                    {works.map((work, index) => (

                                        <div key={index} className={`${style.item} item`}>
                                            <img src={work.src} className="w-100" height="300px"
                                                 style={{height: "350px"}} alt=""/>
                                            <div className={` ${style.innerDev} `}>
                                                <div className="my-4">
                                                    <h5>{work.type}</h5>
                                                    <h4>{work.name}</h4>
                                                </div>
                                                <div type="button" onClick={() => {
                                                    setName(work.name);
                                                    setImgs(work.info.imgs);
                                                    seticons(work.info.icons);
                                                    setServices(work.info.services);
                                                    setAbout(work.info.about);
                                                    handleShow();
                                                }
                                                } className={style.view}>
                                                    {listRef.current.view_details}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <div className="mt-5 d-flex justify-content-center align-items-center">
                                    <ReactLoading type="spin" color="#0951FE" height={100} width={50}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3 className={` ${style.heading}`}>
                            {name}
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="row justify-content-center">
                            <div className={`${style.projectTestimonoals} projectTestimonoals`} dir='ltr'>
                                <OwlCarousel id="project-testimonoals"
                                             className="owl-carousel owl-theme" {...optionsForOne}>
                                    {imgs.map((img, index) => {
                                        return (
                                            <div key={index} className={`${style.itemTwo} item`}>
                                                <div>
                                                <img src={img} className="w-100" alt=""/>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    )}
                                </OwlCarousel>
                            </div>
                        </div>

                        <div className="row">
                            <div className={` col-lg-4 col-6 mb-3`}>
                                <div className={`${style.servItem}`}>
                                    <h3>
                                        {listRef.current.services_provided}
                                    </h3>

                                    <ul className="list-unstyled">
                                        {services.map((service, index) => {
                                            return (
                                                <li key={index}>{service}</li>
                                            )
                                        })}

                                    </ul>

                                </div>
                            </div>
                            <div className={`col-lg-4  ${style.order} mb-3`}>
                                <div className={`${style.servItem}`}>
                                    <h3>
                                        {listRef.current.about_project}
                                    </h3>
                                    <p>{about}</p>

                                </div>
                            </div>
                            <div className={`col-lg-4 col-6 mb-3`}>
                                <div className={`${style.servItem} `}>
                                    <h3>
                                        {listRef.current.tech_that}
                                    </h3>
                                    {icons.map((icon, index) => {
                                        return (
                                            <i key={index} className={` ${style.icon} ${icon} fs-2 mx-2`}></i>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                </Modal.Body>

            </Modal>


        </section>
    )
}

export default Work;