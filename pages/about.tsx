import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const About: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Learn more about my journey, experience, and what drives me to create exceptional web applications.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/7988116/pexels-photo-7988116.jpeg"
                  alt="Developer Portrait"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </AnimatedSection>
            
            {/* Bio */}
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a passionate full-stack developer with a focus on the MERN stack (MongoDB, Express, React, Node.js). 
                With over 5 years of experience in web development, I've had the opportunity to work on a wide range of projects 
                from small business websites to complex web applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My journey in web development began when I was in college, where I discovered my passion for creating 
                interactive and user-friendly web experiences. Since then, I've been constantly learning and improving my skills 
                to stay up-to-date with the latest technologies and best practices.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                What drives me is the opportunity to solve complex problems and create solutions that make a positive impact. 
                I believe in clean code, user-centered design, and the power of technology to transform businesses and lives.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <Link href="/projects" className="btn btn-primary">View My Work</Link>
                <Link href="/contact" className="btn border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">My Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A timeline of my professional journey and key milestones.
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-4 border-primary-500 ml-6 pl-12 pb-6">
              {/* Timeline Event 1 */}
              <AnimatedSection className="mb-12" delay={0.1}>
                <span className="absolute left-0 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white -translate-x-6">
                  2023
                </span>
                <h3 className="text-2xl font-bold mb-2">Senior Frontend Developer</h3>
                <h4 className="text-xl text-primary-600 dark:text-primary-400 mb-4">TechCorp Inc.</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Led a team of developers in building a large-scale web application using Next.js and TypeScript. 
                  Implemented state management with Redux, and integrated with various third-party APIs. 
                  Reduced load times by 60% through code optimization and improved architecture.
                </p>
              </AnimatedSection>
              
              {/* Timeline Event 2 */}
              <AnimatedSection className="mb-12" delay={0.2}>
                <span className="absolute left-0 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white -translate-x-6">
                  2021
                </span>
                <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                <h4 className="text-xl text-primary-600 dark:text-primary-400 mb-4">WebSolutions Agency</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Developed and maintained multiple client projects using the MERN stack. 
                  Created custom API solutions, implemented authentication systems, and designed database schemas. 
                  Collaborated directly with clients to gather requirements and provide technical guidance.
                </p>
              </AnimatedSection>
              
              {/* Timeline Event 3 */}
              <AnimatedSection className="mb-12" delay={0.3}>
                <span className="absolute left-0 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white -translate-x-6">
                  2019
                </span>
                <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
                <h4 className="text-xl text-primary-600 dark:text-primary-400 mb-4">DigitalCraft Studios</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Built responsive and interactive web interfaces using React.js. 
                  Implemented design systems and component libraries for consistent UI. 
                  Worked closely with designers to translate visual designs into functional code.
                </p>
              </AnimatedSection>
              
              {/* Timeline Event 4 */}
              <AnimatedSection delay={0.4}>
                <span className="absolute left-0 flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white -translate-x-6">
                  2018
                </span>
                <h3 className="text-2xl font-bold mb-2">Web Development Internship</h3>
                <h4 className="text-xl text-primary-600 dark:text-primary-400 mb-4">StartUp Innovations</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Assisted in the development of web applications and gained hands-on experience with various technologies.
                  Learned about professional development workflows and best practices.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education & Certifications */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Education & Certifications</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My academic background and professional certifications.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Education */}
            <AnimatedSection direction="left">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md h-full">
                <h3 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Education</h3>
                <ul className="space-y-8">
                  <li>
                    <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                    <p className="text-primary-600 dark:text-primary-400 mb-2">University of Technology, 2014-2018</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Specialized in Web Technologies and Software Engineering
                    </p>
                  </li>
                  <li>
                    <h4 className="text-xl font-semibold">Associate Degree in Web Design</h4>
                    <p className="text-primary-600 dark:text-primary-400 mb-2">Design Institute, 2012-2014</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Focused on UI/UX principles and design fundamentals
                    </p>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            {/* Certifications */}
            <AnimatedSection direction="right">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md h-full">
                <h3 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Certifications</h3>
                <ul className="space-y-6">
                  <li>
                    <h4 className="text-xl font-semibold">AWS Certified Developer</h4>
                    <p className="text-gray-700 dark:text-gray-300">Amazon Web Services, 2022</p>
                  </li>
                  <li>
                    <h4 className="text-xl font-semibold">MongoDB Certified Developer</h4>
                    <p className="text-gray-700 dark:text-gray-300">MongoDB, Inc., 2021</p>
                  </li>
                  <li>
                    <h4 className="text-xl font-semibold">React Advanced Concepts</h4>
                    <p className="text-gray-700 dark:text-gray-300">Frontend Masters, 2020</p>
                  </li>
                  <li>
                    <h4 className="text-xl font-semibold">Certified Scrum Master</h4>
                    <p className="text-gray-700 dark:text-gray-300">Scrum Alliance, 2019</p>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Want to work together?</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact Me
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;