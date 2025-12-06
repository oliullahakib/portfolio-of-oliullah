import React from 'react';
import { CiGrid32 } from 'react-icons/ci';
import { LuCodeXml } from 'react-icons/lu';
import { TiEdit } from 'react-icons/ti';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="services" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                        Services
                    </h2>
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                        What I offer
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: false }}
                        className="bg-white dark:bg-slate-800/50 p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center h-16 w-16 bg-blue-100 dark:bg-blue-900/50 rounded-lg mb-6">
                            <CiGrid32 color='white ' size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                            Frontend Development
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Crafting beautiful and responsive user interfaces that provide an exceptional user
                            experience.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: false }}
                        className="bg-white dark:bg-slate-800/50 p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center h-16 w-16 bg-green-100 dark:bg-green-900/50 rounded-lg mb-6">
                            <LuCodeXml color='white ' size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                            Backend Development
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Building robust, scalable, and secure server-side logic and APIs to power your
                            applications.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: false }}
                        className="bg-white dark:bg-slate-800/50 p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center h-16 w-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mb-6">
                            <TiEdit color='white ' size={50} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                            Full Stack Development
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Combining frontend and backend expertise to deliver complete, end-to-end web solutions.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
