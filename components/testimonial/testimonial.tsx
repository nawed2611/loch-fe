
import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from "./card"
import { motion } from 'framer-motion';
import Image from "next/image";

const Testimonial: React.FC = () => {
    const repoContainer: any = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(- repoContainer.current.scrollWidth + repoContainer.current.offsetWidth);
    }, []);

    return (
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
    );
};

export default Testimonial;
