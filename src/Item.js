import { useState } from "react";
const Item = ({ name, price, img_url, onQtyChange }) => {
  const [qty, setQty] = useState(0);
  const handleDecrement = () => {
    if (qty > 0) {
      setQty((old) => old - 1);
      onQtyChange({
        type: "decrement",
        price: price
      });
    }
  };
  const handleIncrement = () => {
    setQty((old) => old + 1);
    onQtyChange({
      type: "increment",
      price: price
    });
  };
  return (
    <div className="item-row">
      <div className="item-main-container">
        <div className="item-main-container-info">
          <img className="item-img" src={img_url} alt="An item inc cart" />
          <span className="item-name">{name}</span>
        </div>
        <span
          style={{
            marginRight: "8px"
          }}
        >
          X
        </span>
      </div>
      <div className="item-group-qty">
        <button className="item-counter" onClick={handleDecrement}>
          -
        </button>
        <div className="simple-container">{qty}</div>
        <button className="item-counter" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="item-price">${qty * price}</div>
    </div>
  );
};
export default Item;
