import React from "react"
import "../css/cart_object_updater.css"

function CartUpdater() {
    const [cart, setCart] = React.useState({item1: 0, item2: 0})

    function handleIncrease(key) {
        setCart(prevCart => (
            {...prevCart, [key]:prevCart[key]+1}
        ))
    }

    function handleDecrease(key) {
        setCart(prevCart => (
            {...prevCart, [key]:prevCart[key] < 1 ? 0: prevCart[key] - 1}
        ))
    }
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            
            <div className="cart-item" data-id="item1">
                <span className="item-name">Item 1</span>
                <div className="quantity-controls">
                <button className="decrease" onClick={() => handleDecrease("item1")}>-</button>
                <span className="quantity">{cart.item1}</span>
                <button className="increase" onClick={() => handleIncrease("item1")}>+</button>
                </div>
            </div>

            <div className="cart-item" data-id="item2">
                <span className="item-name">Item 2</span>
                <div className="quantity-controls">
                <button clasName="decrease" onClick={() => handleDecrease("item2")}>-</button>
                <span className="quantity">{cart.item2}</span>
                <button className="increase" onClick={() => handleIncrease("item2")}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartUpdater