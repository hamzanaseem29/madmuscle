import React from 'react';

const ProgressBar = ({ step, totalSteps }) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (

    <div className="w-full bg-[#393939] h-[4px] ">
      <div
        className="bg-primary-red h-[4px] "
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
