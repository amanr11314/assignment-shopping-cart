import { useState } from "react";
import data from "../data";
import Item from "./Item";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [typeDiscount, setTypeDiscount] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const getOrderTotal = () => total - discount - typeDiscount;

  return (
    <div className="parent-main">
      <div className="div1-main">
        <div className="cart-heading"> {"< Order Summary"}</div>
        <div className="cart-headers">
          <div className="parent-order-summary-items">
            <header className="parent-order-summary-items-header">
              Items({itemCount})
            </header>
          </div>
          <div className="parent-order-summary-item-qty"> Qty</div>
          <div className="parent-order-summary-item-price">Price</div>
        </div>
        <div>
          {data.map((e) => (
            <Item
              {...e}
              onQtyChange={(obj) => {
                if (obj.type === "increment") {
                  setItemCount((old) => old + 1);
                  setTotal((old) => {
                    return old + parseInt(obj.price, 10);
                  });
                  if (itemCount >= 2) {
                    setDiscount(13);
                    setTypeDiscount(10);
                  }
                } else {
                  setItemCount((old) => {
                    return old - 1;
                  });
                  setTotal((old) => {
                    return old - parseInt(obj.price, 10);
                  });
                  if (itemCount <= 3) {
                    setDiscount(0);
                    setTypeDiscount(0);
                  }
                }
              }}
            />
          ))}
        </div>
      </div>
      <div className="div2-main">
        <div className="cart-invoice-outline">
          <div className="cart-invoice">
            <header className="cart-invoice-header">Total</header>
            <div
              style={{
                margin: "8px 0"
              }}
              className="cart-invoice-row-item"
            >
              <div> Items ({itemCount})</div>
              <div>: ${(Math.round(total * 100) / 100).toFixed(2)}</div>
            </div>
            <div className="cart-invoice-row-item">
              <div> Discount</div>
              <div>: -${(Math.round(discount * 100) / 100).toFixed(2)}</div>
            </div>
            <div className="cart-invoice-row-item">
              <div>Type Discount</div>
              <div>: -${(Math.round(typeDiscount * 100) / 100).toFixed(2)}</div>
            </div>
          </div>
          <footer className="cart-invoice-footer">
            <div>Order Total</div>
            <div>${(Math.round(getOrderTotal() * 100) / 100).toFixed(2)}</div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Cart;
