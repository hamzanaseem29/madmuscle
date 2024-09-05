"use client"
import ProgressBar from '@/components/ProgressBar'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";

const Steps = () => {
    const step = 3;
    const totalSteps = 5;
    const router = useRouter();
    return (
        <div className='top-0 sticky h-[80px] flex items-center'>
        <div className='flex w-full justify-between items-center gap-5  '>
            {/* Go Back Icon */}
            <button onClick={() => router.back()} className="flex items-center bg-[#777]/50 p-2">
                <IoChevronBackOutline color='white ' />
            </button>

            {/* Progress Bar */}
            <ProgressBar step={step} totalSteps={totalSteps} />

            {/* Step Indicator */}
            <p className=" text-white">{step}/{totalSteps}</p>
        </div>

        </div>
    )
}

export default Steps