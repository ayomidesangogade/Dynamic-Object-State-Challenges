import React from "react"
import "../css/cart_updater.css"

function CartUpdater() {
    return (
        <div class="cart-container">
  <h2>Your Cart</h2>
  
  <div class="cart-item" data-id="item1">
    <span class="item-name">Item 1</span>
    <div class="quantity-controls">
      <button class="decrease">−</button>
      <span class="quantity">1</span>
      <button class="increase">+</button>
    </div>
  </div>

  <div class="cart-item" data-id="item2">
    <span class="item-name">Item 2</span>
    <div class="quantity-controls">
      <button class="decrease">−</button>
      <span class="quantity">3</span>
      <button class="increase">+</button>
    </div>
  </div>
</div>

    )
}

export default CartUpdater