import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-lift flex justify-center items-center gap-15 flex-wrap"
    >
      {categories.map((category) => (
        <NavLink
          to= {`/category/${category.category}`}
          key={category.category}
          role="tab"
          className={({isActive})=> `tab text-2xl font-thin ${isActive ? 'tab-active':''}`}
        >  
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
