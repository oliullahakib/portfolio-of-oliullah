import projectImage1 from '../assets/projectImage1.png';
import projectImage2 from '../assets/projectImage2.png';
import projectImage3 from '../assets/projectImage3.png';
import projectImage4 from '../assets/projectImage4.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
    const containerRef = useRef();

    const projects = [
                {
            title: "StyleDecor-modern appointment management system",
            description: "Style Decor solve the problem that local decoration business have.",
            image: projectImage3,
            tags: ["React", "Express", "Firebase", "Tailwind CSS", "Stripe", "Node.js", "MongoDB"],
            live: "https://styledecor-6774e.web.app/",
            github: "https://github.com/oliullahakib/StyleDecor.git"
        },
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
            title: "Hero Kidz - Online Toy Store",
            description: "Hero Kidz is a single vendor e-commerce web application specifically designed for purchasing toys and kid's products.",
            image: projectImage4,
            tags: ["Next.js", "MongoDB", "Tailwind CSS"],
            live: "https://hero-kidz-jet.vercel.app/",
            github: "https://github.com/oliullahakib/hero-kidz"
        }

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            let newItemsToShow = 3;
            if (window.innerWidth < 768) {
                newItemsToShow = 1;
            } else if (window.innerWidth < 1024) {
                newItemsToShow = 2;
            }
            setItemsToShow(newItemsToShow);
            setCurrentIndex(prev => Math.min(prev, Math.max(0, projects.length - newItemsToShow)));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [projects.length]);

    const nextProject = () => {
        if (currentIndex < projects.length - itemsToShow) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const visibleProjects = projects.slice(currentIndex, currentIndex + itemsToShow);

    useGSAP(() => {
        // Removed button hover animations
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
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 w-full gap-4"
                >
                    <h2 className="text-3xl text-center md:text-5xl font-bold text-text-light dark:text-text-dark sm:mb-0">
                        My Latest <span className="text-primary">Projects</span>
                    </h2>
                    
                    <div className="flex gap-4 self-end sm:self-auto">
                        {currentIndex > 0 && (
                            <button 
                                onClick={prevProject}
                                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md shadow-primary/20"
                                aria-label="Previous project"
                            >
                                <FaChevronLeft size={20} />
                            </button>
                        )}
                        {currentIndex < projects.length - itemsToShow && (
                            <button 
                                onClick={nextProject}
                                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md shadow-primary/20"
                                aria-label="Next project"
                            >
                                <FaChevronRight size={20} />
                            </button>
                        )}
                    </div>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="project-card bg-background-light/5 dark:bg-background-dark/50 rounded-lg border border-white/10 shadow-lg overflow-hidden group flex flex-col h-full"
                            >
                            <div className="overflow-hidden">
                                <img
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    src={project.image}
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
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

                                <div className="flex flex-wrap gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-btn flex items-center gap-2 px-4 py-2 bg-transparent border border-primary/30 rounded-full text-sm font-medium text-text-light dark:text-text-dark  transition-all duration-300 "
                                    >
                                        <FaGithub size={18} className="text-text-light dark:text-text-dark" />
                                        <p>GitHub</p>
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="live-btn flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium transition-all duration-100 shadow-md shadow-primary/20"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        Live Link
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
