import "./Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerOne">
                <ul>
                    <CustomLink to="/application">Aplicare</CustomLink>
                    <CustomLink to="/about">Despre</CustomLink>
                    <CustomLink to="/faq">FAQ</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
            </div>
            <div className="footerTwo">
                <p>
                    Copyright &copy; {currentYear} <a href="https://bestbrasov.ro/">Board of European Students of Technology Brașov</a>. Toate drepturile rezervate
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
