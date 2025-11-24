import { useState } from "react";
import Cart from "./Cart";

function AddItem() {
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [itemsArray, setItemsArray] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        //input validation (the rests are done by HTML)
        if(itemName.trim() == "") {
            alert("Please enter a valid item name — it can’t be only spaces.");
            return;
        }

        //appends data to the items array
        setItemsArray([
            ...itemsArray,
            { id: Date.now() , name: itemName.trim(), price: parseFloat(price), quantity: parseInt(quantity) },
        ]);

        //reset 
        setItemName("");
        setPrice(0);
        setQuantity(1);
    }

    return (
        <>
            <div className="add-item-container">
                <form onSubmit={handleSubmit} className="add-item-form">
                    <h2 className="containter-header">Add Item</h2>
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
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor="quantity" className="add-item-label">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="99"
                        step="1"
                        className="form-input-box"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="submit-button"
                        onSubmit={handleSubmit}
                    >
                        Add to Cart
                    </button>
                </form>
            </div>

            <Cart items={itemsArray} setItems={setItemsArray}/>
        </>
    );
}

export default AddItem;
