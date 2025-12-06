import React, { useRef, useState } from 'react';
import heroImg from '../assets/hero-image-half.png';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const [isShow, setIsShow] = useState(false);
    const minionRef = useRef(null);
    const circleRef = useRef(null);

    useGSAP(() => {
        // Continuous rotation for the circle
        gsap.to(circleRef.current, {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: "linear"
        });

        // Floating animation for the image container
        gsap.to(minionRef.current, {
            y: 15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 md:p-40">
            <div className="absolute inset-0 dark:bg-code-pattern opacity-30"></div>
            <main className="relative z-10 w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
                    <div className="flex justify-center md:justify-end">
                        <div ref={minionRef} className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Replaced animate-spin-slow with GSAP */}
                            <div
                                ref={circleRef}
                                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-blue-500"
                            >
                            </div>
                            <div className="absolute inset-1.5 bg-background-light dark:bg-background-dark rounded-full p-2">
                                <img alt="A smiling portrait of oliullah."
                                    className="w-full h-full object-cover object-top rounded-full"
                                    src={heroImg} />
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.2 }}
                        viewport={{ once: false }}
                        className="text-center md:text-left px-3"
                    >
                        <motion.p
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark mb-2"
                        >
                            Hi. I'm
                        </motion.p>
                        <motion.h1
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-4"
                        >
                            Oliullah Akib,
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-md mx-auto md:mx-0"
                        >
                            A <span className="text-primary font-semibold">&lt;Full stack Developer/&gt;</span>
                            experience with creating successful websites..
                        </motion.p>
                        <motion.div
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false }}
                            className="mt-8"
                        >
                            <button onClick={() => setIsShow(!isShow)} className="inline-block py-3 px-8 text-lg font-semibold text-primary border-2 border-primary rounded-full transition-all duration-300 hover:bg-primary hover:text-white dark:hover:text-background-dark focus:outline-none focus:ring-4 focus:ring-primary/50"
                                >
                                {isShow ? "+8801836109573" : "Hire me!"}
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default Hero;
