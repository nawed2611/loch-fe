"use client";

import TestimonialCard from "@/components/testimonial/card"
import { motion } from 'framer-motion';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from 'sonner';
import Testimonial from "@/components/testimonial/testimonial";
import CarouselCard from "@/components/carousel/carousel";
import Signup from "@/components/signup";


export default function Home() {
  return (
    <main className="flex sm:flex-row flex-col min-h-screen">
      <Toaster />

      <div className='w-full sm:w-2/3 drop-shadow-2xl'>
        <div className='sm:h-[60vh]'>
          <div className="flex flex-col sm:flex-row pt-2 items-center justify-between">
            <div className="flex flex-col gap-4 p-6 sm:p-0 w-full sm:w-1/3 items-start pr-2 mx-12">
              <Image className="" src="./bell.svg" width={40} height={40} alt="Bell Image" />
              <h1 className='text-shadow text-3xl'>Get notified when a highly correlated whale makes a move</h1>
              <p className="opacity-70">Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
            </div>
            <CarouselCard />
          </div>

          <div className="flex sm:flex-row flex-col items-center justify-between">
            <Image src="./cohorts.svg" width={420} height={420} alt="Cohorts Image" />
            <div className="flex flex-col gap-4 w-full p-6 sm:p-0 sm:w-1/3 items-end pr-12 sm:pr-2 mx-4 sm:mx-12">
              <Image className="" src="./eye.svg" width={40} height={40} alt="Bell Image" />
              <h1 className='text-right text-3xl'>Watch what the whales are doing</h1>
              <p className="text-right opacity-70">All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>

      <Signup />
    </main>
  )
}
