import React from 'react';

function Categories() {
    const categories = [
        { icon: 'fa-laptop', title: 'Laptops', description: 'Explore our range of laptops for every need.' },
        { icon: 'fa-mobile-alt', title: 'Smartphones', description: 'Discover the latest smartphones and accessories.' },
        { icon: 'fa-headphones-alt', title: 'Audio', description: 'Browse premium headphones for superior sound quality.' }
    ];

    return (
        <section id="categories" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Categories</h2>
                <div className="row">
                    {categories.map((category, index) => (
                        <div className="col-md-4 text-center mb-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <i className={`fas ${category.icon} category-icon mb-2`}></i>
                                    <h5 className="card-title">{category.title}</h5>
                                    <p className="card-text">{category.description}</p>
                                    <a href="#featured" className="btn btn-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;