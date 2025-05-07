import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text content */}
          <div>
            <motion.span 
              className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium mb-6"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Building <span className="text-primary-600 dark:text-primary-400">exceptional</span> web experiences
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              variants={itemVariants}
            >
              I'm a MERN stack developer passionate about creating interactive applications 
              and experiences on the web.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link href="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="btn border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                Contact Me
              </Link>
            </motion.div>
          </div>
          
          {/* Hero image or illustration */}
          <motion.div
            className="relative h-[400px] lg:h-[500px]"
            variants={itemVariants}
          >
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg"
                alt="Developer working on code"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent mix-blend-multiply rounded-lg"></div>
            </div>
            
            {/* Animated decorations */}
            <motion.div 
              className="absolute -top-8 -right-8 w-64 h-64 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute -bottom-16 -left-16 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -5, 0] 
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1 
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;