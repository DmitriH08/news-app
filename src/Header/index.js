import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function HeaderComponent() {
    return (
        <Navbar bg="light" className ="mb-5">
            <Container>
                <Link to="/news-app" className= "navbar-brand">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    News
                </Link>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                     <Link to = "/news-app/contact" className="nav-link ">Contact  </Link>
                </Nav>
                </Navbar.Collapse>
               
            </Container>
        </Navbar>
    )
}

export default HeaderComponent;