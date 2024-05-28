import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.webp";
import styles from "../styles/NavBar.module.css";


/* responsive navbar toggler with hamburger to X transformation */
/* Inspired by: "https://youtu.be/_MrShB9fh7U?si=na9LouEIB1-m1kMt# */
const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top" expanded={expanded}>
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleToggle}
                    className={expanded ? `${styles['navbar-toggler']} ${styles['active']}` : styles['navbar-toggler']}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link>
                            <i className={`fas fa-home ${styles.iconColor}`}></i> Home
                        </Nav.Link>
                        <Nav.Link>
                            <i className={`fas fa-sign-in-alt ${styles.iconColor}`}></i> Sign in
                        </Nav.Link>
                        <Nav.Link>
                            <i className={`fas fa-user-plus ${styles.iconColor}`}></i> Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
