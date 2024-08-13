import style from './Footer.module.css';
import logoE from '../../assets/img/logo.webp';
import logoA from '../../assets/img/arabic.webp';

import { useSelector } from 'react-redux';

import { useState ,useEffect , useRef} from 'react';
function Footer(){

    const [imgFooter , setImgFooter] = useState();

    const [arrow , setArrow] = useState();

    const currentLanguageCode = useRef(null);

    currentLanguageCode.current = useSelector((state) => state.language.lang);


    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);


    useEffect(() => {

        if (currentLanguageCode.current === 'en'){
            setImgFooter(logoE);
            setArrow('fa-chevron-right');
        }else{
            setImgFooter(logoA);
            setArrow('fa-chevron-left');
        }

    }, [currentLanguageCode.current]);

    return(
        <>
        <section className={`${style.footer} d-lg-block d-none`}>
            <div className={`container`}>
                <div className={`row pt-5`}>
                    <div className= {`col-md-3`}>
                        <div>
                            <img width={280} height={60}  src={imgFooter} alt="logo" />
                            <p className="text-center mt-3">
                                {/*{listRef.current.home_title}*/}
                                At Alrowad, we turn visions into reality, and challenges into unparalleled opportunities.

                            </p>
                        </div>
                    </div>

                    <div className= {`col-md-8 offset-md-1`}>
                        <div className="row">
                            <div className= {`col-lg-6`}>
                                <div className="d-flex justify-content-center">
                                    <ul className='list-unstyled'>
                                        <li><h4>{listRef.current.quick_link}</h4></li>

                                        <li><i className={`fa-solid ${arrow} `}></i>
                                            <a className= {` text-decoration-none mx-2 text-white`} href="#header">{listRef.current.home}</a></li>
                                        <li><i className={`fa-solid ${arrow} `}></i>
                                            <a className= {` text-decoration-none mx-2 text-white`} href="#services">{listRef.current.services}</a></li>
                                        <li><i className={`fa-solid ${arrow} `}></i>
                                            <a className= {` text-decoration-none mx-2 text-white`} href="#works">{listRef.current.works}</a>
                                        </li>
                                        <li><i className={`fa-solid ${arrow} `}></i>
                                            <a className= {` text-decoration-none mx-2 text-white`} href="#careers">{listRef.current.careers}</a>
                                        </li>
                                        <li><i className={`fa-solid ${arrow} `}></i>
                                            <a className= {` text-decoration-none mx-2 text-white`} href="#about">{listRef.current.about_us}</a></li>
                                        <li><i className={`fa-solid ${arrow} `}></i>
                                            <a className= {` text-decoration-none mx-2 text-white`} href="#contact">{listRef.current.contact}</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className= {`col-lg-6`}>
                                <div className="d-flex justify-content-center">
                                    <ul className='list-unstyled'>
                                        <li><h4>{listRef.current.services}</h4></li>
                                        <li><i className={`fa-solid ${arrow} `}></i> <span>{listRef.current.services_one_head}</span></li>
                                        <li><i className={`fa-solid ${arrow} `}></i> <span>{listRef.current.services_app_head}</span></li>
                                        <li><i className={`fa-solid ${arrow} `}></i> <span>{listRef.current.services_two_head}</span></li>
                                        <li><i className={`fa-solid ${arrow} `}></i> <span>{listRef.current.services_three_head}</span></li>
                                        <li><i className={`fa-solid ${arrow} `}></i> <span>{listRef.current.services_four_head}</span></li>
                                        <li><i className={`fa-solid ${arrow} `}></i> <span>{listRef.current.services_five_head}</span></li>
                                        <li><i className={`fa-solid ${arrow} `}></i> <span>{listRef.current.services_six_head}</span></li>
                                        <li><i className={`fa-solid ${arrow} `}></i> <span>{listRef.current.services_siven_head}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className={`${style.layout}`}>
                <h3 className={style.footHead}>&copy; 2024 {listRef.current.all_rights_reserved}</h3>
            </div>


        </section>

        <section className="col-lg-4 d-lg-none d-block">
        <div className={`${style.formLay}  d-flex align-items-center`}>
            <div>
                <h3 className="mb-5">{listRef.current.contact_information}</h3>

                <div className={style.item}>
                    <i className="fa-solid fa-phone-volume text-white fs-5"></i>
                    <span className="mx-2">010097290090</span>
                </div>
                <div className={style.item}>
                    <i className="fa-solid fa-envelope text-white fs-5"></i>
                    <span className="mx-2">info@alrowadit.com</span>
                </div>

                <div className={style.item}>
                    <i className="fa-solid fa-location-dot text-white fs-5"></i>
                    <span className="mx-2">
                          {listRef.current.Kornish}</span>
                </div>

                <div>
                    <a className="text-decoration-none" target="_blank" href="https://www.facebook.com/IAitsp">
                        <i className="fa-brands fa-square-facebook text-white fs-4"></i>
                    </a>
                    <a className="text-decoration-none" target="_blank" href="https://twitter.com/IAitsp">
                        <i className="fa-brands fa-square-twitter text-white fs-4"></i>
                    </a>

                    <a className="text-decoration-none" target="_blank" href="https://www.instagram.com/alrowadit/">
                        <i className="fa-brands fa-square-instagram text-white fs-4"></i>
                    </a>
                    <a className="text-decoration-none"  target="_blank" href="https://www.linkedin.com/company/alrowadit/">
                        <i className="fa-brands fa-linkedin text-white fs-4"></i>
                    </a>
                    <a className="text-decoration-none" target="_blank" href="https://wa.me/+201000290936">
                        <i className="fa-brands fa-square-whatsapp text-white fs-4"></i>
                    </a>
                </div>

            </div>
        </div>

    </section>
        </>
)
}

export default Footer;