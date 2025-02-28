"use client";

import { WorldMap } from '@/components/areas/worldConnection';
import { Component } from '@/components/footer/footer';
import { FocusCards } from '@/components/imagesEducation/imgEducation';
import { Button } from '@/components/ui/button';
import { CircleChevronLeft, NfcIcon } from 'lucide-react';
import Image from 'next/image';
import { Router } from 'next/router';

export default function Education() {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <div>
        <CircleChevronLeft size={30} onClick={() => {
          window.history.back();
        }} />
      </div>
      <h2 className="text-3xl font-bold mb-4 text-center">MGM Education</h2>

      <div>
        <div>
          <h2>Smart Learnind Deeper & More</h2>
          <p>Search and gain more knowledge</p>

          <Button title='Start' />
        </div>

        <div>
          <Image src="/education.jpg" alt="Education" width={500} height={500} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4>About us</h4>

        <p className="mb-4 text-gray-700">
          We are passionate about empowering learners WorldWide,
          Education as they say is the key to success. At MGM, we also provide additional paid services to students to help them ace their subjects
          and succeed in the future.
        </p>
        <p className="text-gray-700">
          We live by the Triple C rule (Communication, Collaboration, and Creativity).
        </p>

        {/* Stats */}
        <div>
          <h6>Our Stats</h6>
          <div>
            <NfcIcon size={30} />
            <span>1000+ Students</span>

            <NfcIcon size={30} />
            <span>100+ Teachers</span>

            <NfcIcon size={30} />
            <span>10+ Courses</span>
          </div>
        </div>

      </div>







      <div>
        <FocusCards />
      </div>


      <div>
        <WorldMap />
      </div>


      <Component />
    </div>
  );
}
