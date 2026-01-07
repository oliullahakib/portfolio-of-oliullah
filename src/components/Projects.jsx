import projectImage1 from '../assets/projectImage1.png';
import projectImage2 from '../assets/projectImage2.png';
import projectImage3 from '../assets/projectImage3.png';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const containerRef = useRef();

    const projects = [
        {
            title: "FinEase - Finance Management Platform",
            description: "This website built to manage your finances. Where you can track your transactions.",
            image: projectImage1,
            tags: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
            live: "https://finease-d0ad4.web.app/",
            github: "https://github.com/oliullahakib/finEase-client.git"
        },
        {
            title: "HaatBazar - Raw Products E-Commerce Platform",
            description: "The platform connect farmers directly to consumers, eliminating supply chain intermediaries.",
            image: projectImage2,
            tags: ["Next.js", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
            live: "https://haat-bazar-i63a.vercel.app/",
            github: "https://github.com/oliullahakib/haat-bazar.git"
        },
        {
            title: "StyleDecor-modern appointment management system",
            description: "Style Decor solve the problem that local decoration business have.",
            image: projectImage3,
            tags: ["React","Express","Firebase","Tailwind CSS", "Stripe", "Node.js", "MongoDB"],
            live: "https://styledecor-6774e.web.app/",
            github: "https://github.com/oliullahakib/StyleDecor.git"
        }
    ];

    useGSAP(() => {
        const projectCards = gsap.utils.toArray('.project-card');

        projectCards.forEach((card) => {
            const githubBtn = card.querySelector('.github-btn');
            const liveBtn = card.querySelector('.live-btn');

            if (githubBtn) {
                githubBtn.addEventListener('mouseenter', () => {
                    gsap.to(githubBtn, {
                        scale: 1.05,
                        backgroundColor: '#FB923C',
                        color: '#FFFFFF',
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                githubBtn.addEventListener('mouseleave', () => {
                    gsap.to(githubBtn, {
                        scale: 1,
                        backgroundColor: 'transparent',
                        color: 'inherit',
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            }

            if (liveBtn) {
                liveBtn.addEventListener('mouseenter', () => {
                    gsap.to(liveBtn, {
                        scale: 1.05,
                        y: -2,
                        boxShadow: '0 10px 15px -3px rgba(251, 146, 60, 0.3)',
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                liveBtn.addEventListener('mouseleave', () => {
                    gsap.to(liveBtn, {
                        scale: 1,
                        y: 0,
                        boxShadow: 'none',
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            }
        });
    }, { scope: containerRef });

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
        <div className="py-16 md:py-24 relative" id="projects" ref={containerRef}>
            <div className="absolute inset-0 dark:bg-code-pattern opacity-30"></div>
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12"
                >
                    <h2 className="text-3xl text-center md:text-5xl font-bold text-text-light dark:text-text-dark sm:mb-0">
                        My Latest <span className="text-primary">Projects</span>
                    </h2>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="project-card bg-background-light/5 dark:bg-background-dark/50 rounded-lg border border-white/10 shadow-lg overflow-hidden group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    src={project.image}
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className=" font-bold text-text-light dark:text-text-dark mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mt-1 mb-8 leading-relaxed ">
                                    {project.description}
                                </p>

                                <div className="flex gap-4  absolute bottom-4">
                                    <motion.a
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index + 0.3 }}
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-btn flex items-center gap-2 px-4 py-2 bg-transparent border border-primary/30 rounded-full text-sm font-medium text-white  transition-all duration-300 "
                                    >
                                        <FaGithub size={18} color='white' />
                                        <p className="text-white">GitHub</p>
                                    </motion.a>
                                    <motion.a
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.01 * index + 0.4 }}
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="live-btn flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium transition-all duration-100 shadow-md shadow-primary/20"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        Live Link
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
