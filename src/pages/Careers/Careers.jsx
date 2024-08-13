import style from './Careers.module.css';
import img1 from '../../assets/img/serv.jpg';

import { useState , useEffect , useRef } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
function  Careers(){

    const [show, setShow] = useState(false );
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [name,setName] =  useState('');
    const [email,setEmail] =  useState('');
    const [phone,setPhone] =  useState('');
    const [message,setMessage] =  useState('');
    const [type,setType] =  useState('');

    // file

    const [work, setWork] = useState([]);

    const getData = async ()=> {
        await axios.post(`https://bills.arrowad.sch.sa/aitsp/get_work`).then(res => {
            setWork(res.data.work);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getData();
    },[]);


    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);

        const a = document.getElementById('pdfFile');
        const fileLabel = document.getElementById('fileLabel');
        if(a.value === ""){
            fileLabel.innerHTML = "Choose file";
        }else{
            const theSplit = a.value.split('\\');
            fileLabel.innerHTML = theSplit[theSplit.length-1];
        }

    };


    // end file
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

        const formData = new FormData();

        formData.append('file', selectedFile);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('description', message);
        formData.append('type_id', type);

        if(name !== ""&& email !== ""&& message !== ""&& phone !== "" , selectedFile !== ""){

            console.log(formData);
            await axios.post(`https://bills.arrowad.sch.sa/aitsp/apply_job`,formData).then(res => {

                showAlert("Work_Application_Created_Successfully",'success');
                handleClose();
                e.target.reset();
            })
                .catch(err => {
                    console.log(err);
                    showAlert(err, 'error');
                    e.target.reset();
                });

        }else{
            showAlert("please_fill", 'error');
        }
    }


    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    return(
        <section id="careers" className={`${style.Careers} `}>

            <div className={`text-center`}>
                <h2>{listRef.current.careers}</h2>
                <div className={`${style.inner} `}>
                        <div className={` row`}>
                            <div className="col-lg-6 d-lg-block d-none" >
                                <img src={img1} alt="img" className={style.imgCareer} />
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center h-100 py-5 px-5">
                                    <div>
                                        <h3 className="text-capitalize">
                                            {listRef.current.careers_head}

                                        </h3>
                                        <p>{
                                            listRef.current.innovative_team}


                                        </p>
                                        <button onClick={handleShow} className={` btn fw-bolder text-decoration-none  ${style.btnMainContact} mt-2 `}>{listRef.current.Join_us}</button>

                                    </div>

                                </div>
                            </div>

                    </div>

                </div>

            </div>


            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3 className={` ${style.heading}`}>
                            {listRef.current.Join_us}
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={sendData}>
                        <div className={`${style.one} row`}>
                            <div className="col-lg-6">
                                <label>{listRef.current.Name}</label>
                                <input type="text" placeholder={listRef.current.Name}  onChange={(e)=> { setName(e.target.value)}}/>
                            </div>
                            <div className="col-lg-6">
                                <label>{listRef.current.Email}</label>
                                <input type="email" placeholder={listRef.current.Email} onChange={(e)=> { setEmail(e.target.value)}}/>
                            </div>

                            <div className="col-lg-6">
                                <label>{listRef.current.phone}</label>
                                <input type="text" placeholder={listRef.current.phone}  onChange={(e)=> { setPhone(e.target.value)}}/>
                            </div>

                            <div className="col-lg-6">
                                <label>job</label>
                                <select onChange={(e)=>{
                                    setType(e.target.value);
                                }}>
                                    <option selected disabled>Choose The Jop</option>
                                    {work.map((work,index)=>{
                                        return(
                                            <option key={index} value={work.id}>{work.title}</option>
                                        )
                                    })}

                                </select>

                            </div>

                            <div className="col-lg-12 position-relative">
                                <label>{listRef.current.Submit_your_CV}</label>
                                <input type="file" id="pdfFile" onChange={handleFileInputChange} />
                            </div>

                            <div className="col-lg-12">
                                <label>{listRef.current.Why_do_you_want}</label>
                                <textarea placeholder={listRef.current.Why_do_you_want}  onChange={(e)=> { setMessage(e.target.value)}} />
                            </div>

                        </div>

                        <div className='d-flex justify-content-center mt-5'>
                            <button className={` btn mb-5 ${style.submit}`} type="submit">{listRef.current.send}</button>
                        </div>

                    </form>
                </Modal.Body>

            </Modal>



        </section>
    )
}

export default Careers;