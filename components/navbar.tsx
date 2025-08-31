"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  currentPath?: string;
}

export const Navbar = ({ currentPath }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="relative flex justify-between items-center py-4 sm:py-8 lg:py-12">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            <NavLink href="/projects" isActive={currentPath === "/projects"}>
              PROJECTS
            </NavLink>
            <NavLink href="/about" isActive={currentPath === "/about"}>
              ABOUT
            </NavLink>
          </div>
        </div>

        {/* Desktop Freelance Button */}
        <div className="hidden lg:block">
          <FreelanceButton isActive={currentPath === "/contact"} />
        </div>

        {/* Mobile Hamburger */}
        <HamburgerMenu
          isOpen={mobileOpen}
          toggle={() => setMobileOpen(!mobileOpen)}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#171717] z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-light tracking-wide transition-colors ${
                    currentPath === "/"
                      ? ""
                      : "border border-white/30 px-8 py-2 rounded-full"
                  }`}
                >
                  HOME
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-light tracking-wide transition-colors ${
                    currentPath === "/projects"
                      ? ""
                      : "border border-white/30 px-8 py-2 rounded-full"
                  }`}
                >
                  PROJECTS
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-light tracking-wide transition-colors ${
                    currentPath === "/about"
                      ? ""
                      : "border border-white/30 px-8 py-2 rounded-full"
                  }`}
                >
                  ABOUT
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-14"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-light tracking-widest transition-all duration-300 ${
                    currentPath === "/contact"
                      ? "px-8 py-3 rounded-full"
                      : "border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black"
                  }`}
                >
                  AVAILABLE FOR FREELANCE
                </Link>
              </motion.div>
            </div>

            {/* Social Links Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 flex gap-8 text-sm font-light tracking-wider uppercase"
            >
              <Link
                href="mailto:mail@muizrexhepi.com"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Email
              </Link>
              <Link
                href="https://www.instagram.com/muiz.rexhepi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Instagram
              </Link>
              <Link
                href="https://x.com/muiz_rexhepi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/muiz-rexhepi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                LinkedIn
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Logo Component
const Logo = () => (
  <Link href="/" className="z-50">
    <h1 className="font-light text-5xl tracking-tight text-white select-none sm:block hidden">
      MUIZ R.
    </h1>
    <h1 className="font-light text-4xl tracking-tight text-white select-none sm:hidden">
      MR.
    </h1>
  </Link>
);

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink = ({ href, children, isActive = false }: NavLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative px-4 py-1 text-lg tracking-tight rounded-full"
        initial={false}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: isActive || isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />

        {/* Text */}
        <motion.span
          className="relative z-10"
          animate={{
            color: isActive || isHovered ? "#000000" : "#ffffff",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
      </motion.div>
    </Link>
  );
};

// Freelance Button Component
interface FreelanceButtonProps {
  isActive?: boolean;
}

const FreelanceButton = ({ isActive = false }: FreelanceButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/#contact"
      className="relative overflow-hidden z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative border border-white/30 px-6 py-1 rounded-full"
        initial={false}
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />

        {/* Text */}
        <motion.span
          className="relative text-lg tracking-tight"
          animate={{
            color: isHovered ? "#000000" : "#ffffff",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          AVAILABLE FOR FREELANCE
        </motion.span>
      </motion.div>
    </Link>
  );
};

// Hamburger Menu Component
interface HamburgerMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerMenu = ({ isOpen, toggle }: HamburgerMenuProps) => {
  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 group"
      onClick={toggle}
      aria-label="Toggle navigation menu"
    >
      <motion.span
        animate={
          isOpen
            ? { rotate: 45, y: 8, backgroundColor: "#ffffff" }
            : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block w-9 h-0.5 rounded-sm"
      />
      <motion.span
        animate={
          isOpen
            ? { opacity: 0, backgroundColor: "#ffffff" }
            : { opacity: 1, backgroundColor: "#ffffff" }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block w-9 h-0.5 rounded-sm my-2"
      />
      <motion.span
        animate={
          isOpen
            ? { rotate: -45, y: -8, backgroundColor: "#ffffff" }
            : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block w-9 h-0.5 rounded-sm"
      />
    </button>
  );
};
