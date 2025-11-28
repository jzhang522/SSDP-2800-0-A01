/**
 * Cart Component
 * Displays the shopping cart with all added items and provides functionality to remove items.
 * 
 * @param {Array} items - Array of item objects with properties: id, name, price, quantity
 * @param {Function} setItems - State setter function to update the items array
 */
function Cart({ items, setItems }) {
  /**
   * Removes an item from the cart by filtering out the item with matching ID
   * @param {number} itemId - The unique ID of the item to remove
   */
  function removeItem(itemId) {
    setItems(prev => prev.filter(item => item.id !== itemId));
  }

  function removeAll(){
    setItems([])
  }

  // Store the total number of items to avoid recalculating
  const totalItems = items.reduce((accumulator, items) => accumulator + items.quantity, 0);
  const totalPrice = items.reduce((accumulator, items) => accumulator + items.price, 0)

  return (
    <div className="cart-container">
      {/* Cart header */}
      <h2 className="container-header">Cart Items</h2>  
      
      <div className="cart-item-container">
        {/* Display total count of items */}
        <h3 className="cart-total"> 
          Total Items: <span className="total-items">{totalItems}</span>
        </h3>
        
    
        {/* Conditional rendering: show items if cart has items, otherwise show empty message */}
        {totalItems > 0 ? (
          <section className="cart-separator"> 
            <ul className="cart-list">
              {/* Map through items array and render each item */}
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">Price: ${item.price}</span>
                  <span className="item-qty">Qty: {item.quantity}</span>
                  <span className="item-catagory">Category: {item.category}</span>

                  {/* Remove button triggers removeItem function with item's ID */}
                  <button className="remove-button" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h3 className="cart-total">
              Total Price: <span className="total-price"> ${totalPrice}</span>
            </h3>
            
          </section>
        ) : (
          /* Empty cart message */
          <p id="empty-message">Your cart is empty</p>
        )}
      </div>
      <button className="clear-btn" onClick={removeAll}>Clear Cart</button>
    </div>
  );
}

export default Cart;
