function Header() {
  return (
    <div className="fixed top-[75px] left-[120px] space-y-[65px]">
        {/* text */}
      <div className="flex flex-col gap-y-[15px]">
        <h1 className="text-[52px] font-extrabold text-[#333333] ">
          Tran Tuan Hiep
        </h1>
        <h2 className="text-[#333333] font-semibold text-2xl">
          Front End Developer
        </h2>
        <p className="text-sm text-[#777777]">
          I build accessible, pixel-perfect digital <br />
          experiences for the web.
        </p>
      </div>
      {/* nav */}
      <div>
            <ul className="space-y-4 text-[#333333]">
        <li className="flex items-center ">
          <span className="border-t-2 border-[#333333] w-4 mr-2"></span>
          <span className="text-lg font-medium">Profile</span>
        </li>
        <li className="flex items-center">
          <span className="border-t-2 border-[#333333] w-4 mr-2"></span>
          <span className="text-lg font-medium">Technical Skills</span>
        </li>
        <li className="flex items-center">
          <span className="border-t-2 border-[#333333] w-4 mr-2"></span>
          <span className="text-lg font-medium">Experiences</span>
        </li>
        <li className="flex items-center">
          <span className="border-t-2 border-[#333333] w-4 mr-2"></span>
          <span className="text-lg font-medium">Contact</span>
        </li>
      </ul>
      </div>
    </div>
  );
}
export default Header;
