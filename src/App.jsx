import NavBar from "./components/NavBar";
import About from "./pages/About";
import Cta from "./pages/Cta";
import Specialties from "./pages/Specialties";
import Testimonials from "./pages/Testimonials";
import Ebook from "./pages/Ebooks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Cta />
      <About />
      <Specialties/>
      <Testimonials />
      <Ebook />
      <Footer/>
    </>
  );
}

export default App;
