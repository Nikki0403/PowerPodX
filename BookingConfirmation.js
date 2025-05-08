import React from "react";

const BookingConfirmation = ({ bookingDetails }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p><strong>Power Station:</strong> {bookingDetails.powerStation}</p>
      <p><strong>Rate:</strong> {bookingDetails.rate}</p>
      <p><strong>Location:</strong> {bookingDetails.location}</p>
      <p><strong>Message:</strong> {bookingDetails.message || "No additional notes"}</p>
    </div>
  );
};

export default BookingConfirmation;
