import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link';

function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center">
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 0.5,
        }}
        transition={{
            duration: 1.5, 
        }}
        className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon url="https://linkedin.com/in/joe-bacatx" style={{ height: 100, width: 100 }} bgColor="#333399 " className="mr-10" />
            <SocialIcon url="https://github.com/JoeBcodes" style={{ height: 100, width: 100 }} bgColor="#333399" />
        </motion.div>

        <Link href="#contact-me">
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }} 
        animate={{
            x: 0,
            opacity: 1,
            scale: 1.0,
        }}
        transition={{
            duration: 1.5, }}
            className="flex flex-row items-center text-gray-300 cursor pointer">
            <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
        </motion.div>
        </Link>
    </header>
  );
}

export default Header
