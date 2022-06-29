import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

function Info() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[-80px] max-w-7xl mx-auto md:px-12">
      <InfoCard cardTitle="Opening Hours" infoBg="bg-gradient-to-r from-secondary to-primary" img={clock} />
      <InfoCard cardTitle="Our Locations" infoBg="bg-accent" img={location} />
      <InfoCard cardTitle="Contact Us" infoBg="bg-gradient-to-r from-secondary to-primary" img={phone} />
    </div>
  );
}

export default Info;
