import style from './FixedNavbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function FixedNavbar(){

    return (
        <>
            <Navbar expand="lg" className="bg-transparent">
                <Container>
                    <Nav className={`${style.First}`}>
                        <Nav.Link href="/">
                            <i className="fa-solid fa-envelope text-white mx-1 fs-5"></i>
                            <span className={`${style.info} mx-2`}>info@alrowadit.com</span>
                        </Nav.Link>
                        <Nav.Link href="/" >
                            <i className="fa-solid fa-square-phone text-white mx-1 fs-5"></i>
                            <span className={`${style.info} mx-2`}>01030111702</span>
                        </Nav.Link>
                    </Nav>

                    <Nav className={`${style.second}`}>
                        <Nav.Link href="https://www.facebook.com/IAitsp">
                            <a href="https://www.facebook.com/IAitsp" className="fa-brands fa-square-facebook text-white fs-5 text-decoration-none"></a>
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/IAitsp">
                            <a href="https://twitter.com/IAitsp"  className="fa-brands fa-square-twitter text-white fs-5 text-decoration-none"></a>
                        </Nav.Link>

                        <Nav.Link href="https://www.instagram.com/alrowadit/">
                            <a href="https://www.instagram.com/alrowadit/" className="fa-brands fa-square-instagram text-white fs-5 text-decoration-none"></a>
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/company/alrowadit/">
                            <a href="https://www.linkedin.com/company/alrowadit/" className="fa-brands fa-linkedin text-white fs-5 text-decoration-none"></a>
                        </Nav.Link>
                        <Nav.Link href="https://wa.me/+201030111702">
                            <a href="https://wa.me/+201030111702" className="fa-brands fa-square-whatsapp text-white fs-5 text-decoration-none"></a>
                        </Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}
export default FixedNavbar;