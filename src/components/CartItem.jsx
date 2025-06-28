import { useContext, useState, useEffect } from "react";
import { CartContext } from "../pages/ProductPage";
import { IconX } from "@tabler/icons-react";

function CartItem() {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [ renderedItems, setRenderedItems ] = useState([]);

  useEffect(() => {
    // Handle new items added to the cart
    const newItems = cartItem.filter(
      (item) => !renderedItems.some((rendered) => rendered.id === item.id)
    );

    if (newItems.length > 0) {
      setRenderedItems([...renderedItems, ...newItems]);
    } else {
      // Handle updates to existing items
      const updatedItems = renderedItems.map((rendered) => {
        const updatedItem = cartItem.find((item) => item.id === rendered.id);
        return updatedItem ? { ...rendered, ...updatedItem } : rendered;
      });

      setRenderedItems(updatedItems);
    }
  }, [cartItem]);

  const increase = (id) => {
    setCartItem((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, boughtQty: item.boughtQty + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCartItem((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id && item.boughtQty > 1
          ? { ...item, boughtQty: item.boughtQty - 1 }
          : item
      )
    );
  };

  const calcPrice = (quantity, itemPrice) => {
    return quantity * itemPrice;
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  return (
    <>
      {cartItem.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-img">
            <img src={item.img} alt="product" />
          </div>
          <div className="cart-middle">
            <p className="cart-name">{item.description}</p>
            <div className="cart-btns">
              <button onClick={() => decrease(item.id)}>-</button>
              <p className="quantity">{item.boughtQty}</p>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
          <div className="cart-right">
            <p className="cart-price">¥{calcPrice(item.boughtQty, item.price)}</p>
            <IconX onClick={() => removeFromCart(item.id)} />
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
