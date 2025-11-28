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
    const [itemName, setItemName] = useState(""); // Item name input
    const [price, setPrice] = useState(0); // Price input (default: 0)
    const [quantity, setQuantity] = useState(1); // Quantity input (default: 1)
    const [errorMsg, setErrorMsg] = useState("");
    const [isErrorMsgVisiable, setIsErrorMsgVisiable] = useState(false);
    const [isAddBtnDisabled, setIsAddBtnDisabled] = useState(false);
    const [category, setCategory] = useState("");

    /**
     * Handles form submission and adds new item to cart
     * @param {Event} e - Form submit event
     */
    function handleSubmit(e) {
        e.preventDefault(); // Prevent page refresh on form submit

        setIsErrorMsgVisiable(false);

        // Input validation: check if item name contains only spaces (HTML handles other validation)
        if (itemName.trim() == "") {
            setErrorMsg("Name is required!");
            setIsErrorMsgVisiable(true);
            setIsAddBtnDisabled(true);
            return;
        }

        if (price <= 0) {
            setErrorMsg("Price must be greater than 0!");
            setIsErrorMsgVisiable(true);
            setIsAddBtnDisabled(true);
            return;
        }

        if (quantity < 1) {
            setErrorMsg("Quantity must be at least 1!");
            setIsErrorMsgVisiable(true);
            setIsAddBtnDisabled(true);
            return;
        }

        if (category == "") {
            setErrorMsg("Please select a Category!");
            setIsErrorMsgVisiable(true);
            setIsAddBtnDisabled(true);
            return;
        }


        // Create new item object and add to cart
        setItems([
            ...items, // Spread existing items
            {
                id: Date.now(), // Use timestamp as unique ID
                name: itemName.trim(), // Remove leading/trailing spaces
                price: parseFloat(price), // Convert price to number
                quantity: parseInt(quantity), // Convert quantity to integer
                category: category
            },
        ]);

        // Reset form fields to default values after successful submission
        setItemName("");
        setPrice(0);
        setQuantity(1);
        setCategory("");
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
                    onChange={(e) => {
                        setItemName(e.target.value);
                        setIsAddBtnDisabled(false);
                    }}
                />

                {/* Price Input */}
                <label htmlFor="price" className="add-item-label">
                    Item Price:
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    step="0.01" 
                    className="form-input-box"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                        setIsAddBtnDisabled(false);
                    }}
                />

                {/* Quantity Input */}
                <label htmlFor="quantity" className="add-item-label">
                    Quantity:
                </label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1" 
                    step="1" 
                    className="form-input-box"
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={(e) => {
                        setQuantity(e.target.value);
                        setIsAddBtnDisabled(false);
                    }}
                />
                <label htmlFor="category" className="add-item-label">
                    Category:
                </label>
                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => 
                        {setCategory(e.target.value)
                        setIsAddBtnDisabled(false);
                    }}
                    
                >
                    <option value="" disabled selected>--------------- Choose Category ---------------</option>
                    <option value="Food">Food</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Others">Others</option>
                </select>

                {/* Submit Button */}
                <button
                    type="submit"
                    id="submit-button"
                    className="submit-button"
                    onSubmit={handleSubmit}
                    disabled={isAddBtnDisabled}
                >
                    Add to Cart
                </button>

                {isErrorMsgVisiable && <p id="error-msg">{errorMsg}</p>}
            </form>
        </div>
    );
}

export default AddItem;
