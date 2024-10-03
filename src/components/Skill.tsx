import React from 'react'
import { motion } from 'framer-motion';
import { Skill as Sk } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Sk
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill.image).url()}
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#210B2C]/80 h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
            <div className='flex flex-col items-center justify-center h-full text-center'>
                <p className='text-xl font-bold text-white'>{skill.title}</p>
                <p className='text-base font-bold text-white'>{`${skill.progress}%`}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;
