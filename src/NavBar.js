import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from './images/nav-icon1.svg';
import navIcon2 from './images/nav-icon2.svg';
import navIcon3 from './images/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#profile"
                                className={activeLink === 'profile' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('profile')}
                            >
                                Coding Profiles
                            </Nav.Link>

                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/varshagupta01" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon1} alt="LinkedIn" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon2} alt="Icon 2" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={navIcon3} alt="Icon 3" />
                                </a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
