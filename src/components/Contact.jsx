import React from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';


const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="contact" className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 antialiased">
            <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="max-w-5xl w-full mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Get in
                            Touch</h1>
                        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Contact Me</p>
                    </motion.div>
                    <div className="flex justify-center items-center">
                        <div className="">
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: false }}
                                className="text-2xl font-semibold mb-6 text-center lg:text-left text-gray-900 dark:text-white"
                            >
                                Talk to me</motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="space-y-6"
                            >
                                <motion.div variants={itemVariants} className="contact-card border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
                                    <MdEmail size={25} />
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">oliullahakib@gmail.com</p>
                                    <a className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white group"
                                        href="mailto:oliullahakib@gmail.com">
                                        Write me
                                        <span className="material-symbols-outlined text-base ml-1 transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
                                    </a>
                                </motion.div>
                                <motion.div variants={itemVariants} className="contact-card border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
                                    <FaGithub size={25} />
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">/oliullahakib</p>
                                    <a target='_blank' className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white group"
                                        href="https://github.com/oliullahakib">
                                        Visit me
                                        <span className="material-symbols-outlined text-base ml-1 transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
                                    </a>
                                </motion.div>
                                <motion.div variants={itemVariants} className="contact-card border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
                                    <IoLogoLinkedin size={25} />
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Linkedin</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">/oliullahakib</p>
                                    <a target='_blank' className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white group"
                                        href="https://www.linkedin.com/in/oliullahakib/">
                                        Visit me
                                        <span className="material-symbols-outlined text-base ml-1 transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
