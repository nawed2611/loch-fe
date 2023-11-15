
import React from 'react';

interface CardProps {
    name: string;
    title: string;
    content: string;
}

const TestimonialCard: React.FC<CardProps> = ({ name, title, content }) => {
    return (
        <div className="flex flex-col gap-4 text-black bg-gray-200 p-4 sm:h-40 w-[70vw] sm:w-[30vw] rounded-xl">
            <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                <h1 className='font-semibold'>{name}</h1>
                <h2 className='text-gray-400'>{title}</h2>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default TestimonialCard;
