"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#55286F]/50 p-10 hover:opacity-100 opacity-90 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          opacity: 0,
          y: -100
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={urlFor(experience?.companyImage).url()} alt="img" />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light text-white'>{experience?.jobTitle}</h4>
        <p className='font-bold text-3xl mt-1 text-white'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech used */}
          {experience.technologies.map(technology => (
            <img key={technology._id} className='h-10 w-10 rounded-full' src={urlFor(technology.image).url()} alt="img" />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} -{" "}{experience.isCurrentlyWorking ? "Present" : new Date(experience.dateEnded).toDateString()}</p>

        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin'>
          {experience.points.map((point, i) => (
            <li key={i} className='text-white'>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
