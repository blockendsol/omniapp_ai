import React from "react";

type IMap = { number: String, title: string };

const RoadMapBox = ({ number, title }: IMap) => {
  <div className="roadmap-box flex flex-col">
    <p className="text-[#B7B3B3]">{number}</p>
  </div>;
};

function Roadmap() {
  return (
    <div className="bg-[#02121DD9] min-h-[400px] w-full">
      <div className="w-full relative h-full  pt-[100px] px-16 ">
        <h1 className="text-shine text-[80px] leading-[80px] font-ruberoid font-extrabold mb-[56px]">
          Our Roadmap
        </h1>
      </div>
    </div>
  );
}

export default Roadmap;
