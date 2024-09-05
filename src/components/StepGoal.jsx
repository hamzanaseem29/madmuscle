"use client"
import Image from "next/image";
import img1 from "../../public/user1.webp";
import img2 from "../../public/user2.webp";
import img3 from "../../public/user3.webp";
import img4 from "../../public/user4.png";
import AgreementSection from "./AgreementSection";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StepGoal = () => {
    const [checkboxes, setCheckboxes] = useState({
        agreeWithPolicy: false,
        receiveUpdates: false,
    });
    const [errors, setErrors] = useState(false);
    const router = useRouter();

    const data = [
        {
            id: 1,
            userImg: img1,
            userAge: "18-29",
        },
        {
            id: 2,
            userImg: img2,
            userAge: "30-39",
        },
        {
            id: 3,
            userImg: img3,
            userAge: "40-49",
        },
        {
            id: 4,
            userImg: img4,
            userAge: "50+",
        },
    ];

    const onCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckboxes({
            ...checkboxes,
            [name]: checked,
        });

        // Clear errors if the required checkbox is checked
        if (name === "agreeWithPolicy" && checked) {
            setErrors(false);
        }
    };

    const handleOptionClick = (e) => {
        e.preventDefault(); // Prevent the default link behavior

        if (!checkboxes.agreeWithPolicy) {
            setErrors(true);
            return;
        }

        setErrors(false);
        router.push('/step-bodytype'); // Navigate to the next page
    };

    return (
        <div className="relative lg:min-h-screen container lg:p-0 p-6 flex flex-col justify-center items-center">
            <div className="mx-auto w-full z-10">
                <div className="max-w-[1080px] mx-auto">
                    <div className="flex flex-col justify-center items-center w-full lg:mt-0 mt-10">
                        <div className="flex flex-col lg:justify-center lg:items-center h-full relative z-20 mx-auto">
                            <h1 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl lg:pr-0 pr-6">
                                BUILD YOUR PERFECT BODY
                            </h1>
                            <p className="text-base md:text-xl lg:text-center text-left text-white mt-3 lg:mt-7 uppercase">
                                According to your age and BMI
                            </p>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 justify-center items-center mt-10">
                                {data.map((e) => (
                                    <a
                                        href="#"
                                        key={e.id}
                                        className="flex cursor-pointer flex-col lg:w-[250px]"
                                        onClick={handleOptionClick}
                                    >
                                        <div className="bg-[#1E1E1E] hover:bg-[#2A2A2A] px-2">
                                            <Image
                                                src={e.userImg}
                                                alt=""
                                                width={1080}
                                                height={1080}
                                                className="object-contain mx-auto w-[150px]"
                                            />
                                        </div>
                                        <div className="w-full bg-[#393939] text-white text-center font-semibold text-lg p-1">
                                            Age: {e.userAge}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <AgreementSection onCheckboxChange={onCheckboxChange} errors={errors} />
                </div>
            </div>
            <div className="bg-gradient-to-t from-[#121212] to-[#121212]/50 absolute bottom-0 left-0 h-[100%] w-full z-0 pointer-events-none"></div>
        </div>
    );
};

export default StepGoal;