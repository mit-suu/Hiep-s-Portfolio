import { useEffect,useState } from "react";
import LoadingComponent from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content/Content";
export default function App() {
   const [isHoveringProject, setIsHoveringProject] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;

      document.documentElement.style.setProperty("--mouse-x", x);
      document.documentElement.style.setProperty("--mouse-y", y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ffffff] via-[#f4f4f4] to-[#eaeaea] dark:bg-[#061222] font-poppins">
      <LoadingComponent />
         <div className="relative z-20">
    <Header />
    <Footer />
    <Content setIsHoveringProject={setIsHoveringProject} />
  </div>

{isHoveringProject && (
  <div className="fixed inset-0 bg-gradient-to-br from-purple-200/20 via-blue-200/10 to-transparent backdrop-blur-sm z-10 pointer-events-none transition-all duration-300"></div>
)}

    </main>
  );
}
