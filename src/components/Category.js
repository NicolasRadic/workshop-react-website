import React from "react";

const Category = ({ selectedRadio, setSelectedRadio }) => {
  const categoryRadio = ["fruit", "légume"];
  return (
    <div>
      <ul>
        {categoryRadio.map((category) => (
          <li key={category}>
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
