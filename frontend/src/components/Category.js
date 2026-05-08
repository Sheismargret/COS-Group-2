import React from 'react';
import '../styles/Category.css';

const Category = () => {
  const categories = [
    { name: 'Engineering', roles: '3,200 open roles' },
    { name: 'Design', roles: '1,800 open roles' },
    { name: 'Marketing', roles: '2,400 open roles' },
    { name: 'Sales', roles: '1,500 open roles' },
    { name: 'Finance', roles: '1,100 open roles' },
    { name: 'Healthcare', roles: '900 open roles' },
    { name: 'Data Science', roles: '2,100 open roles' },
    { name: 'Product', roles: '1,300 open roles' },
  ];

  return (
    <section className="category-section-wrapper">
      <div className="category-text-header">
        <h2>Explore by Category</h2>
        <p>Browse opportunities across the most in-demand industries</p>
      </div>

      <div className="category-grid-layout">
        {categories.map((item, index) => (
          <div key={index} className="category-item-card">
            <div className="category-card-text">
              <h3 className="category-name">{item.name}</h3>
              <p className="category-role-count">{item.roles}</p>
            </div>
            <span className="category-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;