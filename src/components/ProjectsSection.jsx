import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const ProjectsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = isExpanded ? projectsData : projectsData.slice(0, 4);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of successful campaigns and projects across various industries.
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col h-full cursor-pointer hover:-translate-y-1"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 w-full overflow-hidden relative">
                  {project.image && !project.image.includes('placeholder') ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary/40">
                      <span className="text-4xl font-bold opacity-20">{index + 1}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-block font-display font-bold text-sm uppercase tracking-widest px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-md shadow-lg transition transform hover:-translate-y-1"
          >
            {isExpanded ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black transition text-gray-800 dark:text-white"
              >
                <FaTimes />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
                {selectedProject.image && !selectedProject.image.includes('placeholder') ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-secondary opacity-20 text-6xl font-bold">{selectedProject.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">From: {selectedProject.date}</p>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                  {selectedProject.link && selectedProject.link !== '#' && (
                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="hidden md:inline-block bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider hover:bg-black transition">
                      Contact
                    </a>
                  )}
                </div>


                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.details && (
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {selectedProject.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Price Range</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedProject.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Project Duration</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Industry</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedProject.industry}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Project Category</p>
                    <span className="inline-block border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>

                  <div className="md:hidden">
                    {/* Mobile Contact Button */}
                    <a href="#" className="bg-gray-900 text-white text-xs font-bold px-6 py-2.5 rounded uppercase tracking-wider hover:bg-black transition shadow-lg">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
