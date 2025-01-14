import { Typography } from "@material-tailwind/react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

const DesignFuture = () => {
  return (
    <div>
      <div>
        <Typography className="uppercase">What we do</Typography>
      </div>
      <div>
        <Typography className="font-bold w-[400px]" variant="h2">
          <span className="text-[#ab7511]">Design Future</span> with Excellence
        </Typography>
        <div className="flex">
          <div className="">
            <ul>
              <div className="flex items-center">
                <GoDotFill className="flex items-center text-[#ab7511]" />
                <li className="flex items-center text-lg">
                  Building the future with ideas
                </li>
              </div>
              <div className="flex items-center">
                <GoDotFill className="flex items-center text-[#ab7511] " />
                <li className="text-lg">Designing future with excellence</li>
              </div>
              <div className="flex items-center">
                <GoDotFill className="flex items-center text-[#ab7511]" />
                <li className="text-lg">Discovering possibility concrete</li>
              </div>
            </ul>
          </div>
          <div>
            <div className="border-2 border-black hover:border-[#ab7511] md:w-[320px] p-4 rounded-lg">
              <div className="text-[50px]">
                <HiOutlineSquare3Stack3D />
              </div>
              <div>
                <Typography variant="h4">We Develop Unique Projects</Typography>
              </div>
              <div>
                <Typography>
                  Our expertise and passion for creating innovative solutions
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutionCards.map((item, index) => (
            <div
              className="border border-gray-500 hover:border-[#ab7511] p-4 rounded-xl md:w-[380px]"
              key={index}
            >
              <Typography className="text-4xl py-2 text-gray-400">
                {item.sr}
              </Typography>
              <Typography className="text-2xl font-bold py-2">
                {item.title}
              </Typography>
              <Typography>{item.desc}</Typography>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default DesignFuture;
