import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b container mx-auto rounded-full border-gray-200 dark:border-gray-800">
            <nav className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <a className="text-2xl font-bold text-text-light dark:text-text-dark" href="#">
                        Oliullah<span className="text-primary">.</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#">Home</a>
                        <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#about">About</a>
                        <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#skills">Skills</a>
                        <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#projects">Projects</a>
                        <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#education">Education</a>
                        <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#services">Services</a>
                        <a className="py-2 px-4 text-primary border border-primary rounded-full hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all" href="#contact">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-text-light dark:text-text-dark focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-4">
                            <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#" onClick={toggleMenu}>Home</a>
                            <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#about" onClick={toggleMenu}>About</a>
                            <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#skills" onClick={toggleMenu}>Skills</a>
                            <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#projects" onClick={toggleMenu}>Projects</a>
                            <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#education" onClick={toggleMenu}>Education</a>
                            <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors" href="#services" onClick={toggleMenu}>Services</a>
                            <a className="py-2 px-4 text-primary border border-primary rounded-full hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all inline-block text-center" href="#contact" onClick={toggleMenu}>Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
