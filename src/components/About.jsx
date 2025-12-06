import React, { useRef } from 'react';
import heroImg from '../assets/hero-image-half.png';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
    const blobRef = useRef(null);

    useGSAP(() => {
        gsap.to(blobRef.current, {
            scale: 1.1,
            opacity: 0.8,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    return (
        <section className="py-16 md:py-24 relative" id="about">
            <div className="absolute inset-0 dark:bg-code-pattern opacity-30"></div>
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-4xl md:text-5xl font-bold text-center text-text-light dark:text-text-dark mb-12"
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="md:col-span-2 flex justify-center"
                    >
                        <div className="relative w-56 h-56 md:w-64 md:h-64">
                            <div
                                ref={blobRef}
                                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-blue-500 blur-lg opacity-50"
                            >
                            </div>
                            <img alt="A smiling portrait of oliullah."
                                className="relative object-top w-full h-full object-cover rounded-full"
                                src={heroImg} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="md:col-span-3 text-center md:text-left"
                    >
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            I am a passionate Full Stack Developer with a decade of hands-on experience in building
                            robust, scalable, and user-friendly web applications. My journey in web development
                            began with a deep curiosity for how things work, and it has evolved into a career where
                            I blend creative problem-solving with technical expertise.
                        </p>
                        <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            My expertise spans across the entire development lifecycle, from conceptualization and
                            design to deployment and maintenance. I am proficient in modern technologies like <span
                                className="text-primary/90">React</span>, <span className="text-primary/90">Node.js</span>,
                            <span className="text-primary/90">Express.js</span>, and <span
                                className="text-primary/90">MongoDB</span> databases. I thrive on creating seamless
                            digital experiences that not only meet client requirements but also exceed user
                            expectations.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
