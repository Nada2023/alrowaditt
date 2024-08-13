import style from './DynamicNavbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import logoE from '../../assets/img/logo.webp';
import logoA from '../../assets/img/arabic.webp';

import logoWhite from '../../assets/img/logoWhite.svg';
import logoBlue from '../../assets/img/logoBlue.svg';

import lang from '../../assets/img/lang.png';

import { useSelector , useDispatch} from 'react-redux';
import { useState ,useEffect , useRef} from 'react';

import Modal from 'react-bootstrap/Modal';
import changeWebTrans from '../../store/Actions/webTrans.js';
import changeLanguage from "../../store/Actions/language.js";

function DynamicNavbar(){

    const [show, setShow] = useState(false );
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [imgNavbar , setImgNavbar] = useState();

    const languages = [
        {
            code: 'en',
            name: 'English',
            dir: 'ltr'
        },
        {
            code: 'ar',
            name: 'العربية',
            dir: 'rtl',
        },
    ]

    const dispatch = useDispatch();

    const currentLanguageCode = useRef(null);

    currentLanguageCode.current = useSelector((state) => state.language.lang);

    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    useEffect(() => {

                dispatch(changeWebTrans(currentLanguageCode.current));

                if (currentLanguageCode.current) {
                    const currentLanguage = languages.find(
                        (l) => l.code === currentLanguageCode.current
                    );


                    if (currentLanguage.dir === 'ltr') {
                        document.body.dir = 'ltr';
                    } else {
                        document.body.dir = 'rtl';
                    }
                }

        if (currentLanguageCode.current === 'en'){
            setImgNavbar(logoE);
        }else{
            setImgNavbar(logoA);
        }

    }, [currentLanguageCode.current]);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>

            <Navbar className={`${scrolled ? "fixed-top p-0" : " "} d-none d-lg-block `} >
                    <Container className={`${scrolled ? style.scrolled : style.notScrolled}  `} >
                    <Nav className="w-100 d-flex justify-content-between ">
                        <div className={style.logoBg}>
                            {/*<img src={fullLogo} alt="logo" style={{width:"132px"}} />*/}
                            <img src={imgNavbar} alt="logo"  />
                        </div>

                        <div  className="d-flex align-items-center">
                            <Nav.Item>
                                <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#header" >
                                    {listRef.current.home}

                                </a>
                            </Nav.Item>

                            <Nav.Item>
                                <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#services" >
                                    {listRef.current.services}

                                </a>
                            </Nav.Item>

                            <Nav.Item>
                                <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#works" >
                                    {listRef.current.works}

                                </a>
                            </Nav.Item>

                            <Nav.Item>
                                <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#careers" >
                                    {listRef.current.careers}
                                </a>
                            </Nav.Item>

                            <Nav.Item>
                                <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#about">
                                    {listRef.current.about_us}
                                </a>
                            </Nav.Item>

                            <Nav.Item>
                                <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#contact">{listRef.current.contact}</a>
                            </Nav.Item>


                            <Nav.Item>
                                <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} type="button" onClick={handleShow}>{listRef.current.privacy}</a>
                            </Nav.Item>

                        </div>

                            <Dropdown className={``}>
                                <Dropdown.Toggle  className={style.dropdown}>
                                    <img src={lang} alt="lang"  />
                                    <span className="text-white mx-2">ENG</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {languages.map(({ code, name } , index) => (
                                        <Dropdown.Item key={index}>
                                            <a onClick={() => {
                                                console.log("code " , code)
                                                    dispatch(changeLanguage(code));
                                                    dispatch(changeWebTrans(code));
                                                }} >
                                                {name}
                                            </a>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                    </Nav>


                </Container>
            </Navbar>





            <Navbar expand="lg" className={`${scrolled ? "fixed-top p-0" : "p-0 fixed-top"} d-lg-none d-block`} >
            <Container className={`${scrolled ? style.scrolledMob : style.notScrolledMob}  `}>
                    <Navbar.Brand href="#" className="d-lg-none d-block">
                        <img src={scrolled ? logoBlue : logoWhite } alt="logo" style={{width:"40px"}} />
                    </Navbar.Brand>
                    <Navbar.Toggle className={`${scrolled ? 'scrolledTogg' : 'notScrolledTogg'}  `}  aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse className={style.NavCol} id="basic-navbar-nav">
                        <Nav className="w-100 d-flex justify-content-between flex-wrap">
                            <div  className="d-flex align-items-start flex-wrap">
                                <Nav.Item>
                                    <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#header" >
                                        {listRef.current.home}
                                    </a>
                                </Nav.Item>

                                <Nav.Item>
                                    <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#services" >{listRef.current.services}</a>
                                </Nav.Item>

                                <Nav.Item>
                                    <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#works" >{listRef.current.works}</a>
                                </Nav.Item>

                                <Nav.Item>
                                    <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#careers" >
                                        {listRef.current.careers}
                                    </a>
                                </Nav.Item>

                                <Nav.Item>
                                    <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#about">
                                        {listRef.current.about_us}
                                    </a>
                                </Nav.Item>

                                <Nav.Item>
                                    <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} href="#contact">{listRef.current.contact}</a>
                                </Nav.Item>


                                <Nav.Item>
                                    <a className= {`  nav-link px-3 ${style.navLink} fw-bolder text-capitalize`} type="button" onClick={handleShow}>{listRef.current.privacy}</a>
                                </Nav.Item>

                                <Dropdown className={`${style.logoBgMob} `}>
                                    <Dropdown.Toggle className={style.dropdownMob} >
                                        <img src={lang} alt="lang"  />
                                        <span className="text-white mx-2">ENG</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {languages.map(({ code, name, country_code }) => (
                                            <Dropdown.Item li key={country_code}>
                                                <a onClick={() => {
                                                        dispatch(changeLanguage(code));
                                                        dispatch(changeWebTrans(code));
                                                    }} >
                                                    {name}
                                                </a>
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
            </Navbar>

            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3 className={` ${style.heading}`}>
                            {listRef.current.privacy}
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <p>{listRef.current.privacy_one}</p>
                        <p>{listRef.current.privacy_two}</p>
                        <p>{listRef.current.privacy_three}</p>
                        <p>{listRef.current.privacy_four}</p>
                </Modal.Body>

            </Modal>

        </>
    )
}
export default DynamicNavbar;