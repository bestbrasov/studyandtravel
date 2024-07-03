import "./Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerOne">
                <ul>
                    <CustomLink to="/application">Application</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/faq">FAQ</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
            </div>
            <div className="footerTwo">
                <p>
                    Copyright &copy; {currentYear} Board of European Students of Technology Brașov. Toate drepturile rezervate
                </p>
            </div>
        </footer>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}
