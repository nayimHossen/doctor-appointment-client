import Banner from "./Banner";
import Contact from "./Contact";
import Exceptional from "./Exceptional";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Exceptional />
      <MakeAppointment />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
