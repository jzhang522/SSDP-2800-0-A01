import { useState } from "react";

function Cart() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");

function totalCart(cartItem){
    setTotal()
}

  // State for all obejects in cart
  const [cartArr, setCartArr] = useState([]);

  // Delete statment
  function removeItem(itemToRemove) {
    setCartArr(cartArr.filter((oneCart) => oneCart !== itemToRemove));
  }

  return (
    <div className="cart-container">
      <h2 className="container-header">Cart Items</h2>
      <ul className="cart-list">
        <li className="cart-header">
            <h3>Total Items: <span className="total-items"></span></h3>
        </li>
      </ul>
    </div>
  );
}
export default Cart;
