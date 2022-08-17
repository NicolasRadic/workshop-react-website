import React from "react";

const AddBasket = ({
  articleQuantity,
  setArticleQuantity,
  product,
  cartItem,
  setCartItem,
}) => {
  const handleClick = () => {
    const exist = cartItem.find((item) => item.product === product.name);

    !exist
      ? setCartItem((cartItem) => [
          ...cartItem,
          {
            value: articleQuantity,
            product: `${product.name}`,
            price: product.price,
          },
        ])
      : (exist.value += articleQuantity);
  };

  console.log(cartItem);
  return (
    <div className="addCart">
      <p></p>
      <div className="addCart__value">
        <button
          className="addCart__quantity addCart__quantity--less"
          onClick={() =>
            setArticleQuantity(
              articleQuantity === 0 ? articleQuantity : articleQuantity - 1
            )
          }
        >
          -
        </button>

        <p className="addCart__productQuantity">{articleQuantity}</p>
        <button
          className="addCart__quantity addCart__quantity--more"
          onClick={() => setArticleQuantity(articleQuantity + 1)}
        >
          +
        </button>
      </div>
      <button
        className="addCart__valueButton"
        onClick={() => {
          setArticleQuantity(0);
          handleClick();
        }}
      >
        Ajouter
      </button>
    </div>
  );
};

export default AddBasket;
