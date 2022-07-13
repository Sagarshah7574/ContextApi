import React from "react";
import ShopContext from "../Context/ShopContext";
import Navigation from "../Components/Navigation";
import "./Products.css";

function ProductsPage(props) {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <>
          <Navigation
            cartItemNumber={
              //   context.cart.reduce((count, curItem) => {
              //   return count + curItem.quantity;
              // }, 0)
              context.cart.length
            }
          />

          <main className="products">
            <ul>
              {context.products.map((product) => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - Rs{product.price}
                  </div>
                  <div>
                    <button
                      onClick={context.addProductToCart.bind(this, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </>
      )}
    </ShopContext.Consumer>
  );
}

export default ProductsPage;
