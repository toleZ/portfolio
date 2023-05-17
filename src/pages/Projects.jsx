import { useEffect, useState } from "react";
import { projectList, skills } from "../db.json";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Project from "../components/Project";
import Title from "../components/Title";

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

    maxToShow <= quantityProjects
      ? setQuantityProjects(6)
      : setQuantityProjects(quantityProjects + (width < 1024 ? 3 : 2));
  };

  useEffect(updateProjects, [selectedSkill, quantityProjects]);

  return (
    <div
      className="p-10 pt-12 w-full min-h-screen bg-cover bg-zinc-950 bg-dark-950 flex flex-col items-center"
      id="projects"
    >
      <Title>Projects</Title>

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

      {projectsToShow.length ? (
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {[...projectsToShow].map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </section>
      ) : (
        <h2 className="text-center text-3xl text-white">
          There are no projects to show in this category 👺
        </h2>
      )}

      <footer>
        <button
          className="mt-8 flex items-center text-gray-600 font-lora text-lg"
          onClick={handleShowMore}
        >
          {[...projectList].filter(
            (project) =>
              project.type === selectedSkill || selectedSkill === false
          ).length > 6 &&
            (quantityProjects >= projectList.length ? (
              <>
                Show less <MdKeyboardArrowUp />
              </>
            ) : (
              <>
                Show more <MdKeyboardArrowDown />
              </>
            ))}
        </button>
      </footer>
    </div>
  );
};

export default Projects;
