// import React from 'react'
// import ShoppingCard from './components/shoppingcart'
// const App= () =>{
//   return (
//     <>
//       <ShoppingCard/>
//     </>

//   );

// }

// export default App;
// import React, { useState } from 'react';
// import './App.css';

// const ProductList = ({ products, addToCart }) => {
//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <img src={product.photo} alt={product.name} />
//             <div>
//               {product.name} - ${product.price}
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ShoppingCart = ({ cart, removeFromCart }) => {
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id}>
//             <img src={item.photo} alt={item.name} />
//             <div>
//               {item.name} - ${item.price}
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => {
//   const [products, setProducts] = useState([
//     { id: 1, name: 'camera', price: 20, photo: '/img/camera.jpg' },
//     { id: 2, name: 'drone', price: 30, photo: '/img/drone.jpg' },
//     { id: 3, name: 'joystrick', price: 40, photo: 'img/joystrick.jpg' },
//   ]);

//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter(item => item.id !== productId);
//     setCart(updatedCart);
//   };

//   return (
//     <div className="App">
//       <ProductList products={products} addToCart={addToCart} />
//       <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import './App.css';

const productsData = [
  { id: 1, name: 'Product 1', price: 20, photo: '/img/camera.jpg' },
  { id: 2, name: 'Product 2', price: 30, photo: '/img/drone.jpg' },
  { id: 3, name: 'Product 3', price: 40, photo: 'img/joystrick.jpg' },
  { id: 4, name: 'Product 3', price: 1000, photo: 'img/watch.jpg' },
  { id: 5, name: 'Product 3', price: 850, photo: 'img/speaker.jpg' },
  { id: 6, name: 'Product 3', price: 7800, photo: 'img/sony.jpg' },
  { id: 7, name: 'Product 3', price: 15000, photo: 'img/pc.jpg' },
  { id: 8, name: 'Product 3', price: 8500, photo: 'img/reel.jpg' },
  { id: 9, name: 'Product 3', price: 6000, photo: 'img/nikon.jpg' },

  // Add more products as needed
];

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.photo} alt={product.name} />
            <div>
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.photo} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
