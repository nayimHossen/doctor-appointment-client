import { format } from "date-fns";
import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

function AvailableAppointments({ date }) {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on
        {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-12">
        {
          services.map((service) => (
            <Service
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            />
          ))
        }
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
}

export default AvailableAppointments;
