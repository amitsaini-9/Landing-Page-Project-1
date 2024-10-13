import AboutUs from "./Components/AboutUs";
import ChooseUs from "./Components/ChooseUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import Ourmission from "./Components/Ourmission";
import Ourservices from "./Components/Ourservices";
import Testimonials from "./Components/Testimonials";
import Wrapper from "./Components/Wrappper";
function App() {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Ourservices></Ourservices>
      <AboutUs></AboutUs>
      <ChooseUs></ChooseUs>
      <Ourmission></Ourmission>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
