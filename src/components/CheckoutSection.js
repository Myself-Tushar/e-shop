import React, { useState } from "react";

const CheckoutSection = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    setConfirmationMessage("Thank you for your purchase! Your order has been placed successfully.");
    setTimeout(() => setConfirmationMessage(""), 5000); // Clear the message after 5 seconds
  };

  return (
    <section id="checkout" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Shipping Address
            </label>
            <textarea
              className="form-control"
              id="address"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Complete Purchase
          </button>
        </form>
        {confirmationMessage && (
          <div className="alert alert-success mt-4" role="alert">
            {confirmationMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckoutSection;