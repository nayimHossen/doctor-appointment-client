import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

function Info() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-12 mt-[-80px]">
      <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} />
      <InfoCard cardTitle="Our Locations" bgClass="bg-neutral" img={marker} />
      <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} />
    </div>
  );
}

export default Info;
