import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import profileImage from "../Images/profile_image.jpg";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Blogs", path: "/blogs" },
];

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return { darkMode, toggleTheme };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-md backdrop-blur-sm py-4"
      : "bg-transparent py-6"
  }`;

  return (
    <header className={navbarClasses}>
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="cursor-pointer text-xl flex items-end">
          <img src="https://i.ibb.co/jHbyW2c/p.png" alt="" className="w-8" />
          <span className="text-3xl text-white font-bold">ort</span>
          <span className="text-3xl font-bold text-[#00C0FF]">folio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                router.pathname === item.path
                  ? "text-primary-600 dark:text-primary-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.name}
              {router.pathname === item.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Theme toggle and mobile menu button */}
        <div className="flex items-center space-x-4">
          <Image
            src={profileImage}
            alt="Portfolio Logo"
            className="w-8 h-8 rounded-full"
          />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {mobileMenuOpen && (
          <div className="container-custom py-4 bg-white dark:bg-gray-900 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                  router.pathname === item.path
                    ? "text-primary-600 dark:text-primary-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Navbar;
