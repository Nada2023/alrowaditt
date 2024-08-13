import React, { Suspense, lazy } from 'react';
import './App.css';
import CareerImg from "./assets/img/Career.png";
import ServiceImg from "./assets/img/Service.png";
import Header from './pages/Header/Header.jsx';
import Service from './pages/Service/Service.jsx';
import Work from './pages/Work/Work.jsx';
import Careers from './pages/Careers/Careers.jsx';
import About from './pages/About/About.jsx';
import Clients from './pages/Clients/Clients.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Team from './pages/Team/Team.jsx';
import Partner from './pages/Partner/partner.jsx';
import Footer from "./components/Footer/Footer.jsx";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const LazyComponent = lazy(() => import('./LazyComponent.jsx'));

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
                <Header />
                <Service />
                <div className="position-relative overflow-hidden">
                    <Work />
                    <Careers />
                    <About />
                    <img src={CareerImg} alt="layout" loading="lazy" className="layoutCareer" />
                </div>
                <div className="position-relative overflow-hidden">
                    <Clients />
                    <Team />
                    <Partner />
                    <Contact />
                    <img className="layoutService" src={ServiceImg} alt="layout" loading="lazy" />
                </div>
                <Footer />
            </Suspense>
        </>
    );
}

export default App;
