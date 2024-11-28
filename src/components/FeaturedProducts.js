import React, { useState } from "react";

function FeaturedProducts() {
  const products = [
    { title: 'Gaming Laptop', price: '$999.99', priceInINR: 999.99 * 83, description: 'Powerful gaming laptop.', details: 'This gaming laptop features the latest GPU and an immersive display for gaming.', image: 'https://www.asus.com/us/site/gaming/assets/images/rog/Strix-G/hero.png' },
    { title: 'Latest Smartphone', price: '$880.99', priceInINR: 301.20 * 83, description: 'Best smartphone features.', details: 'This smartphone includes a high-resolution camera and fast charging support.', image: 'https://image.made-in-china.com/202f0j00UBOWqRpMYEfj/White-Color-C20-PRO-New-2024-Smartphone-4G-5g-Mobile-Phone.webp' },
    { title: 'Wireless Keyboard', price: '$58.99', priceInINR: 14.45 * 83, description: 'Comfortable wireless keyboard.', details: 'This keyboard offers ergonomic keys and long battery life.', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/h/y/v/-original-imah3zvgzygyxsjp.jpeg?q=20&crop=false' },
    { title: 'Wireless Headphone', price: '$99.99', priceInINR: 14.45 * 83, description: 'Experience the freedom of wireless audio.', details: 'Enjoy crystal-clear audio and noise cancellation with these headphones.', image: 'https://images-eu.ssl-images-amazon.com/images/I/71zfpkr4bYL._AC_UL210_SR210,210_.jpg' },
    { title: 'Smartwatch', price: '$120.99', priceInINR: 14.45 * 83, description: 'Track your fitness goals and notifications.', details: 'This smartwatch monitors your heart rate and integrates with your smartphone.', image: 'https://m.media-amazon.com/images/I/51Rcp-J7szL._AC_UF1000,1000_QL80_.jpg' },
    { title: '10-inch Tablet', price: '$399.99', priceInINR: 481.92 * 83, description: 'Portable and powerful for your needs.', details: 'This tablet offers a high-resolution display and fast performance.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KzV0oSIwPR376aMQxiUYxahpsu22K0N-MqfZKH2QPcN7NcnJ8q0i9_bZE6vXu313TeU&usqp=CAU' }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="featured" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Featured Products</h2>

        {/* Bootstrap Carousel */}
        <div id="featuredProductsCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {products.map((product, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="card product-card shadow h-50 text-center">
                  <img src={product.image} className="card-img-top img-fluid" alt={product.title} style={{ objectFit: 'cover', height: '300px' }} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">₹ {product.priceInINR.toFixed(2)}</p> {/* Price in INR */}
                    <p className="text-muted">{product.description}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewDetails(product)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#featuredProductsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#featuredProductsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Modal for product details */}
      {isModalOpen && selectedProduct && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '96vw', maxHeight: '80vh', overflowY: 'auto' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.title}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body" style={{ height: 'auto' }}>
                <img src={selectedProduct.image} className="img-fluid mb-3" alt={selectedProduct.title} style={{ maxHeight: '400px', objectFit: 'contain' }} />
                <p><strong>Price:</strong> ₹ {selectedProduct.priceInINR.toFixed(2)}</p> {/* Price in INR */}
                <p><strong>Description:</strong> {selectedProduct.details}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProducts;