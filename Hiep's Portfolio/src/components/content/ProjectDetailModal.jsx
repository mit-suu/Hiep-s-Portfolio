import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";

Modal.setAppElement("#root");

export default function ProjectDetailModal({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          shouldCloseOnOverlayClick={true}
          overlayClassName="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          className="p-0 m-0 border-none bg-transparent outline-none"
          closeTimeoutMS={0}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow-lg w-[95%] max-w-6xl px-14 py-8 relative"
          >
            <button
  onClick={onClose}
  className="absolute top-7 right-7 text-gray-400 hover:text-gray-700 text-4xl font-bold transition duration-300 " 
  aria-label="Close"
>
  ×
</button>
            {/* Title center */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800">
                {project.title}
              </h2>
            </div>

            {/* ✅ Animated Gallery with perfect rounded images */}
            <div className="flex overflow-hidden gap-2 h-[300px] group">
              {project.images.map((src, index) => (
                <div
                  key={index}
                  className="flex-1 h-full transition-all duration-500 ease-in-out cursor-pointer group-hover:grayscale group-hover:contrast-75 hover:!grayscale-0 hover:!contrast-100 hover:flex-[3] rounded-xl overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Gallery ${index}`}
                    className="h-full w-full object-cover transition-all duration-500 rounded-xl"
                    style={{
                      transform:
                        index % 2 === 0
                          ? "translateY(20px)"
                          : "translateY(-20px)",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Description + Tags */}
            <p className="text-[#333333] mt-5 mb-14">{project.description}</p>
            <div className="flex flex-wrap gap-4">

  {project.tags.map((tag, index) => (
    <span
      key={index}
      className="text-sm px-4 font-medium py-1 rounded-full text-[#333333] bg-gray-100 hover:bg-gray-200 hover:text-black hover:font-semibold hover:shadow-sm hover:scale-105 transition-all duration-300 ease-in-out cursor-default"
    >
      {tag}
    </span>
  ))}
</div>

            {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-7 right-10 flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-gray-900 hover:scale-105 transition-all duration-300 ease-in-out"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.111.82-.261.82-.577v-2.256c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.603-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.814 1.102.814 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
    </svg>
    GitHub
  </a>
)}

          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
