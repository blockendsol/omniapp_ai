import React from "react";

type IMap = { number: String, title: string, style:string };

const RoadMapBox = ({ number, title, style }: IMap) => {
return (
  <div className={`roadmap-box relative flex flex-col ${style}`}>
  <p className="text-[#B7B3B3] text-[12px] font-inter font-[300]">{number}</p>
  <h2 className="font-[800] text-white text-[20px] font-ruberoid">{title}</h2>
</div>
)
};

function Roadmap() {
  return (
    <div className="bg-[#02121DD9] min-h-[400px] w-full">
      <div className="w-full relative h-full  pt-[100px] px-16 ">
        <h1 className="text-shine text-[80px] leading-[80px] font-ruberoid font-extrabold mb-[56px]">
          Our Roadmap
        </h1>
        <div className="grid grid-cols-7 grid-rows-3 w-full">
          <div className="grid cols-span-7">
              <RoadMapBox number="01" title="Initial Project researchand ideation" style="col-start-1 col-span-1 " />
              <RoadMapBox number="02" title="Initial Project researchand ideation" style="col-start-3 col-span-1 " />
              <RoadMapBox number="03" title="Initial Project researchand ideation" style="col-start-1 col-span-1 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
