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

const About = () => {
  return (
    <div
      className="p-10 w-full min-h-screen flex flex-col justify-center bg-cover bg-dark-900"
      id="about"
    >
      <h1 className="mb-6 relative text-gray-500 text-8xl text-opacity-50 font-londrina after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:content-['About'] after:text-3xl after:text-white after:font-lora text-center">
        ABOUT
      </h1>

      <section>
        <h1 className="text-white font-montserrat text-4xl">Juan C. Toloy</h1>
        <h2 className="mt-2 mb-6 text-light-navy font-lora text-xl">
          Full Stack Developer
        </h2>

        <div className="w-full h-[1px] bg-gray-500 opacity-20"></div>

        <p className="mt-6 text-gray-500 font-hind text-lg leading-loose">
          🙋‍♂️ Hello! I am a Full Stack developer with experience in technologies
          such as JavaScript, TypeScript, React, Redux, NodeJS, Express,
          Sequelize, PostgreSQL, MongoDB, among others.
          <br />
          🚀 I have experience as a Henry Hero where I have taught online
          classes in the "Soy Henry" bootcamp from Monday to Thursday to people
          who have no previous knowledge of programming.
          <br />
          🌱 I am a very curious person who is always looking to learn new
          things and improve their skills. I am always looking for new
          challenges that allow me to continue growing as a professional.
          <br />
          🔭 I am currently looking for job opportunities, so if my profile fits
          what you are looking for, do not hesitate to contact me at my email{" "}
          <i>toloyjc@gmail.com.</i>
        </p>
      </section>

      <footer className="w-full mt-20">
        <ul className="flex flex-row justify-around gap-3">
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
