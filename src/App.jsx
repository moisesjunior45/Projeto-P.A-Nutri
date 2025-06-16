import NavBar from "./components/NavBar";
import About from "./pages/About";
import Cta from "./pages/Cta";
import Ebook from "./pages/Ebooks";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
     <NavBar />
      {/* <Cta /> */}
      {/* <About /> */}
      <Testimonials />
      <Ebook />
    </>
  );
}

export default App;
