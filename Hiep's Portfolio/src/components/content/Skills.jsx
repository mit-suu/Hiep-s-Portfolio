import React from "react";
import { skills } from "../../constants/contants";

const Skill = () => {
  return (
    <div className="grid grid-cols-3 gap-y-[40px] gap-x-[31px]">
      {skills.map((skill, index) => (
        <a
          key={index}
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-left rounded-sm py-4  transition-all duration-200"
        >
          <h1 className="text-[36px] font-normal text-[#333333]">{skill.name}</h1>
          <p className="text-base text-gray-600">{skill.experience}</p>
          {/* SVG icon that appears on hover */}
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>


          </div>
        </a>
      ))}
    </div>
  );
};

export default Skill;
