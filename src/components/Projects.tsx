"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d22b2b]/80'>
                {projects?.map((project, i) => (
                    <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <div className="flex justify-center items-center p-5 border-4 border-[#BC96E6] rounded-lg">
                            <a href={project.linkToBuild} target='_blank'>
                                <motion.img
                                    initial={{
                                        y: -300,
                                        opacity: 0,
                                    }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2 }}
                                    src={urlFor(project?.image).url() || "https://i.ibb.co/XzP2qYn/default.png"}
                                    alt="project image"
                                    className='h-60 md:h-80 xl:h-96 object-cover bg-white rounded-lg' // Set a specific height for the image
                                />
                            </a>
                        </div>

                        <div className='space-y-10 px-0 md:px-10 w-full'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#D22B2B]'>Project {i + 1} of {projects.length} :</span>
                                <p>{project?.title}</p>
                            </h4>
                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies.map(technology => (
                                    <img key={technology._id} src={urlFor(technology.image).url()} className='h-10 w-10' alt={technology.title} />
                                ))}
                            </div>
                            <p className='text-lg text-center md:text-left'>{project?.summary}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#D22B2B]/20 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    );
}

export default Projects;
