"use client";

import TestimonialCard from "@/components/testimonial/card"
import { motion } from 'framer-motion';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from 'sonner';
import { Carousel } from 'react-responsive-carousel';

const Card1 = () => (
  <div className="flex flex-col card-bg text-black w-48 h-48 p-4 rounded-lg gap-y-2">
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

const Card2 = () => (
  <div className="flex flex-col card-bg text-black w-48 h-48 p-4 rounded-lg gap-y-2">
    <div className="flex items-center justify-between">
      <Image src="./barchart.svg" width={20} height={20} alt="Bell Image" />
      <Image src="./checkmark.svg" width={20} height={20} alt="Bell Image" />
    </div>
    <p className="text-sm pt-12">
      Notify me when any wallets
      move more than
    </p>

    <svg width="68" height="21" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.700195" y="0.900391" width="66.4" height="19.6" rx="2.8" fill="#E5E5E6" fill-opacity="0.5" />
      <path d="M7.57933 14.9279V6.65513H8.1093V14.9279H7.57933ZM9.23711 9.22097C9.20264 8.91505 9.06045 8.67807 8.81055 8.51003C8.56064 8.33984 8.24611 8.25474 7.86694 8.25474C7.59549 8.25474 7.36067 8.29783 7.16246 8.384C6.96426 8.46802 6.81023 8.58436 6.70036 8.73301C6.59264 8.8795 6.53878 9.04647 6.53878 9.2339C6.53878 9.39116 6.5754 9.52689 6.64865 9.64107C6.72405 9.75525 6.82208 9.85112 6.94272 9.92868C7.06552 10.0041 7.19693 10.0676 7.33697 10.1193C7.477 10.1689 7.61165 10.2098 7.74091 10.2421L8.38722 10.4102C8.59834 10.4619 8.81486 10.5319 9.03675 10.6202C9.25865 10.7086 9.46439 10.8249 9.65398 10.9692C9.84356 11.1136 9.99652 11.2924 10.1129 11.5057C10.2313 11.7189 10.2906 11.9742 10.2906 12.2715C10.2906 12.6464 10.1936 12.9792 9.99975 13.2701C9.80801 13.5609 9.52902 13.7904 9.16278 13.9584C8.7987 14.1264 8.35813 14.2105 7.84109 14.2105C7.34558 14.2105 6.91687 14.1318 6.55494 13.9746C6.193 13.8173 5.90971 13.5943 5.70504 13.3056C5.50038 13.0148 5.38728 12.6701 5.36573 12.2715H6.36751C6.3869 12.5107 6.46445 12.7099 6.60018 12.8694C6.73806 13.0266 6.91364 13.1441 7.12692 13.2216C7.34235 13.297 7.57826 13.3347 7.83462 13.3347C8.11684 13.3347 8.36783 13.2905 8.58757 13.2022C8.80947 13.1117 8.98397 12.9868 9.11108 12.8274C9.23819 12.6658 9.30174 12.4773 9.30174 12.2618C9.30174 12.0658 9.24573 11.9053 9.1337 11.7803C9.02383 11.6554 8.8741 11.552 8.68452 11.4701C8.49709 11.3883 8.28488 11.3161 8.0479 11.2536L7.26587 11.0403C6.7359 10.896 6.3158 10.6838 6.00558 10.4037C5.6975 10.1236 5.54347 9.7531 5.54347 9.29206C5.54347 8.91074 5.64687 8.57789 5.85369 8.29352C6.06051 8.00914 6.34058 7.78832 6.69389 7.63106C7.04721 7.47163 7.44576 7.39192 7.88956 7.39192C8.33767 7.39192 8.73299 7.47056 9.07553 7.62782C9.42023 7.78509 9.69168 8.0016 9.88988 8.27736C10.0881 8.55096 10.1915 8.8655 10.2001 9.22097H9.23711ZM13.9043 7.4824V14.1006H12.9025V8.48418H12.8637L11.2802 9.51827V8.56174L12.9316 7.4824H13.9043ZM16.5824 13.1958L16.5339 13.548C16.5016 13.8065 16.4467 14.0758 16.3691 14.3559C16.2937 14.6381 16.2151 14.8999 16.1332 15.1411C16.0535 15.3824 15.9878 15.5742 15.9361 15.7164H15.251C15.279 15.5828 15.3178 15.4018 15.3673 15.1735C15.4169 14.9472 15.4654 14.6941 15.5127 14.414C15.5601 14.134 15.5957 13.8485 15.6194 13.5577L15.6517 13.1958H16.5824ZM19.9981 14.2105C19.4875 14.2083 19.0513 14.0737 18.6893 13.8065C18.3274 13.5394 18.0506 13.1505 17.8588 12.6399C17.6671 12.1294 17.5712 11.5143 17.5712 10.7947C17.5712 10.0773 17.6671 9.46441 17.8588 8.95598C18.0527 8.44756 18.3306 8.05977 18.6926 7.79263C19.0567 7.52549 19.4918 7.39192 19.9981 7.39192C20.5044 7.39192 20.9385 7.52657 21.3004 7.79586C21.6624 8.063 21.9392 8.45079 22.1309 8.95922C22.3248 9.46549 22.4218 10.0773 22.4218 10.7947C22.4218 11.5164 22.3259 12.1326 22.1342 12.6432C21.9424 13.1516 21.6656 13.5405 21.3037 13.8097C20.9417 14.0769 20.5065 14.2105 19.9981 14.2105ZM19.9981 13.3476C20.4462 13.3476 20.7963 13.129 21.0484 12.6916C21.3026 12.2543 21.4297 11.622 21.4297 10.7947C21.4297 10.2454 21.3715 9.7811 21.2552 9.40194C21.141 9.02061 20.9762 8.73193 20.7608 8.53588C20.5475 8.33768 20.2933 8.23858 19.9981 8.23858C19.5522 8.23858 19.2021 8.45833 18.9479 8.89782C18.6937 9.3373 18.5655 9.96961 18.5633 10.7947C18.5633 11.3462 18.6204 11.8127 18.7346 12.194C18.8509 12.5731 19.0157 12.8608 19.229 13.0568C19.4423 13.2507 19.6987 13.3476 19.9981 13.3476ZM25.8722 14.2105C25.3617 14.2083 24.9254 14.0737 24.5635 13.8065C24.2015 13.5394 23.9247 13.1505 23.733 12.6399C23.5412 12.1294 23.4454 11.5143 23.4454 10.7947C23.4454 10.0773 23.5412 9.46441 23.733 8.95598C23.9269 8.44756 24.2048 8.05977 24.5667 7.79263C24.9308 7.52549 25.366 7.39192 25.8722 7.39192C26.3785 7.39192 26.8126 7.52657 27.1745 7.79586C27.5365 8.063 27.8133 8.45079 28.005 8.95922C28.1989 9.46549 28.2959 10.0773 28.2959 10.7947C28.2959 11.5164 28.2 12.1326 28.0083 12.6432C27.8165 13.1516 27.5397 13.5405 27.1778 13.8097C26.8158 14.0769 26.3807 14.2105 25.8722 14.2105ZM25.8722 13.3476C26.3203 13.3476 26.6704 13.129 26.9225 12.6916C27.1767 12.2543 27.3038 11.622 27.3038 10.7947C27.3038 10.2454 27.2456 9.7811 27.1293 9.40194C27.0151 9.02061 26.8503 8.73193 26.6349 8.53588C26.4216 8.33768 26.1674 8.23858 25.8722 8.23858C25.4263 8.23858 25.0762 8.45833 24.822 8.89782C24.5678 9.3373 24.4396 9.96961 24.4374 10.7947C24.4374 11.3462 24.4945 11.8127 24.6087 12.194C24.725 12.5731 24.8899 12.8608 25.1031 13.0568C25.3164 13.2507 25.5728 13.3476 25.8722 13.3476ZM31.7464 14.2105C31.2358 14.2083 30.7995 14.0737 30.4376 13.8065C30.0757 13.5394 29.7988 13.1505 29.6071 12.6399C29.4153 12.1294 29.3195 11.5143 29.3195 10.7947C29.3195 10.0773 29.4153 9.46441 29.6071 8.95598C29.801 8.44756 30.0789 8.05977 30.4408 7.79263C30.8049 7.52549 31.2401 7.39192 31.7464 7.39192C32.2526 7.39192 32.6867 7.52657 33.0487 7.79586C33.4106 8.063 33.6874 8.45079 33.8792 8.95922C34.0731 9.46549 34.17 10.0773 34.17 10.7947C34.17 11.5164 34.0741 12.1326 33.8824 12.6432C33.6907 13.1516 33.4138 13.5405 33.0519 13.8097C32.69 14.0769 32.2548 14.2105 31.7464 14.2105ZM31.7464 13.3476C32.1945 13.3476 32.5445 13.129 32.7966 12.6916C33.0508 12.2543 33.1779 11.622 33.1779 10.7947C33.1779 10.2454 33.1198 9.7811 33.0034 9.40194C32.8892 9.02061 32.7244 8.73193 32.509 8.53588C32.2957 8.33768 32.0415 8.23858 31.7464 8.23858C31.3004 8.23858 30.9503 8.45833 30.6961 8.89782C30.4419 9.3373 30.3137 9.96961 30.3116 10.7947C30.3116 11.3462 30.3686 11.8127 30.4828 12.194C30.5992 12.5731 30.764 12.8608 30.9773 13.0568C31.1905 13.2507 31.4469 13.3476 31.7464 13.3476ZM35.726 14.162C35.5493 14.162 35.3975 14.0995 35.2703 13.9746C35.1432 13.8474 35.0797 13.6945 35.0797 13.5157C35.0797 13.339 35.1432 13.1882 35.2703 13.0633C35.3975 12.9362 35.5493 12.8726 35.726 12.8726C35.9026 12.8726 36.0545 12.9362 36.1816 13.0633C36.3087 13.1882 36.3723 13.339 36.3723 13.5157C36.3723 13.6342 36.3421 13.743 36.2818 13.8421C36.2236 13.939 36.1461 14.0166 36.0491 14.0747C35.9522 14.1329 35.8445 14.162 35.726 14.162ZM39.7177 14.2105C39.2072 14.2083 38.7709 14.0737 38.409 13.8065C38.047 13.5394 37.7702 13.1505 37.5785 12.6399C37.3867 12.1294 37.2909 11.5143 37.2909 10.7947C37.2909 10.0773 37.3867 9.46441 37.5785 8.95598C37.7724 8.44756 38.0503 8.05977 38.4122 7.79263C38.7763 7.52549 39.2115 7.39192 39.7177 7.39192C40.224 7.39192 40.6581 7.52657 41.0201 7.79586C41.382 8.063 41.6588 8.45079 41.8506 8.95922C42.0444 9.46549 42.1414 10.0773 42.1414 10.7947C42.1414 11.5164 42.0455 12.1326 41.8538 12.6432C41.6621 13.1516 41.3852 13.5405 41.0233 13.8097C40.6614 14.0769 40.2262 14.2105 39.7177 14.2105ZM39.7177 13.3476C40.1659 13.3476 40.5159 13.129 40.768 12.6916C41.0222 12.2543 41.1493 11.622 41.1493 10.7947C41.1493 10.2454 41.0911 9.7811 40.9748 9.40194C40.8606 9.02061 40.6958 8.73193 40.4804 8.53588C40.2671 8.33768 40.0129 8.23858 39.7177 8.23858C39.2718 8.23858 38.9217 8.45833 38.6675 8.89782C38.4133 9.3373 38.2851 9.96961 38.2829 10.7947C38.2829 11.3462 38.34 11.8127 38.4542 12.194C38.5705 12.5731 38.7354 12.8608 38.9486 13.0568C39.1619 13.2507 39.4183 13.3476 39.7177 13.3476ZM45.5919 14.2105C45.0813 14.2083 44.645 14.0737 44.2831 13.8065C43.9212 13.5394 43.6443 13.1505 43.4526 12.6399C43.2609 12.1294 43.165 11.5143 43.165 10.7947C43.165 10.0773 43.2609 9.46441 43.4526 8.95598C43.6465 8.44756 43.9244 8.05977 44.2863 7.79263C44.6504 7.52549 45.0856 7.39192 45.5919 7.39192C46.0981 7.39192 46.5322 7.52657 46.8942 7.79586C47.2561 8.063 47.5329 8.45079 47.7247 8.95922C47.9186 9.46549 48.0155 10.0773 48.0155 10.7947C48.0155 11.5164 47.9196 12.1326 47.7279 12.6432C47.5362 13.1516 47.2593 13.5405 46.8974 13.8097C46.5355 14.0769 46.1003 14.2105 45.5919 14.2105ZM45.5919 13.3476C46.04 13.3476 46.3901 13.129 46.6421 12.6916C46.8963 12.2543 47.0234 11.622 47.0234 10.7947C47.0234 10.2454 46.9653 9.7811 46.8489 9.40194C46.7348 9.02061 46.5699 8.73193 46.3545 8.53588C46.1412 8.33768 45.887 8.23858 45.5919 8.23858C45.1459 8.23858 44.7958 8.45833 44.5416 8.89782C44.2874 9.3373 44.1592 9.96961 44.1571 10.7947C44.1571 11.3462 44.2142 11.8127 44.3283 12.194C44.4447 12.5731 44.6095 12.8608 44.8228 13.0568C45.036 13.2507 45.2924 13.3476 45.5919 13.3476Z" fill="#313233" />
      <path d="M54.7997 9.59953L57.1772 11.977C57.2455 12.0454 57.3563 12.0454 57.4247 11.977L59.8021 9.59953C59.9124 9.48928 59.8343 9.30078 59.6784 9.30078H54.9234C54.7675 9.30078 54.6894 9.48928 54.7997 9.59953Z" fill="#96979A" />
    </svg>

  </div>
)

const Card3 = () => (
  <div className="flex flex-col card-bg text-black w-48 h-48 p-4 rounded-lg gap-y-2">
    <div className="flex items-center justify-between">
      <Image src="./clock.svg" width={20} height={20} alt="Bell Image" />
      <Image src="./checkmark.svg" width={20} height={20} alt="Bell Image" />
    </div>
    <p className="text-sm pt-8">
      Notify me when any wallet dormant for
    </p>

    <Image src="./drop.svg" width={70} height={70} alt="Bell Image" />

    <p className="text-sm">becomes active</p>

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

            <div className="bg-2 rounded-lg absolute left-[40%] w-[25vw] h-[24vh] opacity-20 z-1000"></div>

            <Carousel autoPlay={true} swipeable={true} interval={2000} transitionTime={1000} infiniteLoop={true} showArrows={false} showStatus={false} showIndicators={false} className="flex items-end p-4 sm:p-0 w-full sm:w-1/3 overflow-hidden rounded-l-xl drop-shadow-2xl">
              <Card1 />
              <Card2 />
              <Card3 />
            </Carousel>
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

            <motion.div ref={repoContainer} whileTap={{ cursor: "grabbing" }} className="cursor-grab flex overflow-hidden w-full p-4 sm:p-0 sm:w-2/3 rounded-l-xl drop-shadow-2xl">
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
