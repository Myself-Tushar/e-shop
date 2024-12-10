import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Company Information */}
                    <div>
                        <h5 className="text-xl font-bold mb-3">About E-Shop</h5>
                        <p className="text-gray-400 text-sm text-center">
                            Your trusted online store for all things tech! We offer a wide range of electronics, gadgets, and accessories at the best prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-xl font-bold mb-3">Quick Links</h5>
                        <ul className="text-gray-400 text-sm ">
                            <li><a href="/tems" className="hover:text-teal-500">Terms & Conditions</a></li>
                            <li><a href="/prvacy" className="hover:text-teal-500">Privacy Policy</a></li>
                            <li><a href="/hello" className="hover:text-teal-500">Contact Me</a></li>
                        </ul>
                    </div>

                {/* Social Media */}
                <div className="text-center">
                <h5 className="text-xl font-bold mb-3">Follow Me</h5>
                <div className="flex justify-center space-x-6 text-gray-400">
                <a href="https://www.facebook.com/profile.php?id=61568168602335" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="https://x.com/Tech_TSR" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="https://www.instagram.com/tech_tsr_official/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/tushar-singha-35a6b1334/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                <i className="fab fa-linkedin fa-lg"></i>
                </a>
                </div>
                </div>

                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-sm text-gray-400">
                    <p>&copy; 2024 E-Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;