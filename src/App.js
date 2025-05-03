import './App.css';
import ShopRouter from './router/ShopRouter';
import { createContext, useReducer } from 'react';

export const shopContext = createContext();

function cartReducer(cart,action){
  switch(action.type){
    case 'ADD TO CART': return[...cart,action.item]
    case 'REMOVE ITEM': return cart.filter(cartItem=>cartItem!=action.item)
  }
}

function App() {
  const [cart,setCart] = useReducer(cartReducer,[]);

  const addItemToCart = (product)=>{
   setCart({type:"ADD TO CART",item:product})
  }
  const removeItemFromCart = (cartItm)=>{
    setCart({type:"REMOVE ITEM",item:cartItm})
  }
  return (
    <div>
      <shopContext.Provider value={{cart,addItemToCart,removeItemFromCart}}>
      <ShopRouter/>
      </shopContext.Provider>
    </div>
  );
}

export default App;
