import { useEffect, useState } from "react";
import { products } from "./product";
import classes from "./Shop.module.css";
import Header from "./Header";
import Cart from "./Cart";
function Shop() {
  const [selectedCategory] = useState(null);

  const [cart, setCart] = useState([]);
  const [isShowCart, setShowCart] = useState(false);


 

  const onAddtoCartHandler = (product) => {
    if (cart.indexOf(product) !== -1) return null;
    const arr = [...cart];
    product.amount = 1;
    arr.push(product);
    setCart([...arr]);
  };

  useEffect(() => {
    console.log(cart);
  });

  //   console.log(selectedCategory);
  let filteredProducts = [...products];
  if (selectedCategory != null) {
    filteredProducts = products.filter(
      (product) => product.category_id == selectedCategory
    );
  }
  return (
    <div className={classes.container}>
      <Header soluong={cart.length} setShowCart={setShowCart} />
      <div className={classes.row}>
      </div>
      <div className={classes.row}>
        <div className={classes.right}>
          {!isShowCart && (
            <>
              <h2>Products</h2>
              <div className={classes.boxes}>
                {filteredProducts.map((product) => (
                  <div className={classes.product} key={product.id}>
                    <h3>{product.name}</h3>
                    <img
                      src={product.product_image}
                      className={classes.prodimg}
                    />
                    <h4>{product.price} đ </h4>
                    {" "}
                    &nbsp;
                    {cart.indexOf(product) !== -1 ? (
                      <span className={classes.datontai}>
                        Sản phẩm đã có trong giỏ
                      </span>
                    ) : (
                      <button onClick={() => onAddtoCartHandler(product)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {isShowCart && (
            <Cart setShowCart={setShowCart} cart={cart} setCart={setCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;