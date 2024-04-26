import React, { useState } from "react";
import "./Project.css";
function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const projectsToShow = [
    {
      id: 1,
      category: "Static",
      imageUrl:
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/ocean.jpg",
      name: "Tourism Project",
      technologies: ["Html", "Css"],
      liveUrl: "https://knk045.ccbp.tech/",
      githubUrl: "https://github.com/Nirmalkilari123",
    },
    {
      id: 4,
      category: "Static",
      imageUrl:
        "https://res.cloudinary.com/de4euasql/image/upload/v1712749309/todo_w0fl3y.jpg",
      name: "Todo Project",
      technologies: ["Html", "Css"],
      liveUrl: "https://knk45a.ccbp.tech/",
      githubUrl: "https://github.com/Nirmalkilari123",
    },
    {
      id: 5,
      category: "Static",
      imageUrl:
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/software-developer-img.png",
      name: "My Project",
      technologies: ["Html", "Css"],
      liveUrl: "https://kiarinirmal0.ccbp.tech/",
      githubUrl: "https://github.com/Nirmalkilari123",
    },

    {
      id: 6,
      category: "Static",
      imageUrl:
        "https://www.turing.com/blog/wp-content/uploads/2022/04/MEAN-Stack-vs-MERN-Stack.jpg",
      name: "MERN Stack Course Project",
      technologies: ["Html", "Css"],
      liveUrl: "https://knk123.ccbp.tech/",
      githubUrl: "https://github.com/Nirmalkilari123",
    },
    {
      id: 7,
      category: "Static",
      imageUrl: "https://tirumala.org/NewImages/HD-TXT.png",
      name: "TTD Project",
      technologies: ["Html", "Css"],
      liveUrl: "https://ttda.ccbp.tech/",
      githubUrl: "https://github.com/Nirmalkilari123",
    },
    {
      id: 2,
      name: "Color Picker",
      category: "Dynamic",
      imageUrl:
        "https://res.cloudinary.com/de4euasql/image/upload/v1712750611/color_picker_pen6g2.jpg",
      technologies: ["Html", "Css", "JavaScript"],
      liveUrl: "https://knk04.ccbp.tech/",
      githubUrl: "https://github.com/Nirmalkilari123",
    },
    {
      id: 3,
      name: "Portfoil",
      category: "React",
      imageUrl:
        "https://res.cloudinary.com/de4euasql/image/upload/v1712725273/download_xrdmic.png",
      technologies: ["React"],
      liveUrl: "https://knk45.netlify.app/",
      githubUrl: "https://github.com/Nirmalkilari123",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsToShow
      : projectsToShow.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <div className="Projects">
      <div className="knk">
        <nav className="nav">
          <img
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            className="img1"
            alt="Website Logo"
          />
        </nav>
        <select
          className="sel"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="All">All</option>
          <option value="Static">Static Website</option>
          <option value="Dynamic">Dynamic Website</option>
          <option value="React">React Website</option>
        </select>
      </div>
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-info">
            <img
              src={project.imageUrl}
              className="pro-image"
              alt="Project Thumbnail"
            />
            <h4>{project.name}</h4>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <footer className="project-footer">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                live{" "}
                <span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </span>
              </a>
              <a href="/projects">view</a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                github{" "}
                <span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </span>
              </a>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
