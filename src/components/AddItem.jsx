import { useState } from "react";

/**
 * AddItem Component
 * Provides a form to add new items to the shopping cart with name, price, and quantity.
 * 
 * @param {Array} items - Current array of cart items
 * @param {Function} setItems - State setter function to update the items array
 */
function AddItem({ items, setItems }) {
    // Form field state management
    const [itemName, setItemName] = useState("");     // Item name input
    const [price, setPrice] = useState(0);            // Price input (default: 0)
    const [quantity, setQuantity] = useState(1);      // Quantity input (default: 1)

    /**
     * Handles form submission and adds new item to cart
     * @param {Event} e - Form submit event
     */
    function handleSubmit(e) {
        e.preventDefault(); // Prevent page refresh on form submit

        // Input validation: check if item name contains only spaces (HTML handles other validation)
        if(itemName.trim() == "") {
            alert("Please enter a valid item name — it can't be only spaces.");
            return;
        }

        // Create new item object and add to cart
        setItems([
            ...items, // Spread existing items
            { 
                id: Date.now(),                    // Use timestamp as unique ID
                name: itemName.trim(),              // Remove leading/trailing spaces
                price: parseFloat(price),           // Convert price to number
                quantity: parseInt(quantity)        // Convert quantity to integer
            },
        ]);

        // Reset form fields to default values after successful submission
        setItemName("");
        setPrice(0);
        setQuantity(1);
    }

    return (
        <div className="add-item-container">
            <form onSubmit={handleSubmit} className="add-item-form">
                {/* Form header */}
                <h2 className="containter-header">Add Item</h2>
                
                {/* Item Name Input */}
                <label htmlFor="item-name" className="add-item-label">
                        Item Name:
                    </label>
                    <input
                        type="text"
                        id="item-name"
                        name="item-name"
                        className="form-input-box"
                        placeholder="Enter item name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    
                {/* Price Input */}
                <label htmlFor="price" className="add-item-label">
                    Item Price:
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    min="0"           // Minimum value: 0
                    step="0.01"       // Allow cents (decimal places)
                        className="form-input-box"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    
                {/* Quantity Input */}
                <label htmlFor="quantity" className="add-item-label">
                    Quantity
                </label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"           // Minimum value: 1
                    max="99"          // Maximum value: 99
                    step="1"          // Integer values only
                        className="form-input-box"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    
                {/* Submit Button */}
                <button
                    type="submit"
                    id="submit-button"
                    className="submit-button"
                    onSubmit={handleSubmit}
                >
                    Add to Cart
                </button>
                </form>
            </div>
    );
}

export default AddItem;
