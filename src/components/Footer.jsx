import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className="py-8">
            <div className="w-full border border-gray-200 dark:border-gray-800 ">
                <div className=" w-full py-8 flex flex-col-reverse  items-center justify-center">
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark ">
                        © 2025 Oliullah Akib. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
