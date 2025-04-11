"use client";

import React, { useEffect, useState } from 'react';
import { Component } from '@/components/footer/footer';
import { Button } from '@/components/ui/button';
import { CircleChevronLeft } from 'lucide-react';
import Image from 'next/image';
import ElearningServices from '@/components/education/services';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { TextGenerateEffect } from "@/components/ui/text-generate-effext";

export default function Education() {
  const words = `The rise of elearning has fundamentally transformed the educational landscape, making quality education accessible to learners worldwide. With the advent of technology,
              traditional classroom settings have evolved into dynamic online platforms that cater to diverse
              learning styles and preferences.E-learning offers flexibility, allowing students to learn
              at their own pace and convenience.`;

  return (
    <div className=" bg-black min-h-screen flex flex-col p-1 gap-4">
      <div className='bg-white p-2 rounded-lg shadow-md flex justify-between items-center'>
        <div>
          <CircleChevronLeft size={30} onClick={() => {
            window.history.back();
          }} />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center">MGM Education</h2>
      </div>

      <div className="flex justify-center bg-black">
        <div className="w-11/12 flex flex-row md:flex-row justify-between items-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-1/2">
            <h2 className='text-5xl'>Knowledge At Your Fingertips Explore Our E-Learning Platform</h2>
            <p>Our platforms are mainly focused in developing remote schools areas, which cater to various interests
              and skills. We offer a wide range of courses, from academic subjects to practical skills, ensuring that there is something for everyone.
              Our platform is designed to be user-friendly and accessible, making it easy for students to navigate and find the courses that suit their needs.
            </p>

            <Button className="w-52 mt-5 bg-black">Start</Button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image src="/images/edu.jpg" alt="Education" width={500} height={500} />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className='text-5xl font-bold mb-4 mt-5 text-center text-white'>Our Services</h1>
        </div>
        <ElearningServices />
      </div>

      <div className="flex justify-center">
        <div className="w-11/12 flex justify-center flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-md">
          <div className="w-1/3 flex justify-center items-center">
            <Image src="/images/edu.jpg" alt="Education" width={500} height={500} />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-start p-4">
            <h1 className='text-4xl'>The Rise Of E-Learning Trasnforming Education</h1>
            <TextGenerateEffect words={words} className="text-black" />
            <Button className='w-52 mt-4'>Learn More</Button>
          </div>
        </div>
      </div>

      <Component />
    </div>
  );
}
