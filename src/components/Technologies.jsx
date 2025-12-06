import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const Technologies = () => {
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
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Technologies
                    </h2>
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                        My Tech Stack
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="mt-12 flex justify-center items-center gap-4 sm:gap-6 flex-wrap"
                >
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <IoLogoJavascript color='orange ' size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <FaReact color='blue ' size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <RiNextjsFill color='white ' size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <SiTailwindcss color='blue ' size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <FaNodeJs color='green ' size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <SiExpress color='white ' size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <SiMongodb color='green ' size={50} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Technologies;
