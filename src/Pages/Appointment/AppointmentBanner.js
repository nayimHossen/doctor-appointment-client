import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

function AppointmentBanner({ date, setDate }) {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto md:px-12">
        <img src={chair} className="max-w-md rounded-lg shadow-2xl md:ml-12" alt="Dentist Chair" />
        <div className="md:mr-12">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>

    </div>
  );
}

export default AppointmentBanner;
