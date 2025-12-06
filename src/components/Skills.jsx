import React from 'react';
import { FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';


const Skills = () => {


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-16 sm:py-24 px-4 ">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">Skills</h1>
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">My Technical Level</p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div

                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-DEFAULT shadow-sm border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-8">Frontend
                            Developer</h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            className="grid grid-cols-2 gap-x-8 gap-y-6"
                        >
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-orange-500 mt-1"><FaHtml5 /></span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">HTML5</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Expert</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-primary mt-1"><RiNextjsFill /></span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">Next.JS</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Familiar</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-blue-500 mt-1"><RiTailwindCssFill /></span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">Tailwind CSS</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Intermediate</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-orange-300 mt-1"><IoLogoJavascript /></span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">JavaScript</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Expert</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-blue-400 mt-1"><FaReact /></span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">React.JS</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Expert</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div

                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-DEFAULT shadow-sm border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-xl font-semibold text-center text-slate-900 dark:text-white mb-8">Backend
                            Developer</h2>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            className="grid grid-cols-2 gap-x-8 gap-y-6"
                        >
                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-primary mt-1"><FaNodeJs /></span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">Node.JS</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Intermediate</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-primary mt-1"><SiExpress /></span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">Express.JS</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Intermediate</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
                                <span className="material-symbols-outlined text-primary mt-1"><SiMongodb /></span>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">MongoDB</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Intermediate</p>
                                </div>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
