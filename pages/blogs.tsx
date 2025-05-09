import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, filterProjects } from '@/redux/slices/projectsSlice';
import { RootState } from '@/redux/store';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection from '@/components/AnimatedSection';
import blogs from '@/public/blogs';
import Blog from '@/components/Blog';

const Blogs: NextPage = () => {
  
  return (
    <section className="lg:px-16 sm:px-3 pb-20 ">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Blogs</h1>
            
          </div>
        </div>
      </section>

        {/*  */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10   gap-y-4  sm:grid-cols-1  p-2  h-auto w-full">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </section>
  );
};

export default Blogs;