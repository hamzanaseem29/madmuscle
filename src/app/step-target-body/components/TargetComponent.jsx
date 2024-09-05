"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import SlimBody from "../../../../public/slim.webp"; 
import HeroBody from "../../../../public/HERO.webp"; 
import AthleteBody from "../../../../public/ATHLETE.webp"; 
import BeachBody from "../../../../public/BEACH_BODY.png";
import BodyBuilder from "../../../../public/BODYBUILDER.webp";
import crossFit from "../../../../public/CROSS_FIT_BODY.webp";
import WorkoutBody from "../../../../public/WORKOUT_BODY.webp";
import Steps from './Steps';

const bodyTargets = {
  Ectomorph: [
    { id: 1, name: 'Slim Body', image: SlimBody },
    { id: 2, name: 'Slim, Shredded Body', image: HeroBody },
  ],
  Mesomorph: [
    { id: 1, name: 'Athlete', image: AthleteBody },
    { id: 2, name: 'Hero', image: HeroBody }, 
    { id: 3, name: 'Body Builder', image: BodyBuilder }, 
  ],
  Endomorph: [
    { id: 1, name: 'Beach Body', image: BeachBody },
    { id: 2, name: 'Workout Bod', image: WorkoutBody }, 
    { id: 3, name: 'Cross-Fit Body', image: crossFit }, 
  ],
};

const TargetBodyComponent = () => {
  const searchParams = useSearchParams();
  const selectedType = searchParams.get('type');
  const selectedGoal = searchParams.get('goal');
  const targets = bodyTargets[selectedType] || [];

  const router = useRouter();
  return (
    <div className='bg-[#121212] h-screen'>
      <div className='max-w-screen-xl mx-auto px-5 lg:px-0'>
        <Steps />
        <div className="mx-auto mt-10 max-w-[460px] w-full">
          <div className="text-left mb-6">
            <p className=" text-white">Ok, so your goal is to {selectedGoal}</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-white">Choose the body you want</h1>
          </div>
          <div className="grid grid-cols-1 gap-6 text-white w-full">
            {targets.map((target) => (
              <label
                key={target.id}
                className="cursor-pointer flex overflow-hidden items-center p-4 bg-[#777]/10 hover:bg-[#777]/20 transition-colors w-full"
                tabIndex="0"
                onClick={() => router.push(`/step-level-of-fat`)}
              >
                <div className="flex-1 text-xl font-medium">{target.name}</div>
                <div className="w-32 h-32">
                  <Image
                    src={target.image}
                    alt={`${target.name} Body`}
                    layout="responsive"
                    width={1080}
                    height={1080}
                    className="rounded-md"
                  />
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetBodyComponent;
