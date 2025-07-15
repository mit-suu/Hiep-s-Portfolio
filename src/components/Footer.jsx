import { footerLinks } from '../constants/contants';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaLaptop } from 'react-icons/fa';

function Footer() {
  // Tạo đối tượng icon cho mỗi loại
  const iconMapping = {
    FaGithub: <FaGithub size={24} />,
    FaFacebook: <FaFacebook size={24} />,
    FaLinkedin: <FaLinkedin size={24} />,
    FaInstagram: <FaInstagram size={24} />,
    FaLaptop: <FaLaptop size={24} />,
  };

  return (
    <div className="fixed left-[120px] bottom-[120px] flex space-x-6">
      {footerLinks.map((link) => (
        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
          <div
            className={`w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full shadow-sm text-[#777777] transition-transform duration-[250ms] transform hover:scale-[1.18]`}
          >
            {iconMapping[link.icon]}
          </div>
        </a>
      ))}
    </div>
  );
}

export default Footer;
