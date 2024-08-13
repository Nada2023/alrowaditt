import style from './Header.module.css';
import FixedNavbar from '../../components/FixedNavbar/FixedNavbar.jsx';
import DynamicNavbar from '../../components/DynamicNavbar/DynamicNavbar.jsx';
import serv from '../../assets/img/serv.png';
import {useRef} from "react";
import {useSelector} from "react-redux";
function Header(){

    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    return(
        <header id="header" className={`${style.header}`}>
            <div className="d-none d-lg-block">
                <FixedNavbar />
            </div>


            <DynamicNavbar />
            {/*{listRef.current.best_quality}*/}
            {/*{listRef.current.for_you}*/}



            <div className={`container `}>
                <div className={` row ${style.inner}`}>
                    <div className= {`col-md-6`}>
                        <h1 className={`${style.headingOne}`}>Who we are</h1>
                        {/*<h1 className={`${style.headingTwo}`}>We are pioneers of innovation for a bright future.</h1>*/}
                        <p className={`${style.headingParag} mt-4`}>
                            {/*{listRef.current.home_title}*/}
                            We are pioneers of innovation for a bright future. <br/><br/>
                            Alrowad stands out as a leading company in the fields of information technology and scientific production, boasting years of experience in serving diverse clients. We are dedicated to achieving success and excellence for our clients by delivering exceptional results. Our highly trained team is prepared to support and assist you in achieving your goals effectively and innovatively.
                        </p>
                        <div className="mt-3 ">
                            <a className= {` btn fw-bolder text-decoration-none  ${style.btnMainContact} mt-2 `} target="_blank" href="tel:0201000290936">{listRef.current.talk}</a>
                        </div>
                    </div>

                    <div className= {`col-lg-5 col-md-6 offset-lg-1 ${style.order} p-0`}>
                        <img src={serv} className={`${style.imgHead}`} alt="" />
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Header;