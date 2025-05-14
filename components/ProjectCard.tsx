import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Project } from '@/redux/slices/projectsSlice';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const { title, description, image, technologies, liveLink, githubUrl } = project;
  
  return (
    <motion.article 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="relative h-56 w-full">
        <Image 
          src={image} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex items-center space-x-4 mt-4">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              <FiExternalLink className="mr-1" />
              Live Demo
            </a>
          )}
          
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:underline"
            >
              <FiGithub className="mr-1" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;