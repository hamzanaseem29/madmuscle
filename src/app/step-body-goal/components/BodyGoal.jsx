"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SlimBody from "../../../../public/SLIM_SHREDDED_BODY.webp"; 
import AverageBody from "../../../../public/HERO.webp"; 
import HeavyBody from "../../../../public/BEACH_BODY.png";

const bodyGoals = [
  {
    id: 1,
    name: 'Lose Weight',
    value: 'Ectomorph',
    image: SlimBody,
  },
  {
    id: 2,
    name: 'Gain Muscle Mass',
    value: 'Mesomorph',
    image: AverageBody,
  },
  {
    id: 3,
    name: 'Get Shredded',
    value: 'Endomorph',
    image: HeavyBody,
  }
];

const BodyGoal = () => {
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const router = useRouter();

  const handleSelect = (goal, value) => {
    setSelectedBodyType(value);
    router.push(`/step-target-body?type=${value}&goal=${goal}`);
  };
  
  return (
    <div className="mx-auto mt-10 max-w-[460px] w-full">
      <div className="text-left mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Choose your body type</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 text-white w-full">
        {bodyGoals.map((bodyType) => (
        <label
        key={bodyType.id}
        className={`cursor-pointer flex overflow-hidden items-center p-4 bg-[#777]/10 hover:bg-[#777]/20 transition-colors w-full  ${
          selectedBodyType === bodyType.value ? 'border border-[#FF6025]' : ''
        }`}
        tabIndex="0"
        onClick={() => handleSelect(bodyType.name, bodyType.value)}
      >
        <input
          name="bodyType"
          type="radio"
          className="hidden"
          value={bodyType.value}
          checked={selectedBodyType === bodyType.value}
          onChange={() => setSelectedBodyType(bodyType.value)}
        />
        <div className="flex-1 text-xl font-medium">{bodyType.name}</div>
        <div className="w-32 h-32">
          <Image
            src={bodyType.image}
            alt={`${bodyType.name} Body`}
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
  );
};

export default BodyGoal;
