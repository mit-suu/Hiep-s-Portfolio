// constants.js
export const footerLinks = [
  {
    id: 1,
    name: 'GitHub',
    icon: 'FaGithub',
    url: 'https://github.com/mit-suu',
    color: 'bg-gray-800',
  },
  {
    id: 2,
    name: 'Facebook',
    icon: 'FaFacebook',
    url: 'https://www.facebook.com/tuanhiep331/',
    color: 'bg-blue-600',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: 'FaLinkedin',
    url: 'https://www.linkedin.com/in/hi%E1%BB%87p-tu%E1%BA%A5n-aba91436b/',
    color: 'bg-blue-700',
  },
  {
    id: 4,
    name: 'Instagram',
    icon: 'FaInstagram',
    url: 'https://www.instagram.com/mits.su_/',
    color: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
  },
  
];
// constants.js
export const skills = [
  { name: 'HTML', experience: '3 years experiences', link: 'https://github.com/mit-suu/Clone_portfolio.git' ,},
  { name: 'CSS', experience: '3 years experiences', link: 'https://github.com/mit-suu/Clone_portfolio.git' },
  { name: 'JavaScript', experience: '3 years experiences', link: 'https://github.com/mit-suu/JobHunter.git' },
  { name: 'TypeScript', experience: '1 years experiences', link: 'https://github.com/mit-suu/typescript' },
  { name: 'TailwindCSS', experience: '2 years experiences', link: 'https://github.com/mit-suu/JobHunter.git' },
  { name: 'React', experience: '2 years experiences', link: 'https://github.com/mit-suu/JobHunter.git' },
  { name: 'Node.js', experience: '1 years experiences', link: 'https://github.com/mit-suu/JobHunter.git' },
  { name: 'GitHub', experience: '3 years experiences', link: 'https://github.com/mit-suu' },
  { name: 'Redux', experience: '3 months experiences', link: 'https://github.com/mit-suu/JobHunter.git' },
  { name: 'Java', experience: '3 years experiences', link: 'https://github.com/mit-suu/java' },
  { name: 'Next.js', experience: '4 months experiences', link: 'https://github.com/mit-suu/JobHunter.git' },
  { name: 'MongoDB', experience: '1 years experiences', link: 'https://github.com/mit-suu/JobHunter.git' },
  { name: 'Figma', experience: '1 years experiences', link: 'https://github.com/mit-suu/JobHunter.git' },
  { name: 'Jira', experience: '1 years experiences', link: 'https://trantuanhiep28122003.atlassian.net/jira/software/projects/JH/boards/34' },
];

// src/constants/constants.js

export const projects = [
  {
    year: "2023–2024",
    title: "Book Store, FullStack Developer",
    description:
      `The "Book Store" project is a bookstore inventory and sales management system that helps manage book information, shopping carts, and customer orders. I used Java and MySQL for the back-end to handle data processing, while the front-end is built using JSP, CSS, and JavaScript to create an intuitive and user-friendly interface. The project includes features such as book inventory management, shopping cart, and order management, allowing users to easily browse and purchase books online.`,
    tags: ["Java", "SQLServer", "JDBC", "JSP", "JavaScript", "Bootstrap"],
    images: [
      "/img/BookStore/BookStore1.png",
      "/img/BookStore/BookStore2.png",
      "/img/BookStore/BookStore3.png",
      "/img/BookStore/BookStore4.png",
      "/img/BookStore/BookStore5.png",
    ],
    github: "https://github.com/mit-suu/PRJ301.git"
  },
  {
    year: "2024–2025",
    title: "Wildroots, Frontend Developer",
    description:
      `WildRoots is a responsive image search application that allows users to search, explore, and download high-resolution images directly from the Unsplash API. The platform features a clean and intuitive user interface with real-time search capabilities and image preview galleries. It focuses on smooth UX and interactive design to enhance user engagement while demonstrating skills in API integration and state management.`,
    tags: ["HTML", "JavaScript", "ReactJS", "TailwindCSS", "Unsplash API", "Figma"],
    images: [
      "/img/Wildroots/Wildroots1.png",
      "/img/Wildroots/Wildroots2.png",
      "/img/Wildroots/Wildroots3.png",
      "/img/Wildroots/Wildroots4.png",
      "/img/Wildroots/Wildroots5.png",
    ],
    github: "https://github.com/mit-suu/WildRoots.git"
  },
  {
    year: "2024–2025",
    title: "FBooking, FullStack Developer",
    description:
      `FBooking is an online hotel booking platform that allows users to search for available rooms, make reservations, and complete secure payments through VNPay. The system supports multiple user roles, including guests, hosts, and admins. Hosts can list and manage their room availability, while admins oversee all booking activities and transactions. The project emphasizes responsive UI, secure payment integration, and role-based access control.`,
    tags: ["JavaScript", "TypeScript", "ReactJS", "TailwindCSS", "Java Spring Boot", "MySQL", "REST API", "VNPay API"],
    images: [
      "/img/HotelBooking/HotelBooking1.png",
      "/img/HotelBooking/HotelBooking2.png",
      "/img/HotelBooking/HotelBooking3.png",
      "/img/HotelBooking/HotelBooking4.png",
      "/img/HotelBooking/HotelBooking5.png",
    ],
    github: "https://github.com/mit-suu/hotel-booking.git"
  },
  {
    year: "2024–2025",
    title: "JobHunter, FullStack Developer",
    description:
      `JobHunter is a career-oriented web platform that allows job seekers to build and submit CVs, search for job openings, and apply directly to employers. At the same time, employers can create accounts to post job listings, review applications, and manage candidate pipelines. The system includes role-based access, secure authentication, and admin moderation tools. It aims to streamline the job application process while providing a professional interface for both applicants and recruiters.`,
    tags: ["JavaScript", "ReactJS", "TailwindCSS", "Json-Server", "Axios", "REST API", "Figma"],
    images: [
      "/img/JobHunter/JobHunter1.png",
      "/img/JobHunter/JobHunter2.png",
      "/img/JobHunter/JobHunter3.png",
      "/img/JobHunter/JobHunter4.png",
      "/img/JobHunter/JobHunter5.png",
    ],
    github: "https://github.com/mit-suu/JobHunter.git"
  },
];
