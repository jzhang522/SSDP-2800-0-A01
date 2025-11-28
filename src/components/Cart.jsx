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
        setItems((prev) => prev.filter((item) => item.id !== itemId));
    }

    function removeAll() {
        setItems([]);
    }

    // Store the total number of items to avoid recalculating
    const totalItems = items.reduce(
        (accumulator, items) => accumulator + items.quantity,
        0
    );
    const totalPrice = items.reduce(
        (accumulator, items) => accumulator + items.price * items.quantity,
        0
    );

    return (
        <div className="cart-container">
            {/* Cart header */}
            <h2 className="container-header">Cart Items</h2>

            <div className="cart-item-container">
                {/* Display total count of items */}
                <h3 className="cart-total">
                    Total Items:{" "}
                    <span className="total-items">{totalItems}</span>
                </h3>

                {/* Conditional rendering: show items if cart has items, otherwise show empty message */}
                {totalItems > 0 ? (
                    <>
                        <section className="cart-separator">
                            <ul className="cart-list">
                                {/* Map through items array and render each item */}
                                {items.map((item) => (
                                    <li key={item.id} className="cart-item">
                                        <span className="item-name">
                                            {item.name}
                                        </span>
                                        <div className="item-info-container">
                                            <span className="item-info">
                                                Price: ${item.price}
                                            </span>
                                            <span className="item-info">
                                                Qty: {item.quantity}
                                            </span>
                                            <span className="item-info">
                                                Category: {item.category}
                                            </span>
                                        </div>
                                        {/* Remove button triggers removeItem function with item's ID */}
                                        <button
                                            className="remove-button"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="cart-total" id="total-price">
                                Total Price:{" "}
                                <span className="total-price total-items">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </h3>
                        </section>
                        <button className="clear-button" onClick={removeAll}>
                            Clear Cart
                        </button>
                    </>
                ) : (
                    /* Empty cart message */
                    <p id="empty-message">Your cart is empty</p>
                )}
            </div>
        </div>
    );
}

export default Cart;
