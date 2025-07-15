import Skill from "./Skills";
import About from "./About";
function Content() {
  return (
    <main className="ml-[576px] mt-[75px] mr-[120px] mb-[75px] py-2">
      {/* ... đây là phần scrollable bình thường */}
      <section className="space-y-24">
       <About/>
        <Skill/>
       
      </section>
       <p className="text-4xl  mt-20">This page is under development...</p>
    </main>
  );
}

export default Content;
