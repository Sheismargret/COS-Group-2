import React, { useRef } from 'react';
import '../styles/Category.css';

const Category = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const categoriesRow1 = [
    { name: 'Engineering',  roles: '3,200 open roles', tag: 'Top',      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=440&q=80' },
    { name: 'Design',       roles: '1,800 open roles', tag: 'Hot',      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=440&q=80' },
    { name: 'Marketing',    roles: '2,400 open roles', tag: 'Trending', img: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=440&q=80' },
    { name: 'Sales',        roles: '1,500 open roles', tag: 'High Pay', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=440&q=80' },
    { name: 'Data Science', roles: '2,100 open roles', tag: 'Growing',  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=440&q=80' },
    
  ];

  const categoriesRow2 = [
    { name: 'HR & People Ops',       roles: '563 open roles',   tag: 'Remote',   img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=440&q=80' },
    { name: 'Legal & Compliance',    roles: '412 open roles',   tag: 'Stable',   img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=440&q=80' },
    { name: 'Operations',            roles: '1,021 open roles', tag: 'Growing',  img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=440&q=80' },
    { name: 'Customer Success',      roles: '798 open roles',   tag: 'Trending', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=440&q=80' },
    { name: 'Product',      roles: '1,300 open roles', tag: 'Remote',   img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=440&q=80' },
  ];

  const CategoryCard = ({ item }) => (
    <div className="category-item-card">
      <img src={item.img} alt={item.name} className="category-card-img" loading="lazy" />
      <div className="category-card-overlay">
        <span className="category-card-tag">{item.tag}</span>
        <div className="category-card-text">
          <h3 className="category-name">{item.name}</h3>
          <p className="category-role-count">{item.roles}</p>
        </div>
      </div>
    </div>
  );

  const handleMouseEnter = (ref) => {
    if (ref.current) ref.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) ref.current.style.animationPlayState = 'running';
  };

  return (
    <section className="category-section-wrapper">
      <div className="category-text-header">
        <p className="category-eyebrow">Opportunities await</p>
        <h2>Explore by Category</h2>
        <p>Browse opportunities across the most in-demand industries</p>
      </div>

      <div className="category-marquee-viewport">
        <div
          className="category-marquee-row row-right"
          ref={row1Ref}
          onMouseEnter={() => handleMouseEnter(row1Ref)}
          onMouseLeave={() => handleMouseLeave(row1Ref)}
        >
          {[...categoriesRow1, ...categoriesRow1].map((item, index) => (
            <CategoryCard key={index} item={item} />
          ))}
        </div>

        <div
          className="category-marquee-row row-left"
          ref={row2Ref}
          onMouseEnter={() => handleMouseEnter(row2Ref)}
          onMouseLeave={() => handleMouseLeave(row2Ref)}
        >
          {[...categoriesRow2, ...categoriesRow2].map((item, index) => (
            <CategoryCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;