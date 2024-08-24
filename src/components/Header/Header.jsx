import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeSection, setActiveSection] = useState('About');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = ['About', 'Resume','Projects', 'My-Skills','Contact'];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`transition-transform duration-500 ease-in-out
                ${isFixed ? 'fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white to-[#e6dbfe] shadow-md' : 'relative bg-gradient-to-r from-white to-[#e6dbfe]'} text-gray-800 py-4 md:py-6`}
        >
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold">Rohan Neware</h1>
                <button
                    className="md:hidden p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <nav
                    className={`fixed inset-0 top-16 bg-gradient-to-r from-white to-[#e6dbfe] md:static md:bg-transparent md:flex md:items-center md:space-x-4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="flex flex-col md:flex-row md:items-center w-full">
                        {sections.map((head, index) => (
                            <a
                                key={index}
                                href={`#${head}`}
                                className={`py-2 px-4 block md:inline ${activeSection === head ? 'underline underline-offset-4 font-semibold text-blue-600' : 'hover:underline'} transition duration-300`}
                                onClick={() => {
                                    setActiveSection(head);
                                    setIsMenuOpen(false); 
                                }}
                            >
                                {head}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
