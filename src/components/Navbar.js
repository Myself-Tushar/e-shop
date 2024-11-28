import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="https://youtube.com/@tech-tsr?si=tL8Jwi4hEblS3pjM"><strong>Tech TSR</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {['Home', 'Featured', 'Categories', 'Cart', 'Checkout', 'Login', 'Register'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;