import {Link} from "react-router-dom";

export const Footer = () => {
    return(
        <>
            <footer>
                {/* Logo Section */}
                <div className="logo-section">
                    <span>BlogPost</span>
                </div>

                {/* Links Section */}
                <div className="links-section">
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/register"} href="#">Join Now</Link>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </nav>
                </div>

                {/* Copyright Section */}
                <div className="copyright-section">
                    <p>&copy; 2023 BlogPost. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}