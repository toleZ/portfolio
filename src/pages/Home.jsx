const Home = () => {
  return (
    <div
      className="p-10 w-full min-h-screen bg-cover bg-zinc-950 bg-dark-950 relative"
      id="home"
    >
      <div className="ml-6 absolute top-1/2 left-1/3 translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-light-navy font-lora text-xl">Hi, I'm Juan!👋</h2>
        <h1 className="my-3 text-white font-montserrat text-4xl">
          Full Stack Developer
        </h1>
        <p className="w-4/5 text-gray-500 font-hind text-lg">
          I simplify complex challenges using my skills in various technologies
          to create user-friendly software that optimizes and streamlines
          complex processes.
          <span className="block text-gray-400 font-semibold italic">
            "Turning complexity into simplicity."
          </span>
        </p>
        <a
          className="mt-6 p-3 inline-block border-2 border-light-navy bg-light-navy rounded-sm text-white font-semibold hover:border-light-navy hover:bg-opacity-0 hover:text-light-navy active:scale-90  transition-all duration-300"
          href="https://drive.google.com/file/d/14sv_0ORKXfP6acZPiO1IO4fjwW5yul4z/view?usp=share_link"
        >
          View my CV
        </a>
        <a
          className="mt-6 md:ml-3 p-3 inline-block border-2 border-light-navy bg-light-navy rounded-sm text-white font-semibold hover:border-light-navy hover:bg-opacity-0 hover:text-light-navy active:scale-90  transition-all duration-300"
          href="./ToloyJuanCruzCV.pdf"
          download
        >
          Download my CV
        </a>
      </div>
      <img
        src="./hello.svg"
        alt="Hello"
        className="w-[45vw] absolute bottom-0 right-0"
      />
    </div>
  );
};

export default Home;
