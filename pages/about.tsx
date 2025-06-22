import { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Head from "next/head";
import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";

const About: NextPage = () => {
  const { data: projects, isLoading, isError } = useGetAllProductsQuery(undefined);
     console.log(projects, "projects");
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="This is  Md. Hamim Howlader Asif's Portfolio About page"
        />
      </Head>
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
                Learn more about my journey, experience, and what drives me to
                create exceptional web applications.
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
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </AnimatedSection>

              {/* Bio */}
              <AnimatedSection direction="right">
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm a passionate full-stack developer with a focus on the MERN
                  stack (MongoDB, Express, React, Node.js). With over 5 years of
                  experience in web development, I've had the opportunity to
                  work on a wide range of projects from small business websites
                  to complex web applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My journey in web development began when I was in college,
                  where I discovered my passion for creating interactive and
                  user-friendly web experiences. Since then, I've been
                  constantly learning and improving my skills to stay up-to-date
                  with the latest technologies and best practices.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  What drives me is the opportunity to solve complex problems
                  and create solutions that make a positive impact. I believe in
                  clean code, user-centered design, and the power of technology
                  to transform businesses and lives.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/projects" className="btn btn-primary">
                    View My Work
                  </Link>
                  <Link
                    href="/contact"
                    className="btn border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Get in Touch
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

       
      </motion.div>
    </>
  );
};

export default About;
