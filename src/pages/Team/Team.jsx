import style from './Team.module.css';
// import "./Team.module.css";
import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import ReactLoading from 'react-loading';
import adel from '../../assets/img/team/Adel.webp';
import esraa from '../../assets/img/team/esraa_mokhtar.webp';
import amany from '../../assets/img/team/amany_asad.webp';
import kholod from '../../assets/img/team/kholod_1.webp';
import mohamed from '../../assets/img/team/mohamed_el_sudi.webp';
import hazem from '../../assets/img/team/hazem.webp';
import romany from '../../assets/img/team/Romany.jpg';
import ahmed from '../../assets/img/team/ahmed_gamal.webp';
import amr from '../../assets/img/team/amr.webp';
import eman from '../../assets/img/team/Eman.jpg';
import marwa from '../../assets/img/team/marwa.jpg';
import nada from '../../assets/img/team/nada.jpg';
import Nada from '../../assets/img/team/nada.png';
import fatma from '../../assets/img/team/Fatma.jpg';
import fawzia from '../../assets/img/team/Fawzia.jpg';
import shaimaa from '../../assets/img/team/Shaimaa.jpg';
import yara from '../../assets/img/team/Yara.jpg';
import mohamed_sh from '../../assets/img/team/Mohamed.jpg';
import fady from '../../assets/img/team/Fady.jpg';
import haidy from '../../assets/img/team/Haidy.jpg';
import eman_hamed from '../../assets/img/team/eman .jpeg';
import mostafa from '../../assets/img/team/mostafa.jpg';
import mina from '../../assets/img/team/mina.jpeg';
import mahmoud from '../../assets/img/team/mahmoud.jpg';
import yahia from '../../assets/img/team/Eng yahia.png';
import ahmed_sh from '../../assets/img/team/Eng Ahmed.png';

function Team() {
    const [teams, setTeams] = useState([]);

    const listRef = useRef({});
    listRef.current = useSelector((state) => state.webTrans.webTrans);

    useEffect(() => {
        setTeams([
            { src: mohamed, name: "Mohamed alsaodi", job: "CEO AITSP" },
            { src: romany, name: "Romany Tadros", job: "Full stack developer" },
            { src: amany, name: "Amany asaad", job: "Frontend developer" },
            { src: esraa, name: "Esraa Mokhtar", job: "Frontend developer" },
            { src: kholod, name: "kholoud Sliem", job: "Graphic & ui/ux designer" },
            { src: eman, name: "Eman Abd El Mounsif", job: "Backend developer" },
            { src: ahmed, name: "Ahmed gamal", job: "Backend developer" },
            { src: hazem, name: "hazem abdalla", job: "Graphic & ui/ux designer" },
            { src: adel, name: "Adel assam", job: "Frontend developer" },
            { src: marwa, name: "Marwa Gamal", job: "Frontend developer" },
            { src: nada, name: "Nada Fawzy", job: "Frontend developer" },

            { src: yara, name: "Yara mohamed", job: "Backend developer" },
            { src: fatma, name: "Fatma mohamed", job: "Frontend developer" },
            { src: Nada, name: "Nada Ahmed", job: "Frontend developer" },
            { src: fady, name: "fady Shenouda", job: "Frontend developer" },
            { src: amr, name: "Amr mohamed", job: "Backend developer" },
            { src: fawzia, name: "Fawzia Sabry", job: "Technical Support " },
            { src: shaimaa, name: "Shaimaa selim", job: " content creator" },
            { src: mohamed_sh, name: "Mohamed Shehata", job: "UI/UX & Graphic Designer" },
            { src: mina, name: "mina emad ", job: "Frontend developer" },
            { src: haidy, name: "haidy hatem", job: "Frontend developer" },
            { src: eman_hamed, name: "eman hamed ", job: "Frontend developer" },
            { src: mostafa, name: "mostafa mohamed", job: "Backend developer" },
            { src: mahmoud, name: "mahmoud farrag", job: "Frontend developer" },
            { src: yahia,  name: "yahia", job: " developer" },
            { src: ahmed_sh, name: "ahmed", job: " developer" },
        ]);
    }, [listRef.current]);

    return (
        <section className={`${style.team} py-5`}>
            <div className={`text-center`}>
                <h2 className={`header`}>{listRef.current.our_team} our team</h2>
                <div className={`${style.gridcontainer}`}>
                    <div className={`${style.teamshape}`}></div>
                    {teams.map((team, index) => (
                        <div key={index} className={`${style.teammember} ${style[`member-${index + 1}`]}`}>
                            <img src={team.src} alt={team.name}/>
                            <div className={`${style.cardText}`}>
                                <h3>{team.name}</h3>
                                <p>{team.job}</p>
                            </div>
                        </div>
                    ))}
                    <div className={`${style.centertext}`}>
                        <h2>Our Heroes</h2>
                        <p>Meet our team who turn our dreams into reality.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
