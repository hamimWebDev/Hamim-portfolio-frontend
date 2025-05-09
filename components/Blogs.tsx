import React, { useEffect, useState } from "react";
import blogs from "@/public/blogs";
import Blog from "./Blog";


const Blogs = () => {
  return (
    <>
      <section className="lg:px-16 sm:px-3 ">
        <div className="lg:py-5 mb-11 lg:mt-1 ">
          <div className="text-center">
            <h3 className="text-4xl text-[#00C0FF] ">&lt; Blogs /&gt;</h3>
            <h1 className="text-3xl mt-3 lg:text-5xl text-white font-bold lg:mt-5">
              My Latest Blogs
            </h1>
          </div>
        </div>

        {/*  */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10   gap-y-4  sm:grid-cols-1  p-2  h-auto w-full">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
