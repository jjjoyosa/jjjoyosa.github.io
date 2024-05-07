import React from 'react';
import './style.css';

const Header = ({ name, categories, setActiveCategory, activeCategory }) => {
  return (
    <div className="header">
      <h1>{name}</h1>
      <nav>
        <ul className="navigation-menu">
          {categories.map(category => (
            <li 
              key={category.id} 
              className={category.name === activeCategory ? 'active' : ''}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
