import React from 'react';

function Testimonials() {
    const testimonials = [
        { name: 'John Doe', message: 'Best shopping experience! Highly recommend E-Shop.' },
        { name: 'Jane Smith', message: 'Amazing customer service and fast shipping.' },
        { name: 'Michael Lee', message: 'Great selection of products. Always find what I need!' }
    ];

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">What Our Customers Say</h2>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="testimonial text-center">
                                <h5>{testimonial.name}</h5>
                                <p className="text-muted">"{testimonial.message}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;