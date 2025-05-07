import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, filterProjects } from '@/redux/slices/projectsSlice';
import { RootState } from '@/redux/store';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection from '@/components/AnimatedSection';

const Projects: NextPage = () => {
  const dispatch = useDispatch();
  const { projects, filteredProjects, activeFilter, loading, error } = useSelector((state: RootState) => state.projects);
  const [category, setCategory] = useState<string[]>([]);
  
  useEffect(() => {
    dispatch(fetchProjects() as any);
  }, [dispatch]);
  
  // Extract all unique tags from projects
  useEffect(() => {
    if (projects.length > 0) {
      const allCategory = projects.reduce((acc: string[], project) => {
        if (!acc.includes(project.category)) {
          acc.push(project.category);
        }
        return acc;
      }, []);
      
      setCategory(allCategory);
    }
  }, [projects]);
  
  const handleFilterChange = (filter: string) => {
    dispatch(filterProjects(filter));
  };
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore my latest work and creative solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filters */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All Projects
              </button>
              
              {category.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Projects Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-error-600 dark:text-error-400">{error}</p>
              <button 
                onClick={() => dispatch(fetchProjects() as any)}
                className="mt-4 btn btn-primary"
              >
                Try Again
              </button>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">No projects found with the selected filter.</p>
              <button 
                onClick={() => handleFilterChange('all')}
                className="mt-4 btn btn-primary"
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                Let's collaborate to bring your ideas to life. I'm available for freelance work and partnerships.
              </p>
              <button className="btn btn-primary">
                Discuss Your Project
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;