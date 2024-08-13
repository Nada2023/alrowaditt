import style from './Contact.module.css';
import Swal from "sweetalert2";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState , useRef} from 'react';
function Contact(){


    const [name,setName] =  useState('');
    const [email,setEmail] =  useState('');
    const [message,setMessage] =  useState('');
    const [phone,setPhone] =  useState('');
    const [companyName,setCompanyName] =  useState('');
    const [type,setType] =  useState('');

    function showAlert(message,icon){
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 2000
        });
    }


    async function sendData(e){
        e.preventDefault();
        if(name !== ""&& email !== ""&& message !== ""&& companyName !== ""&& phone !== "" && type !== ""){
            await axios.post(`https://bills.arrowad.sch.sa/aitsp/contact`,
                {
                    name : name,
                    email : email,
                    message: message,
                    companyName: companyName,
                    phone : phone,
                    type : type
                }).then(res => {
                    // console.log(res)
                showAlert ("Work_Application_Created_Successfully",'success');
                e.target.reset();
            })
                .catch(err => {
                    console.log(err);
                    showAlert("too_many", 'error');
                    e.target.reset();
                });

        }else{
            showAlert("please_fill", 'error');
        }
    }

    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    return(
        <section id="contact" className={`${style.Contact}`}>

            <div className={`container `}>
                <h2 className="text-center">{listRef.current.contact}</h2>
                <div className={` row ${style.inner}`}>
                        <div className="col-lg-4 d-lg-block d-none">

                            <div className={`${style.formLay}  d-flex align-items-center`}>
                                <div>
                                    <h3 className="mb-2">{listRef.current.contact_information}</h3>
<p className="d-flex align-items-center mb-4">The first step towards advanced software solutions, get in touch with us.</p>
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
                                            {listRef.current.Kornish}
                                        </span>
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

                        </div>

                    <div className="col-lg-8">
                        <div>
                            <form onSubmit={sendData}>
                                <div className={` row ${style.one} `}>
                                    <div className="col-lg-6">
                                        <div>
                                            <h3>{listRef.current.Name}</h3>
                                            <input type="text" placeholder={listRef.current.Name}  onChange={(e)=> { setName(e.target.value)}}/>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h3>{listRef.current.Email}</h3>
                                            <input type="email" placeholder={listRef.current.Email} onChange={(e)=> { setEmail(e.target.value)}}/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div>
                                            <h3>{listRef.current.company_name}</h3>
                                            <input type="text" placeholder={listRef.current.company_name}  onChange={(e)=> { setCompanyName(e.target.value)}} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div>
                                            <h3>{listRef.current.phone}</h3>
                                            <input type="text" placeholder={listRef.current.phone}  onChange={(e)=> { setPhone(e.target.value)}}/>
                                        </div>

                                    </div>
                                    <div className="col-lg-12">
                                        <div>
                                            <h3>{listRef.current.describe_your_idea}</h3>
                                            <input type="text" placeholder={listRef.current.describe_your_idea}  onChange={(e)=> { setMessage(e.target.value)}} />
                                        </div>

                                    </div>
                                </div>

                                <div className={` row ${style.row}  mt-4`}>
                                    <div className="form-check col-lg-4 col-md-6 mb-3">
                                        <input className={`form-check-input  ${style.formInput}`} value="digital marketing" onChange={(e)=> {
                                            if(e.target.checked){
                                                setType(e.target.value);
                                                document.getElementById("website").checked = false;
                                                document.getElementById("software").checked = false;
                                                document.getElementById("branding").checked = false;
                                                document.getElementById("app").checked = false;
                                                document.getElementById("All").checked = false;
                                            }else{
                                                setType("");
                                            }
                                        }} type="checkbox" id="digital" />
                                        <label className="form-check-label" htmlFor="digital">
                                            {listRef.current.digital_marketing}
                                        </label>
                                    </div>
                                    <div className=" form-check col-lg-4 col-md-6 mb-3">
                                        <input className={`form-check-input  ${style.formInput}`} value="website design"  onChange={(e)=> {
                                            if(e.target.checked){
                                                setType(e.target.value);
                                                document.getElementById("digital").checked = false;
                                                document.getElementById("software").checked = false;
                                                document.getElementById("branding").checked = false;
                                                document.getElementById("app").checked = false;
                                                document.getElementById("All").checked = false;
                                            }else{
                                                setType("");
                                            }
                                        }}  type="checkbox" id="website" />
                                        <label className="form-check-label" htmlFor="website">
                                            {listRef.current.website_design}
                                        </label>
                                    </div>
                                    <div className=" form-check col-lg-4 col-md-6 mb-3">
                                        <input className={`form-check-input  ${style.formInput}`} value="custom software"  onChange={(e)=> {
                                            if(e.target.checked){
                                                setType(e.target.value);
                                                document.getElementById("website").checked = false;
                                                document.getElementById("digital").checked = false;
                                                document.getElementById("branding").checked = false;
                                                document.getElementById("app").checked = false;
                                                document.getElementById("All").checked = false;
                                            }else{
                                                setType("");
                                            }
                                        }}  type="checkbox" id="software" />
                                        <label className="form-check-label" htmlFor="software">
                                            {listRef.current.customSoftware}
                                        </label>
                                    </div>

                                    <div className=" form-check col-lg-4 col-md-6 mb-3">
                                        <input className={`form-check-input  ${style.formInput}`} value="branding"  onChange={(e)=> {
                                            if(e.target.checked){
                                                setType(e.target.value);
                                                document.getElementById("website").checked = false;
                                                document.getElementById("software").checked = false;
                                                document.getElementById("digital").checked = false;
                                                document.getElementById("app").checked = false;
                                                document.getElementById("All").checked = false;
                                            }else{
                                                setType("");
                                            }
                                        }} type="checkbox" id="branding" />
                                        <label className="form-check-label" htmlFor="branding">
                                            {listRef.current.branding}
                                        </label>
                                    </div>
                                    <div className=" form-check col-lg-4 col-md-6 mb-3">
                                        <input className={`form-check-input  ${style.formInput}`} value="mobile app"  onChange={(e)=> {
                                            if(e.target.checked){
                                                setType(e.target.value);
                                                document.getElementById("website").checked = false;
                                                document.getElementById("software").checked = false;
                                                document.getElementById("branding").checked = false;
                                                document.getElementById("digital").checked = false;
                                                document.getElementById("All").checked = false;
                                            }else{
                                                setType("");
                                            }
                                        }}  type="checkbox" id="app" />
                                        <label className="form-check-label" htmlFor="app">
                                            {listRef.current.mobile_app}
                                        </label>
                                    </div>
                                    <div className=" form-check col-lg-4 col-md-6 mb-3">
                                        <input className={`form-check-input  ${style.formInput}`} value="All"  onChange={(e)=> {
                                            if(e.target.checked){
                                                setType(e.target.value);
                                                document.getElementById("website").checked = false;
                                                document.getElementById("software").checked = false;
                                                document.getElementById("branding").checked = false;
                                                document.getElementById("app").checked = false;
                                                document.getElementById("digital").checked = false;
                                            }else{
                                                setType("");
                                            }
                                        }}  type="checkbox" id="All" />
                                        <label className="form-check-label" htmlFor="All">
                                            {listRef.current.all}
                                        </label>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <button type="submit" className='btn mb-5'>{listRef.current.send}</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Contact;