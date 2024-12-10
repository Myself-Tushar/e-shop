import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (!targetElement) {
            console.error(`Element with id "${targetId}" not found.`);
            return;
        }

        window.scrollTo({
            top: targetElement.offsetTop - 350, // Adjust offset for sticky navbar
            behavior: 'smooth',
        });
    };

    const closeNavbar = () => {
        const navbarToggle = document.getElementById("navbarNav");
        if (navbarToggle.classList.contains("show")) {
            navbarToggle.classList.remove("show"); // Close navbar by removing 'show' class
        }
    };

    const navItems = ['Home', 'Featured', 'Categories', 'Cart', 'Checkout'];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="https://youtube.com/@tech-tsr?si=tL8Jwi4hEblS3pjM">
                    <strong>Tech TSR</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item}>
                                <a
                                    className="nav-link"
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => {
                                        smoothScroll(e, item.toLowerCase());
                                        closeNavbar(); // Close navbar when item is clicked
                                    }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        {/* Link to Login and Register */}
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/login"
                                onClick={closeNavbar} // Close navbar when Login is clicked
                            >
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/register"
                                onClick={closeNavbar} // Close navbar when Register is clicked
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;