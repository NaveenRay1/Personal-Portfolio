import { useState } from "react";
import foreverImg from "../assets/img/forever-project.png";
import projImg2 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/netflixClone.png";
import noir from "../assets/img/noir.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("main");

  const projects = [
    {
      title: "FOREVER",
      description: "Frontend E-commerce Platform (Live)",
      imgUrl: foreverImg,
      link: "https://forever-seven-phi.vercel.app",
    },
    {
      title: "Netflix Clone",
      description: "React, TMDB API",
      imgUrl: projImg3,
      link: "https://netflix-clone-tau-rosy.vercel.app",
    },
    {
      title: "Personal Portfolio",
      description: "React.js & Animations (This Site!)",
      imgUrl: projImg2,
      link: "https://naveen-ray-portfolio.vercel.app",
    },
  ];

  const miniProjects = [
    {
      title: "NOIR",
      description: "Dark Themed UI Design (HTML/CSS)",
      imgUrl: noir,
      link: "https://noir-naveenray1.vercel.app",
    },
  ];

  const renderProjects = (data) => (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {data.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#1a1a1a] rounded-2xl overflow-hidden
                     hover:-translate-y-2 transition duration-300"
        >
          <img
            src={project.imgUrl}
            alt={project.title}
            className="w-full h-60 object-cover"
          />

          <div className="p-6 space-y-3">
            <h3 className="text-xl font-semibold group-hover:text-purple-400 transition">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-gray-400 text-lg">
            My flagship project is <b>FOREVER</b>, a comprehensive
            e-commerce platform. I focus on building scalable,
            user-friendly applications using modern technologies.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={() => setActiveTab("main")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "main"
                ? "bg-purple-600 text-white"
                : "bg-[#1a1a1a] text-gray-400 hover:text-white"
            }`}
          >
            Main Projects
          </button>

          <button
            onClick={() => setActiveTab("mini")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "mini"
                ? "bg-purple-600 text-white"
                : "bg-[#1a1a1a] text-gray-400 hover:text-white"
            }`}
          >
            Mini Projects
          </button>

          <button
            onClick={() => setActiveTab("resume")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "resume"
                ? "bg-purple-600 text-white"
                : "bg-[#1a1a1a] text-gray-400 hover:text-white"
            }`}
          >
            Resume
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          {activeTab === "main" && renderProjects(projects)}
          {activeTab === "mini" && renderProjects(miniProjects)}

          {activeTab === "resume" && (
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <p className="text-gray-400 text-lg">
                My Resume detailing my B.Tech (2026) coursework,
                technical skills (React.js, MERN, DSA),
                and latest projects is available for download.
              </p>

              <a
                href="/resume.pdf"
                download="Naveen_Ray_Resume.pdf"
                className="inline-block px-8 py-4 rounded-xl
                           bg-gradient-to-r from-purple-600 to-indigo-600
                           hover:opacity-90 transition font-semibold"
              >
                Download Resume
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Background */}
      <img
        src={colorSharp2}
        alt="Decoration"
        className="absolute right-0 bottom-0 opacity-10 pointer-events-none"
      />
    </section>
  );
};
