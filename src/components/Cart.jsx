function Cart({ items, setItems }) {

  function removeItem(itemId) {
    setItems(prev => prev.filter(item => item.id !== itemId));
  }

  return (
    <div className="cart-container">
      <h2 className="container-header">Cart Items</h2>

      <h3 className="cart-header">
        Total Items: <span className="total-items">{items.length}</span>
      </h3>
      {items.length > 0 ? (     <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>  Price: ${item.price}  Qty:{item.quantity}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
      
        ))}
      </ul> ) : (
        <p>Your cart is empty</p>
      )
    }
 
    </div>
  );
}

export default Cart;
