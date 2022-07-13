import React, { useContext, useReducer } from "react";
import { DECREMENT, INCREMENT, shopReducer } from "../Context/Reducers";
import ShopContext from "../Context/ShopContext";

function Cartview({ prod }) {
  const context = useContext(ShopContext);
  console.log("Reducer", context);

  const [state, dispatch] = useReducer(shopReducer, 1);
  // const [total, setTotal] = useState();

  // useEffect(() => {
  //   setTotal(
  //     Cart.reduce((previous, current) => previous + Number(current.price), 0)
  //   );
  // }, [Cart]);

  return (
    <li key={prod.id}>
      {/* <div>
        <span style={{ fontSize: 30 }}>My Cart</span>
        <br />
        <span style={{ fontSize: 30 }}>Total:{total}</span>
      </div> */}

      <div>
        <strong>{prod.title}</strong> - Rs{prod.price}(
        {/* {cartItem.quantity}) */}
        {state})
      </div>
      <div>
        <button onClick={context.removeProductFromCart.bind(this, prod.id)}>
          Remove from Cart
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-success"
          // OnClick={
          //   () => console.log("amititititititi", prod)
          //dispatch({ type: "increment", payload:state+1})
          //}
          onClick={() => dispatch({ type: INCREMENT, payload: prod.id })}
        >
          +
        </button>{" "}
        &nbsp;&nbsp;
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => dispatch({ type: DECREMENT, payload: prod.quantity })}
        >
          -
        </button>{" "}
      </div>
    </li>
  );
}

export default Cartview;
