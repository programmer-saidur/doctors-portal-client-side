import React from "react";

const service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body flex items-center justify-center">
          <h2 className="text-xl font-bold text-secondary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date.</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
          </p>
          <div className="card-actions">
            <label
              htmlFor="booking-modal"
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
              className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
