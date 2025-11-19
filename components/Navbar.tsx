"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { link: "/#about", name: "About" },
    { link: "/#education", name: "Education" },
    { link: "/#skills", name: "Skills" },
    { link: "/#projects", name: "Projects" },
    { link: "/#contact", name: "Contact" },
  ];
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 w-full z-50 border border-b  "
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
         border: "1px solid rgba(255, 255, 255, 0.125)"
      }}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-2xl text-purple-300"
          >
            <Link href='/'>Dharshan</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="dark:text-neutral-50 dark:hover:text-neutral-300 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.nav initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}  className="md:hidden overflow-hidden ">
            <div className="py-4 space-y-2">
              {
                navItems.map((item,idx) => (
                  <Link key={idx} href={item.link} className="block w-full text-right px-4 py-2 text-sm font-medium" onClick={()=> setIsMobileMenuOpen(false)}>
                  {item.name}
                  </Link>
                ))
              }

            </div>

        </motion.nav>
      </div>
    </motion.nav>
  );
};

export default Navbar;
