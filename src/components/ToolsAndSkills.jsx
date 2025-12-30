import React from 'react';
import { motion } from 'framer-motion';

const ToolsAndSkills = () => {
  const skills = [
    "Telemarketing & Customer Service Specialist",
    "Project Management Professional",
    "Lead Generation Strategist",
    "Client Relationship Manager",
    "Cold Calling",
    "Sales Operations Coordinator",
    "Business Development Manager",
    "Appointment Setting",
    "CRM Expert",
    "Sales Closing",
    "Lead Qualification",
    "CRM Management",
    "Professional Communication",

  ];

  const tools = [
    "HubSpot CRM",
    "Salesforce",
    "Zoho CRM",
    "Oddo", "Zoom", "Google Voice", "Just Call", "Vici Dial", "Ringover", "Google Sheet", "Google Forms", "Google Meet",
    "Aircall",
    "RingCentral",
    "Five9",
    "Google Calendar",
    "Calendly",
    "Gmail",

  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
            Tools & Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A professional toolkit focused on high-quality conversations,
            qualified appointments, and revenue-driven results.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 hover:text-primary dark:hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-display font-bold text-xl md:text-2xl text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 hover:text-primary dark:hover:text-primary transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolsAndSkills;
