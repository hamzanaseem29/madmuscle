import React from "react";
import BodyGoal from "./components/BodyGoal";
import Steps from "./components/Steps";

const page = () => {
  return (
    <div className="bg-[#121212] h-screen">
    <div className="max-w-screen-xl mx-auto  flex flex-col px-5 lg:px-0">
      <Steps />
      <BodyGoal />
    </div>

    </div>
  );
};

export default page;
