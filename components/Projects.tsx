import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  projects: Project[];
};

function Projects({projects }: Props) {

 // const projects = [1, 2, 3, 4, 5];
  return (
    
    <motion.div 
    initial={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0">
     <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
      Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div key={project._id} className="w-screen flex-shrink-0 snap-center
          flex-col space-y-5 items-center justify-center
          p-20 md:p-44 h-screen">
            <motion.img
             initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              // "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              />
         

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                  {/* UPS clone */}
                </h4>

                <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img 
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    />
                ))}
                </div>

                <p className="text-lg text-center md:text-left">
                {project?.summary}
               
                {/* « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                  sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »  */}
                </p>
              </div>
            </div>
        ))}
        </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
      -skew-y-12"
      /> 
      </motion.div>
  );
}

export default Projects