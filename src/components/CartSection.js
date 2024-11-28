import React, { useState } from "react";

const CartSection = () => {
  const conversionRate = 83; // Example conversion rate: 1 USD = 83 INR

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gaming Laptop", quantity: 1, price: 999.99 }, // Matches FeaturedProducts price
    { id: 2, name: "Latest Smartphone", quantity: 1, price: 301.20 }, // Matches FeaturedProducts price
    { id: 3, name: "10-inch Tablet", quantity: 1, price: 481.92 }, // Matches FeaturedProducts price
    { id: 4, name: "Wireless Keyboard", quantity: 1, price: 14.45 }, // Added from FeaturedProducts
    { id: 5, name: "Wireless Headphone", quantity: 1, price: 14.45 }, // Added from FeaturedProducts
    { id: 6, name: "Smartwatch", quantity: 1, price: 14.45 }, // Added from FeaturedProducts
  ]);


  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * conversionRate;

  return (
    <section id="cart" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Shopping Cart</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={item.quantity}
                      min="1"
                      max="10"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>₹{(item.price * conversionRate).toFixed(2)}</td>
                  <td>₹{(item.price * item.quantity * conversionRate).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-end mt-3">
          <h4>Total: ₹{calculateTotal().toFixed(2)}</h4>
          <a href="#checkout" className="btn btn-success btn-lg">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </section>
  );
};

export default CartSection;