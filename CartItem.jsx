import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../store/CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="cart-box">
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty. <Link to="/plants">Go shopping</Link></p>
      ) : (
        <>
          {items.map((it) => (
            <div key={it.id} className="cart-row">
              <img src={it.image} alt={it.name} />

              <div>
                <h3>{it.name}</h3>
                <p>Unit Price: ₹ {it.price}</p>
                <p>Total: ₹ {it.price * it.quantity}</p>
              </div>

              <div>
                <button onClick={() => dispatch(decreaseQty(it.id))}>-</button>
                <span style={{ margin: "0 10px" }}>{it.quantity}</span>
                <button onClick={() => dispatch(increaseQty(it.id))}>+</button>

                <div style={{ marginTop: 10 }}>
                  <button onClick={() => dispatch(removeItem(it.id))}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h3>Total Cart Amount: ₹ {totalAmount}</h3>

          <button className="btn" onClick={() => alert("Coming Soon")}>
            Checkout
          </button>

          <Link to="/plants" style={{ marginLeft: 12 }}>
            <button className="btn">Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
}
