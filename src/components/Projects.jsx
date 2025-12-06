import projectImage1 from '../assets/projectImage1.png';
import projectImage2 from '../assets/projectImage2.png';
import { motion } from 'framer-motion';

const Projects = () => {
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
        <section className="py-16 md:py-24 relative" id="projects">
            <div className="absolute inset-0 dark:bg-code-pattern opacity-30"></div>
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4 sm:mb-0">
                        My Latest <span className="text-primary">Projects</span>
                    </h2>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <motion.div variants={itemVariants} className="bg-background-light/5 dark:bg-background-dark/50 rounded-lg border border-white/10 shadow-lg overflow-hidden group">
                        <div className="overflow-hidden">
                            <img alt="Beauty Product Ecommerce Mobile App"
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                src={projectImage1} />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">React</span>
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">Express</span>
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">Node.js</span>
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">MongoDB</span>
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">Tailwind CSS</span>
                            </div>
                            <a target="_blank" href={'https://finease-d0ad4.web.app/'} className="text-xl font-bold text-text-light dark:text-text-dark mb-4">FinEase - Finance Management Platform</a>
                            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mt-1 mb-2">
                                This website built to manage your finances. Where you can track your transactions.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-background-light/5 dark:bg-background-dark/50 rounded-lg border border-white/10 shadow-lg overflow-hidden group">
                        <div className="overflow-hidden">
                            <img alt="Beauty Product Mobile App Landing Page"
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                src={projectImage2} />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">Next.js</span>
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">Express</span>
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">Node.js</span>
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">MongoDB</span>
                                <span className="text-xs font-semibold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">Tailwind CSS</span>
                            </div>
                            <a href={'https://haat-bazar-i63a.vercel.app/'} target="_blank" className="text-lg font-bold text-text-light dark:text-text-dark mb-4">HaatBazar - Raw Products E-Commerce Platform</a>
                            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mt-1 mb-2">
                                The platform connect farmers directly to consumers, eliminating supply chain intermediaries.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
