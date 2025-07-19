import Skill from "./Skills";
import About from "./About";
import Project from "./Project";
function Content({setIsHoveringProject }) {
  return (
    <main className="pl-[576px] pt-[75px] pr-[120px] pb-[75px] py-2">
      <section className="space-y-24">
      <About/>
      <Skill/>
      <Project setIsHoveringProject={setIsHoveringProject} />
      </section> <p className="text-4xl  mt-20 font-semibold">This page is under development....</p>
    </main>
  );
}

export default Content;
