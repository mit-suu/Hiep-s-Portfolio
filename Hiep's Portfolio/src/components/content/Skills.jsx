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
  className="relative group text-left rounded-xl py-5 px-4 transition-all duration-300 ease-in-out bg-white shadow-[inset_1px_1px_2px_#ffffff,inset_-1px_-1px_2px_#d1d1d1,0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:border hover:border-gray-300"
>
  <h1 className="text-[30px] font-medium text-[#222222]">{skill.name}</h1>
  <p className="text-sm text-gray-600">{skill.experience}</p>

  {/* Glow ring effect */}
  <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-4 ring-blue-200 transition-all duration-300 pointer-events-none"></div>

  {/* Hover icon */}
  <div className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 text-blue-500"

    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
      />
    </svg>
  </div>
</a>

      ))}
    </div>
  );
};

export default Skill;
