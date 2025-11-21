import { useState } from "react";
import Cart from "./Cart"

function AddItem() {
    const [itemName, setItemName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();

    return (
        <>
            <div className="add-item-container">
                <h2 className="containter-header">Add Item</h2>
                <label htmlFor="item-name" className="add-item-label"></label>
                <input
                    type="text"
                    id="item-name"
                    name="item-name"
                    className="form-input-box"
                    placeholder="Enter item name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <label htmlFor="price" className="add-item-label"></label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    className="form-input-box"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label htmlFor="quantity" className="add-item-label"></label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    max="100"
                    step="1"
                    className="form-input-box"
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit" className="submit-button">
                    Add to Cart
                </button>
            </div>

            <Cart ></Cart>
        </>
    );
}

export default AddItem;
