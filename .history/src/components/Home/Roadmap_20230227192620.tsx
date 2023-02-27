import React from "react";

type IMap = { number: String, title: string };

const RoadMapBox = ({ number, title }: IMap) => {
return (
  <div className="roadmap-box flex flex-col">
  <p className="text-[#B7B3B3] text-[12px] font-inter font-[300]">{number}</p>
  <h2 className="font-[800] text-white text-[20px] font-ruberoid">{title}</h2>
</div>;
)
};

function Roadmap() {
  return (
    <div className="bg-[#02121DD9] min-h-[400px] w-full">
      <div className="w-full relative h-full  pt-[100px] px-16 ">
        <h1 className="text-shine text-[80px] leading-[80px] font-ruberoid font-extrabold mb-[56px]">
          Our Roadmap
        </h1>
        <RoadMapBox number="01" title="Initial Project researchand ideation" />
      </div>
    </div>
  );
}

export default Roadmap;
