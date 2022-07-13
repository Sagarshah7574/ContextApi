import React, { useContext, useEffect, useReducer, useState } from "react";
import ShopContext from "../Context/ShopContext";

import Navigation from "../Components/Navigation";
import "./Cart.css";
import { DECREMENT, INCREMENT, shopReducer } from "../Context/Reducers";
import Cartview from "./Cartview";

function Cart(props) {
  const context = useContext(ShopContext);

  console.log("Reducer", context);
  const [total, setTotal] = useState();
  // useEffect(() => {
  //   let data = context.cart.reduce((acc, cur) => {
  //     console.log(acc + cur.price);
  //     return acc + Number(cur.price * 1);
  //   }, 0);
  //   settotal(data);
  // }, [context.cart]);

  // useEffect(() => {
  //   settotal(
  //     context.cart.reduce(
  //       (previous, current) => previous + Number(current.price),
  //       0
  //     )
  //   );
  // }, [context.cart]);

  useEffect(() => {
    setTotal(
      context.cart.reduce(
        (accu, currElem) =>
          accu + Number(Math.ceil(currElem.price) * currElem.qty),
        0
      )
    );
  }, [context.cart]);

  return (
    <>
      <Navigation
        cartItemNumber={
          //   context.cart.reduce((count, curItem) => {
          //   return count + curItem.quantity;
          //   // return context.cart.length;
          // }, 0)
          context.cart.length
        }
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <div>
          <span style={{ fontSize: 30 }}>My Cart</span>
          <br />
          <span style={{ fontSize: 30 }}>Total:Rs{total}</span>
        </div>
        <ul>
          {context.cart.map((cartItem) => (
            <Cartview prod={cartItem} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Cart;

// {isCart && (
//     <div>
//       <span class="font-bold text-white">
//         {" "}
//         X{/* {prod.qty ? prod.qty : state} */}
//         {state}
//       </span>
//       <button
//         className="bg-sky-500/50 rounded-full text-center font-bold text-white  px-2 mx-2"
//         onClick={() => {
//           dispatch({ type: "INCREMENT", payload: prod.qty });
//           changehandle(prod.id);
//         }}
//         // onMouseDown={() => changehandle(prod.id)}
//       >
//         +
//       </button>
//       <button
//         className="bg-red-500/50 rounded-full w-8 text-center font-bold text-white px-2 mx-2"
//         onClick={() => {
//           dispatch({ type: "DECREMENT", payload: prod.qty });
//           changehandle(prod.id);
//         }}
//       >
//         -
//       </button>
//     </div>
//   )}
