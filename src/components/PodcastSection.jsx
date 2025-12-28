import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaUndo, FaRedo } from 'react-icons/fa';
import Button from './Button';

const PodcastSection = () => {
  const episodes = [
    {
      title: "How Pace Morby is TAKING OVER the Real Estate Industry",
      time: "1:05:58",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdQcuPgPBlSC2GeEzI8wOuamKnOcL__9B0BHfcVoNywi7G8TSNYIIRI9iK60TQhgSeWEPEhN60ZNvODy3J-CQvES3V5H6kF42pXNcYocJigKX0H0AomsHpWZfpzOqH2lMpiChNrl1ArbWdSVurE2fbQ1Pi8UNIphwg3b69J1ks8ksrcmON2chAja4zdESGT_VW5szYDHDxKETHcH30lmaQxi65wLqSeTwFMPaNx837TGNyxkQ9pABsNhMU72LwLTvHjYaGBhpC58kJ",
      active: true
    },
    {
      title: "The Good, Bad, and UGLY of +700 Wholesale Deals w/ Adam Devine",
      time: "42:36",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUkpLqao4ZtEAsZlyrffGV6CPPEfROdtBujhArB05zaW5fggAFWMk44DAZ0yek5J8kYIB98ebpAYfFA_E-E8p8IY01QGSUlvoMEVdiCl60NHVwsXpYF1TfXP3clNwei9gUqlxS03Wz1xv6Pl2DDi0AwoWEzHxAabzVV_24WSeDgBIUQ-ygRPD_BZAxG2NzCT0dvBi5X5uKdu-575c9WUAEdbmpeeFHhZGiv-LP-tF6EHuI-jDvFytaV7Vyf_uETetIuA36X8rgaz-O",
      gray: true
    },
    {
      title: "How to Build Wealth in Real Estate NOW! w/ Eric Melnikoff",
      time: "37:20",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuuBkXIocEYkyKJM7tSGE-EcMHjhMRFX3JapfSZzPvI5M922UkTHWuvNzAqnYBVS_MEmZAL0yDlPe-QnT6MkmPHiq6WxFRj3urxCyGc3n43715KWry0kHvlfdaRDSiOC6K2mIRwxwX3AAFmDJybJr9TdwOmbM8eK-Tk5i87RwQklBxGLSihPmaEi9gjo2LH0KXwh3XYfrirbPw8ruff3oipXZL_L_qhtt9BWYR1YBDGwkjtrVcdtdpZphSXd8v14jNHC7vZpDLz4Bh",
      gray: true
    },
    {
      title: "How to Run a 90-Year-Long Building Material Dynasty w/ TJ Shaheen",
      time: "40:53",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJQc4Qa81ChBM2GN_XwW-WAkfjRBRo42t5uhp_tfjsiQ3N0adA0A98gNmZx1hd6mMJUYQzItP3WbbCxD8C3xxGyhvxlE-3FGzDFtU5AnK2qCIZOFuasDLN0p64x7ntQs1k8d8VTCu3BJqKlYXwYRwcs-kB04_hDFsGmULJemx4e2PCwNWVUTGCDZBMNbWIpKF53tEIOWKM_silT5lXGE47_br_KxpJ6AK3ede1kJbs89gIDtk9MytbWROZsT-cayLo3BNDvb5TFcwx",
      gray: true
    }
  ];

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-700 dark:text-gray-300 mb-6 font-medium text-lg leading-relaxed max-w-2xl mx-auto"
          >
            I’m the host of the <a href="#" className="text-primary hover:underline italic font-bold">Deals & Dollars</a> Podcast.
            Every week I bring on some of the best investors and real estate professionals in the game who bring
            you the information you need to gain real leverage in real estate... today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="#" variant="small" className="mb-12">
              All Episodes
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          <div className="p-6 md:p-8 border-b border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-lg overflow-hidden shadow-md relative group">
              <img
                alt="Podcast Cover"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM7zGXna2hROHaCPP-siTTI1iZawNEXaYLHI5086P4Vu8VUWW_F215QN_7uxQovuwmNKdqHuUvhwc_gIGaF6Swv3VseFvu0doZsQPWZwyKtOAvVhpbvosOJnWcwHh_1b0rkoS3HjrERoz5HnaLKGjiMAiN2DfytQAWenIibmrIaNJcANkjR_qkYLjM0No5xSW59Oer0XtVMUyzCRbd8mZAlT50e5rAn8LfmaplSbuQo4p53qiUkG4w2eIH6QaYG7_Rwq-m7cfYmAWI"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <FaPlay className="text-white text-3xl" />
              </div>
            </div>

            <div className="flex-grow w-full">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white leading-tight">
                  Deals & Real Estate Investors and Entrepreneurs
                </h3>
              </div>

              <div className="h-12 w-full flex items-center gap-0.5 mb-4 opacity-40">
                {/* Visualizer bars simulation */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [Math.random() * 10 + 4, Math.random() * 20 + 10, Math.random() * 10 + 4] }}
                    transition={{ duration: 0.5 + Math.random(), repeat: Infinity, repeatType: "reverse" }}
                    className={`w-1 rounded-full ${i >= 5 && i <= 8 ? 'bg-primary' : 'bg-gray-800 dark:bg-gray-200'}`}
                    style={{ height: `${Math.random() * 20 + 4}px` }}
                  ></motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition shadow-lg">
                    <FaPlay className="text-xl ml-1" />
                  </button>
                  <div className="flex gap-3 text-gray-500 dark:text-gray-400 text-xs font-semibold">
                    <button className="hover:text-primary flex items-center gap-1"><FaUndo /> 15</button>
                    <button className="hover:text-primary flex items-center gap-1"><FaRedo /> 30</button>
                    <button className="hover:text-primary">1x</button>
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  00:00:00 | 01:05:58
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto bg-gray-50 dark:bg-[#1a2332]">
            {episodes.map((ep, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className={`p-4 flex items-center gap-4 border-b border-gray-100 dark:border-gray-700 transition ${ep.active ? 'bg-white dark:bg-surface-dark border-l-4 border-l-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'}`}
              >
                <img
                  alt="Thumb"
                  className={`w-10 h-10 rounded object-cover ${ep.gray ? 'grayscale opacity-70' : ''}`}
                  src={ep.image}
                />
                <div className="flex-grow">
                  <h4 className={`text-sm font-bold ${ep.active ? 'text-primary' : 'text-gray-700 dark:text-gray-300'}`}>
                    {ep.title}
                  </h4>
                </div>
                <span className="text-xs text-gray-400">{ep.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastSection;
