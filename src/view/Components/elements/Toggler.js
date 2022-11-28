import { IoMoon, IoSunny } from "react-icons/io5";

const Toggler = ({ theme, toggleTheme }) => {
  return (
    <>
      {theme === "dark" ? (
        <IoMoon size={23} color="#ffe549" onClick={toggleTheme} />
      ) : (
        <IoSunny size={26} color="#ffe549" onClick={toggleTheme} />
      )}
    </>
  );
};

export default Toggler;
