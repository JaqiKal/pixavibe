import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.webp";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                {/* Logo as a link to the home page */}
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45" />
                    </Navbar.Brand>
                </NavLink>
                {/* Navbar toggle for mobile view */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Collapsible content for responsive navbar */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        {/* Navigation link to Home page */}
                        <NavLink
                            exact
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/"
                        >
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                        {/* Navigation link to Sign In page */}
                        <NavLink
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/signin"
                        >
                            <i className="fas fa-sign-in-alt"></i>Sign in
                        </NavLink>
                        {/* Navigation link to Sign Up page */}
                        <NavLink
                            to="/signup"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                        >
                            <i className="fas fa-user-plus"></i>Sign up
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;