import React from "react";
import Steps from "./components/Steps";
import BodyType from "./components/BodyType";

export default function Page() {


  return (
    <div className="bg-[#121212] h-screen">

    <div className="max-w-screen-xl mx-auto  flex flex-col px-5 lg:px-0">
    <Steps/>
    <BodyType/>
    </div>
      
    </div>
  );
}
