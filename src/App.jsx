import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";
/* import ToggleColorButton from "./components/ToggleColorButon"; */
import ToTopButton from "./components/ToTopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
        <MobileNavbar />
      </header>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* <ToggleColorButton /> */}
      <ToTopButton />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
