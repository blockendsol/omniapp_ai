import React from "react";

type IMap = { number: String, title: string, style:string, position: string};

const RoadMapBox = ({ number, title, style, position }: IMap) => {
return (
  <div className={`roadmap-box relative flex flex-col -z-10 ${style}`}>
  <p className="text-[#B7B3B3] text-[10px] font-inter font-[300]">{number}</p>
  <h2 className="font-[800] text-white text-[20px] font-ruberoid">{title}</h2>
  <div className={`${position} w-[30px] -z-20 h-[30px] absolute rounded-[50%]`} ></div>
</div>
)
};

function Roadmap() {
  return (
    <div className="bg-[#02121DD9] min-h-[400px] w-full">
      <div className="w-full relative h-full  py-[60px] px-16 ">
        <h1 className="text-shine text-[80px] leading-[80px] font-ruberoid font-extrabold mb-[56px]">
          Our Roadmap
        </h1>
        <div className="w-full">
          <div className="grid w-full grid-rows-1 grid-cols-1 lg:grid-cols-8">
              <RoadMapBox number="01" title="Initial Project researchand ideation" style="lg:col-start-1 lg:col-span-1" position="bulb-one -bottom-4 left-[50px]" />
              <RoadMapBox number="03" title="Initial Project researchand ideation" style="lg:col-start-3 lg:col-span-1" position="bulb-one -bottom-4 left-[100px]"/>
              <RoadMapBox number="05" title="Initial Project researchand ideation" style="lg:col-start-5 lg:col-span-1" position="bulb-one -bottom-4 left-[100px]" />
              <RoadMapBox number="07" title="Initial Project researchand ideation" style="lg:col-start-7 lg:col-span-1" position="bulb-one -bottom-4 left-[100px]"/>
          </div>
          <div className="w-full h-[80px]"></div>
          <div className="grid w-full grid-row-1 grid-cols-9">
              <RoadMapBox number="02" title="Initial Project researchand ideation" style="col-start-2 col-span-1" position="bulb-two -top-5 left-[100px]" />
              <RoadMapBox number="04" title="Initial Project researchand ideation" style="col-start-4 col-span-1" position="bulb-two -top-5 left-[100px]"/>
              <RoadMapBox number="06" title="Initial Project researchand ideation" style="col-start-6  col-span-1" position="bulb-two -top-5 left-[100px]"/>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
