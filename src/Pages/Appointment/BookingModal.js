import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";

function BookingModal({ date, treatment, setTreatment }) {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "pp");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      data: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(`You have alridy Appointment on, ${data.booking?.date} at ${data.booking?.slot}`);
        }
        // to close the modal
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for:
            {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input type="text" disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {
                slots.map((slot) => <option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
