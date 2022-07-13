import React from "react";

export default React.createContext({
  products: [
    { id: "p1", title: "Gaming Mouse", price: 100, qty: 1 },
    { id: "p2", title: "Harry Potter 3", price: 150, qty: 1 },
    { id: "p3", title: "Used plastic bottle", price: 20, qty: 1 },
    { id: "p4", title: "Half-dried plant", price: 299, qty: 1 },
  ],
  cart: [],

  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
