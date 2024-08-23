import React from 'react';

const Footer = () => {
    return (
        <footer
            id="Footer"
            className="bg-[#2a1454] text-white py-6 w-full"
        >
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="mb-4">&copy; {new Date().getFullYear()} Rohan Neware. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mb-4">
                        <a
                            href="https://github.com/rohanNeware"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition duration-300"
                        >
                            <i className="fab fa-github text-2xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/rohan-neware-820829178"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition duration-300"
                        >
                            <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-white hover:text-gray-400 transition duration-300"
                            aria-label="Scroll to top"
                        >
                            <i className="fas fa-chevron-up text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
