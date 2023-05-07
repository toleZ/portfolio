import { useState } from "react";
import { FiGlobe, FiGithub } from "react-icons/fi";
import { BounceLoader } from "react-spinners";

const Project = ({ project }) => {
  const { title, description, type, image, deploy, repository } = project;

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <article
        key={"Project-" + title}
        className={`relative overflow-hidden rounded-md group hover:scale-105 transition-all duration-300`}
      >
        <BounceLoader
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          color="#6C63FF"
          loading={isLoading}
        />

        <div className="z-[3] absolute right-0 m-3 flex gap-2">
          <a
            className="text-brand-linkedin text-xl hover:scale-125 transition-all duration-300"
            href={deploy}
          >
            <FiGlobe />
          </a>

          <a
            className="text-brand-git text-xl hover:scale-125 transition-all duration-300"
            href={repository}
          >
            <FiGithub />
          </a>
        </div>

        <section className="absolute bottom-0 z-[2] w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h2 className="text-2xl text-white font-hind font-semibold">
            {title}
          </h2>
          <span className="text-lg text-light-navy font-lora">{type}</span>
          <div className="w-full h-[1px] bg-light-navy my-2" />
          <p className="text-white text-base font-hind font-light">
            {description}
          </p>
        </section>

        <div className="w-full h-full absolute bg-zinc-950 bg-opacity-0 group-hover:bg-opacity-50 z-[1] transition-all duration-300" />
        <img
          src={image}
          alt="Project image"
          onLoad={handleImageLoad}
          className="blur-0 group-hover:blur-lg transition-all duration-300"
        />
      </article>
    </>
  );
};

export default Project;
