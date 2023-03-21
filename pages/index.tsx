import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Link from 'next/link'
import Experience from '@/components/Experience'
import ContactMe from '@/components/ContactMe'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

//change Image tags to next/image
 const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0">
      <Head>
        <title>My Portfolio</title>
       </Head>
      <Header />
  
      <section id="hero" className="snap-start">
       <Hero />
      </section>
     
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>
     
      <section id="skills" className="snap-start">
        <Skills />
      </section>
     
      <section id="projects" className="snap-start">
        <Projects />
      </section>
     
      <section id="contact-me" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};