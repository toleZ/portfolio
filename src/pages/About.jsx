import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Title from "../components/Title";

const About = () => {
  return (
    <div
      className="p-10 w-full min-h-screen flex flex-col justify-center bg-cover bg-zinc-900 bg-dark-900"
      id="about"
    >
      <Title>About</Title>

      <section>
        <h1 className="text-white font-montserrat text-4xl">Juan C. Toloy</h1>
        <h2 className="mt-2 mb-6 text-light-navy font-lora text-xl">
          Full Stack Developer
        </h2>

        <div className="w-full h-[1px] bg-gray-500 opacity-20"></div>

        <div className="mt-6 text-gray-500 font-hind text-lg leading-loose">
          <p className="mb-4">
            🙋‍♂️ Hello! I am a Full Stack developer with experience in
            technologies such as JavaScript, TypeScript, React, Redux, NodeJS,
            Express, Sequelize, PostgreSQL, MongoDB, among others.
          </p>
          <p className="mb-4">
            🚀 I have experience as a Henry Hero where I have taught online
            classes in the "Soy Henry" bootcamp from Monday to Thursday to
            people who have no previous knowledge of programming.
          </p>
          <p className="mb-4">
            🌱 I am a very curious person who is always looking to learn new
            things and improve their skills. I am always looking for new
            challenges that allow me to continue growing as a professional.
          </p>
          <p>
            🔭 I am currently looking for job opportunities, so if my profile
            fits what you are looking for, do not hesitate to contact me at my
            email <i>toloyjc@gmail.com.</i>
          </p>
        </div>
      </section>

      <footer className="w-full mt-12">
        <ul className="w-full flex flex-wrap flex-row justify-around gap-3 animate-slide">
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-java-script hover:scale-125">
            <SiJavascript />
          </li>
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-type-script hover:scale-125">
            <SiTypescript />
          </li>
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-react hover:scale-125">
            <SiReact />
          </li>
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-redux hover:scale-125">
            <SiRedux />
          </li>
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-node-js hover:scale-125">
            <FaNodeJs />
          </li>
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-express hover:scale-125">
            <SiExpress />
          </li>
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-sequelize hover:scale-125">
            <SiSequelize />
          </li>
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-postresql hover:scale-125">
            <SiPostgresql />
          </li>
          <li className="text-6xl text-gray-400 transition-all duration-300 hover:text-brand-mongodb hover:scale-125">
            <SiMongodb />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default About;
