import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Container, ThemeProvider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import myLogoScrolled from "../../assets/images/LogoWhite.png";
import myLogo from "../../assets/images/Logo.png";
import theme from './theme'; // Import the custom theme
import "./Navbar.css";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" className={`nav ${(isScrolled || isMobileMenuOpen) ? "scrolled" : ""}`}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link to="/" className="logo">
                            <img src={(isScrolled || isMobileMenuOpen) ? myLogoScrolled : myLogo} alt="BEST Courses" />
                        </Link>
                        <div className="grow" />
                        <div className="sectionDesktop">
                            <CustomLink to="/application">Application</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                            <CustomLink to="/faq">FAQ</CustomLink>
                            <CustomLink to="/contact">Contact</CustomLink>
                        </div>
                        <div className="sectionMobile">
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? <CloseIcon className="mobile-icon"/> : <MenuIcon className="mobile-icon"/>}
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <ul>
                            <li><CustomLink to="/application" className="mobile-links" onClick={toggleMobileMenu}>Application</CustomLink></li>
                            <li><CustomLink to="/about" className="mobile-links" onClick={toggleMobileMenu}>About</CustomLink></li>
                            <li><CustomLink to="/faq" className="mobile-links" onClick={toggleMobileMenu}>FAQ</CustomLink></li>
                            <li><CustomLink to="/contact" className="mobile-links" onClick={toggleMobileMenu}>Contact</CustomLink></li>
                        </ul>
                    </div>
                )}
            </AppBar>
        </ThemeProvider>
    );
}

function CustomLink({ to, children, className, onClick, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <Link to={to} className={`${className} ${isActive ? "active" : ""}`} onClick={onClick} {...props}>
            {children}
        </Link>
    );
}
