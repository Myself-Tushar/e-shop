import React from 'react';

function Hero() {
    return (
        <header id="home" className="hero bg-primary text-white py-5 text-center">
            <div className="container">
                <h1>Welcome to E-Shop!</h1>
                <p>Your one-stop destination for all your shopping needs.</p><br />
                <a href="#featured" className="btn btn-light btn-lg">Shop Now</a>
            </div>
        </header>
    );
}

export default Hero;