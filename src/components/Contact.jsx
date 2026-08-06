import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const initialFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const Contact = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            toast.error('Email service is not configured. Please add your EmailJS credentials.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        setSubmitMessage('');

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject || 'Portfolio contact',
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus('success');
            toast.success('Message sent successfully! I will get back to you soon.');
            setFormData(initialFormState);
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
            setSubmitMessage('Failed to send message. Please try again or email me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
        <section id="contact" className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 antialiased overflow-hidden">
            <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="max-w-6xl w-full mx-auto">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
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
                                    <a target='_blank' rel="noreferrer" className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white group"
                                        href="https://github.com/oliullahakib">
                                        Visit me
                                        <span className="material-symbols-outlined text-base ml-1 transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
                                    </a>
                                </motion.div>
                                <motion.div variants={itemVariants} className="contact-card border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
                                    <IoLogoLinkedin size={25} />
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Linkedin</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">/oliullahakib</p>
                                    <a target='_blank' rel="noreferrer" className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white group"
                                        href="https://www.linkedin.com/in/oliullahakib/">
                                        Visit me
                                        <span className="material-symbols-outlined text-base ml-1 transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false }}
                        >
                            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left text-gray-900 dark:text-white">
                                Send a message
                            </h2>
                            <form
                                onSubmit={handleSubmit}
                                className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg space-y-5"
                            >
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <span className="text-red-500">*</span> Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <span className="text-red-500">*</span> Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <span className="text-red-500">*</span> Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Write your message here..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                                    />
                                </div>
                                {submitMessage && (
                                    <p
                                        role="status"
                                        className={`text-sm ${
                                            submitStatus === 'success'
                                                ? 'text-green-600 dark:text-green-400'
                                                : 'text-red-600 dark:text-red-400'
                                        }`}
                                    >
                                        {submitMessage}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 py-2.5 px-6 bg-primary text-white rounded-full hover:opacity-90 transition-all font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send message'}
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
