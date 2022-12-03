import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="navbar bg-primary">
                <h1>
                    <Link to='/'> <i className="fab fa-github" />GitHub Search Engine</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact </Link>
                    </li>
                    <li>
                        <Link to="/About"> About Us </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;