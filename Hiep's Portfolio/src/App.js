import { useEffect } from "react";
import LoadingComponent from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content/Content";
export default function App() {
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
    <main className="min-h-screen bg-white dark:bg-[#061222] font-poppins">
      <LoadingComponent />
      <div>
        {/* <div className="mouse-aura" /> */}
        {/* góc trên-trái */}
        <Header />

        {/* góc dưới-trái */}
        <Footer />

        {/* 3. Nội dung chính bên phải */}
        <Content />
      </div>
    </main>
  );
}
