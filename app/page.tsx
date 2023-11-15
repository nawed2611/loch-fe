"use client";

import TestimonialCard from "@/components/testimonial/card"
import { motion } from 'framer-motion';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from 'sonner';

const Card1 = () => (
  <div className="flex flex-col card-bg text-black w-42 p-4 rounded-lg gap-y-2">
    <div className="flex items-center justify-between">
      <Image src="./bell2.svg" width={20} height={20} alt="Bell Image" />
      <button className="rounded-lg font-semibold text-xs">Save</button>
    </div>
    <p className="w-3/4 text-sm pt-2">
      We’ll be sending
      notifications to you
      here
    </p>

    <form className="flex flex-col pt-2">
      <input className="focus:outline-none placeholder-black border p-2 text-black rounded-md text-xs" type="text" placeholder="hello@gmail.com" />
    </form>
  </div>
)

const Card2 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleInputChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-col card-bg text-black w-42 p-4 rounded-lg gap-y-2">
      <div className="flex items-center justify-between">
        <Image src="./barchart.svg" width={20} height={20} alt="Bell Image" />
        <Image src="./checkmark.svg" width={20} height={20} alt="Bell Image" />
      </div>
      <p className="w-3/4 text-sm pt-2">
        Notify me when any wallets
        move more than
      </p>

      <form className="flex flex-col pt-2">
        <input className="focus:outline-none placeholder-black border p-2 text-black rounded-md text-xs" type="text" placeholder="hello@gmail.com" />
      </form>
    </div>
  )
}

const Card3 = () => (
  <div className="flex flex-col card-bg text-black w-42 p-4 rounded-lg gap-y-2">
    <div className="flex items-center justify-between">
      <Image src="./clock.svg" width={20} height={20} alt="Bell Image" />
      <Image src="./checkmark.svg" width={20} height={20} alt="Bell Image" />
    </div>
    <p className="w-3/4 text-sm pt-2">
      Notify me when any wallet dormant for
    </p>

    <form className="flex flex-col pt-2">
      <input className="focus:outline-none placeholder-black border p-2 text-black rounded-md text-xs" type="text" placeholder="hello@gmail.com" />
    </form>
  </div>
)

export default function Home() {
  const repoContainer: any = useRef();
  const [width, setWidth] = useState(0);
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    setWidth(- repoContainer.current.scrollWidth + repoContainer.current.offsetWidth);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Please enter your email address");
      return;
    }

    // do regex check for email
    const regex = /\S+@\S+\.\S+/;

    if (!regex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    router.push("https://app.loch.one/welcome");
  }

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
            <div className="flex items-end p-4 sm:p-0 w-full sm:w-1/3">
              <motion.div ref={repoContainer} whileTap={{ cursor: "grabbing" }} className="cursor-grab flex overflow-hidden rounded-l-xl drop-shadow-2xl">
                <motion.div drag="x" dragConstraints={{ right: 0, left: -300 }} className="flex gap-4 ">
                  <Card1 />
                  <Card2 />
                  <Card3 />
                </motion.div>
              </motion.div>
            </div>
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

        <div className="flex flex-col items-end gap-y-4 h-[50vh] sm:h-fit sm:p-0 sm:pt-28 pt-8">
          <h1 className="text-2xl pr-12">Testimonials</h1>
          <div className="sm:w-[90%] w-full border-b border-gray-200 opacity-40 mx-12 mb-2"></div>

          <div className="flex sm:flex-row flex-col sm:items-end justify-between w-full gap-6 sm:gap-0">
            <Image className="ml-12" src="./vector.svg" width={60} height={60} alt="Vector Image" />

            <motion.div ref={repoContainer} whileTap={{ cursor: "grabbing" }} className="cursor-grab flex overflow-hidden w-full p-4 sm:p-0 sm:w-3/4 rounded-l-xl drop-shadow-2xl">
              <motion.div drag="x" dragConstraints={{ right: 0, left: -500 }} className="flex  gap-4 ">
                <TestimonialCard name="Jack F" title="Ex Blackrock PM" content="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”" />
                <TestimonialCard name="Yash P" title="Research, 3poch Crypto Hedge Fund" content="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”" />
                <TestimonialCard name="Shiv S" title="Co-Founder Magik Labs" content="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”" />
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center justify-center h-[60vh] sm:h-screen w-full sm:w-[35vw] bg-white rounded-sm drop-shadow-4xl gap-4'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2/3">
          <h1 className="text-4xl text-gray-300 pb-4">Sign up for exclusive access.</h1>
          <input className="focus:outline-none drop-shadow-lg border border-gray-200 text-black rounded-lg p-4" type="text" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="Your email address" />
          <button className="drop-shadow-lg bg-black hover:bg-gray-800 transition-all rounded-lg p-4" type="submit">Get Started</button>
        </form>
        <p className="text-gray-700 font-semibold text-sm sm:text-base pt-4">You’ll receive an email with an invite link to join.</p>
      </div>
    </main>
  )
}
