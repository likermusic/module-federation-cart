import { useState } from "react";
import AppLike from "./AppLike";

export default function Products() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Headphones", price: 149 },
    { id: 3, name: "Keyboard", price: 79 },
  ];

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — ${product.price}
            <button type="button" onClick={() => addToCart(product)}>
              Add ITEM to cart ❤️
            </button>
          </li>
        ))}
      </ul>
      <p>Items in cart: {cart.length}</p>
      <AppLike />
    </section>
  );
}
