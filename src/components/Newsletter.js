import React, { useState } from 'react';

function Newsletter() {
    const [notification, setNotification] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        setNotification('Thank you for subscribing!');
        setTimeout(() => setNotification(''), 3000); // Clear the notification after 3 seconds
    };

    return (
        <section className="bg-light py-5 text-center">
            <div className="container">
                <h2 className="mb-4">Subscribe to Our Newsletter</h2>
                <p>Get the latest updates and exclusive offers directly in your inbox.</p><br></br>
                <form className="d-flex justify-content-center" onSubmit={handleSubscribe}>
                    <input type="email" className="form-control w-50" placeholder="Enter your email" required />
                    <button type="submit" className="btn btn-primary ms-2">Subscribe</button>
                </form>
                {notification && (
                    <div className="alert alert-success mt-3" role="alert">
                        {notification}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Newsletter;