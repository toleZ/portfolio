import { useEffect, useState } from "react";
import { projectList, skills } from "../db.json";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Project from "../components/Project";

const Projects = () => {
  const { width } = window.screen;

  const [projectsToShow, setProjectsToShow] = useState(projectList);
  const [selectedSkill, setSelectedSkill] = useState(false);
  const [quantityProjects, setQuantityProjects] = useState(6);

  const updateProjects = () => {
    const toShow = [...projectList]
      .filter(
        (project) => project.type === selectedSkill || selectedSkill === false
      )
      .splice(0, quantityProjects);

    setProjectsToShow(toShow);
  };

  const handleSelect = (val) => {
    selectedSkill === val ? setSelectedSkill(false) : setSelectedSkill(val);
  };

  const handleShowMore = () => {
    const maxToShow = projectList.length;

    maxToShow === quantityProjects
      ? setQuantityProjects(6)
      : setQuantityProjects(quantityProjects + (width < 1024 ? 3 : 2));
  };

  useEffect(updateProjects, [selectedSkill, quantityProjects]);

  return (
    <div
      className="p-10 pt-12 w-full min-h-screen bg-cover bg-zinc-950 bg-dark-950 flex flex-col items-center"
      id="projects"
    >
      <h1 className="mb-4 relative text-gray-500 text-8xl text-opacity-50 font-londrina after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:content-['Projects'] after:text-3xl after:text-white after:font-lora">
        PROJECTS
      </h1>

      <ul className="flex gap-6 mb-8 text-lg text-gray-500 font-lora">
        {skills.map((skill) => (
          <li key={skill + "-selectButton"}>
            <button
              onClick={() => handleSelect(skill)}
              className={`${
                selectedSkill === skill && "text-light-navy"
              } transition-all duration-300`}
            >
              {skill}
            </button>
          </li>
        ))}
      </ul>

      <section className="grid lg:grid-cols-3 grid-cols-2 gap-6">
        {[...projectsToShow].map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </section>

      <footer>
        <button
          className="mt-8 flex items-center text-gray-600 font-lora text-lg"
          onClick={handleShowMore}
        >
          {quantityProjects === projectList.length ? "Show less" : "Show more"}
          {quantityProjects === projectList.length ? (
            <MdKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </button>
      </footer>
    </div>
  );
};

export default Projects;
