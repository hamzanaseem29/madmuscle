import React, { Suspense } from "react";
import TargetBodyComponent from "./components/TargetComponent";

const page = () => (
  <div className="h-screen">
  <Suspense fallback={<div className="bg-[#121212] h-screen w-full">Loading...</div>}>
    <TargetBodyComponent />
  </Suspense>

  </div>
);

export default page;
