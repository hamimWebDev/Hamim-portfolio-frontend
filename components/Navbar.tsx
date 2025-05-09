import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
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
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
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
        <Link
          href="/"
          className="text-2xl font-bold text-primary-600 dark:text-primary-400"
        >
          Portfolio
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
          <img
            src="https://scontent.fdac183-1.fna.fbcdn.net/v/t39.30808-6/474045810_591381600437197_252489797853708854_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF74BnXm2VfyrcAeX7kptkA6qJzvtLPY23qonO-0s9jbQCj4_ziRTtzxSkShllMG01taqaccd8AoKpsL5jVy4JQ&_nc_ohc=Vnqze1EgZwIQ7kNvwGnIAs-&_nc_oc=Adkq7ABf4hlsJl07xDtz3k5GE94QhP5I6-ece0xLGtvoj1e_vWvw6P-djp0E3XMufqs&_nc_zt=23&_nc_ht=scontent.fdac183-1.fna&_nc_gid=cBbAVX-yHWYN2psyvYl8Tw&oh=00_AfJyDBctZB6hsBZzKM5l0Vre511hXmbPn6z5c7T0LKpaWw&oe=682340E4"
            alt="Portfolio Logo"
            className="w-8 h-8 rounded-full"
          />
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
