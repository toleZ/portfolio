const Title = ({ children }) => {
  const convert = (word) => {
    const wordSplited = word.split("");
    const firstLetter = wordSplited[0].toUpperCase();
    const rest = wordSplited.splice(1).join("");

    return firstLetter + rest;
  };

  return (
    <h1
      className={`mb-4 relative text-gray-500 text-8xl text-opacity-50 font-londrina after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:content-${`['${convert(
        children
      )}']`} after:text-3xl after:text-white after:font-lora text-center`}
    >
      {children.toUpperCase()}
    </h1>
  );
};

export default Title;
