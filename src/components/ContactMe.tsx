"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../../typings';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {
    pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        const { name, email, subject, message } = formData;
        const mailCont = `mailto:mondal.abhi0307@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailCont;
    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>

            <div className='flex flex-col space-y-16'>
                <div className='flex flex-col space-y-10'>
                    <h4 className='text-4xl font-semibold text-center'>
                        I have got just what you need.{" "}
                        <span className='decoration-[#d22b2b]/50 underline'>Let&apos;s Talk</span>
                    </h4>

                    <div className='space-y-10'>
                        <div className='flex items-center space-x-5 justify-center'>
                            <PhoneIcon className='text-[#d22b2b]/80 h-7 w-7 animate-pulse' />
                            <p className='text-2xl text-white'>+91 {pageInfo?.phoneNumber}</p>
                        </div>

                        <div className='flex items-center space-x-5 justify-center'>
                            <EnvelopeIcon className='text-[#d22b2b]/80 h-7 w-7 animate-pulse' />
                            <p className='text-2xl text-white'>{pageInfo?.email}</p>
                        </div>

                        <div className='flex items-center space-x-5 justify-center'>
                            <MapPinIcon className='text-[#d22b2b]/80 h-7 w-7 animate-pulse' />
                            <p className='text-2xl text-white'>{pageInfo?.address}</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type="submit" className='bg-[#d22b2b]/80 hover:bg-[#d22b2b]/60 py-5 px-10 rounded-md text-white font-bold text-lg transition-colors duration-500 ease-in-out'> Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
