import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";

export default function ProjectItem({ project, setIsHoveringProject }) {
  const [modalOpen, setModalOpen] = useState(false);

  const { year, title, description, tags, images } = project;
  const coverImage = images[2]; // ✅ dùng ảnh đầu tiên làm thumbnail

  return (
    <>
      <div
        className="relative z-30 flex rounded-[25px] px-[10px] py-8 bg-[#e0e0e0] transition-all duration-300 ease-in-out hover:scale-[1.02] group cursor-pointer"
        style={{
          boxShadow: `inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff`,
          border: "2px solid rgb(206,206,206)",
        }}
        onMouseEnter={() => setIsHoveringProject(true)}
        onMouseLeave={() => setIsHoveringProject(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* Left */}
        <div className="flex flex-col items-left w-[241px] shrink-0 pl-5">
          <h1 className="text-2xl font-medium text-left mb-4 text-[#777777] group-hover:translate-x-2 transition-all duration-300">
            {year}
          </h1>
          <img
  src={coverImage}
  alt={title}
  className="w-[201px] h-auto rounded-lg border-[3px] border-gray-300 shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl hover:scale-[1.02] "
/>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between ml-2">
          <div>
            <div className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1">
              <h2 className="text-2xl font-semibold text-[#333333]">{title}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 opacity-0 group-hover:opacity-90 group-hover:scale-x-110 group-hover:h-6  duration-300 text-[#555] absolute right-7 hover:scale-110 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <p className="text-sm text-[#777777] mt-2 group-hover:translate-y-1 transition-all duration-300">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {tags.map((tag, index) => (
              <span
                key={index}
      className="text-sm px-4 font-medium py-1 rounded-full text-[#333333] bg-gray-100 hover:bg-gray-200 hover:text-black hover:font-semibold hover:shadow-sm hover:scale-105 transition-all duration-300 ease-in-out cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        project={project}
      />
    </>
  );
}
