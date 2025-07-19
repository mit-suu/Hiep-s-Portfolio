// src/components/Project.jsx
import { projects } from "../../constants/contants";
import ProjectItem from "./ProjectItem";

export default function Project({ setIsHoveringProject }) {
  return (
    <div className="grid grid-cols-1 space-y-[49px]">
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
          setIsHoveringProject={setIsHoveringProject}
        />
      ))}
    </div>
  );
}
