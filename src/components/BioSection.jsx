import React from 'react';
import { motion } from 'framer-motion';
import SoftwareCard from './SoftwareCard';
import Button from './Button';
import profileImage from '../image.jpeg';
import { MdDownload } from 'react-icons/md';

const BioSection = () => {
  return (
    <section className="relative py-20 faded-city-bg">
      <div className="relative z-10 container mx-auto px-4 max-w-4xl flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary overflow-hidden shadow-xl mb-10 -mt-32 md:-mt-40 bg-white relative"
        >
          <img
            alt="Shahriar Anjum Shakib"
            className="w-full h-full object-cover"
            src={profileImage}
          />
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-display  font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 leading-snug"
        >
          Hi, I’m Shahrier Anjum Shakib. I’m a global telemarketing and sales specialist who has managed 40+ campaigns across multiple industries,
          <br className="hidden md:block" /> and I help businesses consistently turn conversations into revenue.
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="prose prose-lg text-left dark:prose-invert text-gray-600 dark:text-gray-300 max-w-3xl space-y-6 mb-16 text-sm md:text-base leading-relaxed"
        >
          {/* <p>
            I help businesses generate qualified leads, book appointments, and close deals at scale through high-performance cold calling and telemarketing. With 5+ years of experience and 40+ successful campaigns, I lead a trained sales team that delivers measurable results across B2B and B2C markets.
          </p>
          <p>
            I’ve worked with clients in the USA, UK, Canada, Australia, and New Zealand, driving growth in competitive industries like Solar, Medicare, Real Estate, Home Improvement, and Digital Marketing. My approach is direct, disciplined, and conversion-focused—every call has a purpose, and every campaign is built to produce ROI.
          </p>
          <p>
            Beyond dialing, I manage CRM systems, lead quality, follow-ups, and performance tracking to ensure nothing slips through the cracks. I don’t believe in wasted conversations or generic scripts. I build systems that turn prospects into customers.
          </p>
          <p>
            If you want a sales partner who executes, scales, and closes, let’s grow your revenue.
          </p> */}

          <p>
            I can turn cold prospects into qualified sales appointments remotely, consistently, and at scale.

            Over the past 5+ years, I've managed 40+ outbound sales campaigns for B2B and B2C clients across the USA, UK, Canada, Australia, and New Zealand. My work has generated thousands of qualified leads and supported millions in pipeline value across solar, SaaS, insurance, real estate, and financial services.
            I specialize in the full outbound sales cycle: cold calling, lead qualification, appointment setting, objection handling, and pipeline management. I've built and led remote sales teams, developed high-converting scripts, and optimized CRM workflows that improve conversion rates and campaign ROI.
              
</p>
            <p>
            <strong>What I bring to the table: </strong>

            Proven ability to book qualified appointments in competitive, high-ticket industries.
            Experience managing remote SDR teams and scaling outbound operations.
            Deep knowledge of sales tech stack (HubSpot, Salesforce, Zoho, GoHighLevel, Vicidial, JustCall).
            Strategic approach to lead qualification, I don't just set appointments, I set good ones.
              
</p>
            <p>
            <strong>Industries I've worked in: </strong>

            Solar & Renewable Energy, Insurance, SaaS, Real Estate, Business Funding, Trucking, Digital Marketing, Internet, Home Improvement, Cleaning & Maintenance, etc.

            </p>
            <p>
              
            <strong>Core competencies: </strong>

            Outbound Sales, Inside Sales, Cold Calling, Appointment Setting, Lead Generation, Customer Service, Virtual Assistance, Admin Support, Quality Assurance, Sales Operations, Remote Team Management, CRM Management, Pipeline Development, Sales Enablement.

            Whether you're looking to scale your outreach, improve appointment-setting rates, or need a reliable partner for your next campaign, let's connect. I'm open to exploring how we can work together.
      </p>
        </motion.div>

       

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button href="https://drive.google.com/file/d/1dQ-Oubf9XohI7wJO7OTK9XCQ3Yy-A_WD/view?ts=6953753f"
            target="_blank"
            rel="noopener noreferrer" className='flex items-center gap-2 hover:bg-white hover:text-[#148DA3] hover:border-[#148DA3] border transition-all duration-300 '>
           Resume <MdDownload />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default BioSection;
