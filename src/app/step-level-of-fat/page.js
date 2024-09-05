"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../../public/fatlevel1.webp";
import img2 from "../../../public/fatlevel2.webp";
import img3 from "../../../public/fatlevel3.webp";
import img4 from "../../../public/fatlevel4.webp";
import img5 from "../../../public/fatlevel5.webp";
import img6 from "../../../public/fatlevel6.webp";
import img7 from "../../../public/fatlevel7.webp";
import img8 from "../../../public/fatlevel8.webp";
import { Slider, Tooltip } from "@mui/material";
import Steps from "./components/Steps";
import { FaArrowRight } from "react-icons/fa6";

const BodyFatSelector = () => {
  const [value, setValue] = useState(2); // Default value corresponding to "15-19%"

  const steps = [
    { value: 0, label: "5-9%" },
    { value: 1, label: "10-14%" },
    { value: 2, label: "15-19%" },
    { value: 3, label: "20-24%" },
    { value: 4, label: "25-29%" },
    { value: 5, label: "30-34%" },
    { value: 6, label: "35-39%" },
    { value: 7, label: ">40%" },
  ];

  // Format the tooltip label based on the slider's value
  const valueLabelFormat = (value) => {
    return steps.find((step) => step.value === value)?.label;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Map images based on the slider value
  const getImageByBodyFat = (value) => {
    switch (value) {
      case 0:
        return img1; // 5-9%
      case 1:
        return img2; // 10-14%
      case 2:
        return img3; // 15-19%
      case 3:
        return img4; // 20-24%
      case 4:
        return img5; // 25-29%
      case 5:
        return img6; // 30-34%
      case 6:
        return img7; // 35-39%
      case 7:
        return img8; // >40%
      default:
        return img8; // Fallback if nothing matches
    }
  };

  return (
    <>
      <div className="bg-[#121212] relative h-screen overflow-hidden">
        <div className="z-50 relative max-w-screen-xl mx-auto lg:px-0 px-5">
          <Steps />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-full md:w-1/2 bg-pro mt-[-5rem] flex justify-center">
            <Image
              src={getImageByBodyFat(value)}
              alt="Selected Body"
              width={1080}
              height={1080}
              className="object-contain w-56"
            />
          </div>

          <div className="w-full   lg:h-screen flex flex-col items-center justify-center  bottom-0 lg:top-0 lg:right-0 absolute z-10 md:w-1/2 mx-auto text-white p-6 bg-[#1E1E1E]">
            <div className="max-w-[490px] lg:mx-0 mx-5">
              <h2 className="text-2xl md:text-3xl font-semibold mb-20 ml-[-1rem] lg:ml-[-1rem]">
                Choose your level of body fat
              </h2>

              <Slider
               sx={{
                "& .MuiSlider-thumb": {
                  backgroundColor: "#FF4400",
                  boxShadow: "none",
                  border: "1px solid black",
                  width: "28px",
                  height: "28px",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#A32B00",
                  height: "8px",
                  border: "none",
                  borderRadius: "0px",
                  opacity: "100%"
                },
                "& .MuiSlider-track": {
                  backgroundColor: "transparent",
                  height: "8px",
                  borderRadius: "0px",
                  border: "none",
                },
                "& .MuiSlider-mark": {
                  backgroundColor: "#121212",
                  height: "8px",
                  width: "1px",
                },
                "& .MuiSlider-markLabel": {
                  fontFamily: "Poppins, sans-serif",
                  color: "transparent",
                },
                "& .MuiSlider-markLabel[data-index='0']": {
                  color: "white",
                },
                "& .MuiSlider-markLabel[data-index='7']": {
                  color: "white",
                },
                "& .MuiSlider-valueLabel": {
                  zIndex: 1,
                  whiteSpace: "nowrap",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 1.43,
                  letterSpacing: "0.01071em",
                  transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  position: "absolute",
                  backgroundColor: "#393939",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.5rem 0.8rem",
                  transform: "translateY(-100%) scale(1)", /* Ensure it's scaled at 1 (visible) */
                  top: "-10px",
                  transformOrigin: "bottom center",
                  opacity: 1, /* Ensure visibility */
                  visibility: "visible", /* Force visibility */
                },
              }}
                value={value}
                onChange={handleChange}
                step={1}
                min={0}
                max={7}
                marks={steps}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat} // Custom format for the tooltip
              />
            </div>

            <div className="flex justify-end items-end w-full max-w-[420px] mt-10  ">
              <button
                className="continue-btn font-medium text-lg flex lg:justify-center justify-between hover:bg-[#fb6e3a] transition-colors duration-150"
                onClick={() => 
                  console.log(`Selected Body Fat: ${steps[value].label}`)
                }
              >
                Continue
                <FaArrowRight size={18} className="text-white ml-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyFatSelector;
