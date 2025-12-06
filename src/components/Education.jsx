import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="py-16  md:py-24 relative" id="education">
            <div className="absolute inset-0 dark:bg-code-pattern opacity-30"></div>
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-4xl md:text-5xl font-bold text-center text-text-light dark:text-text-dark mb-16"
                >
                    Education
                </motion.h2>
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="relative pl-12 md:pl-16"
                    >
                        <div className="absolute left-0 top-0 h-full border-l-2 border-primary/30"></div>
                        <div className="absolute left-[-9px] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-background-dark">
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-24 md:w-32 text-text-secondary-light dark:text-text-secondary-dark font-semibold ">
                                2024 - Present</div>
                            <div className="ml-6 md:ml-8">
                                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Bachelor of honors degree | Accounting  </h3>
                                <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mt-1 mb-2">
                                    Kushtia Govt. College</p>

                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="relative pl-12 md:pl-16"
                    >
                        <div className="absolute left-0 top-0 h-full border-l-2 border-primary/30"></div>
                        <div className="absolute left-[-9px] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-background-dark">
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-24 md:w-32 text-text-secondary-light dark:text-text-secondary-dark font-semibold text-lg">
                                2025</div>
                            <div className="ml-6 md:ml-8">
                                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Certified
                                    Full-Stack Web Developer</h3>
                                <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mt-1 mb-2">
                                    Programming Hero</p>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
