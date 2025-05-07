import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import HeroSection from '@/components/HeroSection';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '@/redux/slices/projectsSlice';
import { RootState } from '@/redux/store';
import ProjectCard from '@/components/ProjectCard';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state: RootState) => state.projects);
  
  useEffect(() => {
    dispatch(fetchProjects() as any);
  }, [dispatch]);
  
  // Filter to get only featured projects for homepage
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      
      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              With over 5 years of experience in web development, I've mastered the following technologies and tools.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Skill categories */}
            <AnimatedSection className="col-span-2 md:col-span-1" delay={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Frontend</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>React.js & Next.js</li>
                  <li>TypeScript</li>
                  <li>Redux & Context API</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="col-span-2 md:col-span-1" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4 text-secondary-600 dark:text-secondary-400">Backend</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Node.js & Express</li>
                  <li>MongoDB & Mongoose</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>Authentication</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="col-span-2 md:col-span-1" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4 text-accent-600 dark:text-accent-400">Tools</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>AWS & Vercel</li>
                  <li>Jest & Testing Library</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="col-span-2 md:col-span-1" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-4 text-success-500">Other Skills</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>UI/UX Design</li>
                  <li>Responsive Design</li>
                  <li>Performance Optimization</li>
                  <li>SEO Best Practices</li>
                  <li>Agile Development</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Take a look at some of my recent work. These projects showcase my skills and expertise in web development.
            </p>
          </AnimatedSection>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
              
              <div className="text-center">
                <Link href="/projects" className="btn btn-primary">
                  View All Projects
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg mb-8 text-white/90">
                Have a project in mind? I'm currently available for freelance work or collaboration.
                Let's build something amazing together!
              </p>
              <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Get in Touch
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;