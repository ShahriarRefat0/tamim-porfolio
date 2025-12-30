import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Button from './Button';
import Swal from 'sweetalert2';

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    // or set them up in a .env file
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        e.target.reset();
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <section className="relative py-24 bg-background-light dark:bg-background-dark overflow-hidden faded-city-bg">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                placeholder="How can we help you..."
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-bold text-sm uppercase tracking-widest px-10 py-4 shadow-lg transition transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaPaperPlane />
                    </motion.span>
                  </>
                )}
              </button>
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-center font-semibold bg-green-50 dark:bg-green-900/20 p-4 rounded-lg"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-center font-semibold bg-red-50 dark:bg-red-900/20 p-4 rounded-lg"
              >
                Something went wrong. Please check your console or try again later.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
