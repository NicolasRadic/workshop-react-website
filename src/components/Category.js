import React from "react";

const Category = ({ selectedRadio, setSelectedRadio }) => {
  const categoryRadio = ["fruit", "légume"];
  return (
    <div className="category">
      <ul className="category__list">
        {categoryRadio.map((category) => (
          <li className="category__li" key={category}>
            <input
              type="radio"
              id={category}
              name="categoryRadio"
              checked={category === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={category}>{category}</label>
          </li>
        ))}
        {selectedRadio && (
          <button
            className="stop-selection"
            onClick={() => setSelectedRadio("")}
          >
            Annuler la sélection
          </button>
        )}
      </ul>
    </div>
  );
};

export default Category;
