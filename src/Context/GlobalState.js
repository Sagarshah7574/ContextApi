import React, { useReducer } from "react";
import ShopContext from "./ShopContext";

import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./Reducers";

function GlobalState(props) {
  const products = [
    { id: "p1", title: "Gaming Mouse", price: 100, qty: 1 },
    { id: "p2", title: "Harry Potter 3", price: 150, qty: 1 },
    { id: "p3", title: "Used plastic bottle", price: 20, qty: 1 },
    { id: "p4", title: "Half-dried plant", price: 299, qty: 1 },
  ];

  //const[carState,dispatch]=useState([]);

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  // useEffect(() => {
  //   dispatch({ type: "GET_TOTAL" });

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        // increment: increment,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
