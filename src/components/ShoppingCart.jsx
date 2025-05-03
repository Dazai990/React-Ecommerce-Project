import { useContext } from "react";
import { shopContext } from "../App";
import { FaTrash } from "react-icons/fa";
const ShoppingCart = ()=>{
    const {cart,removeItemFromCart} = useContext(shopContext)
    const totalReducer = (cart)=>{
        const prices = cart.map(item=>item.price)
        const cardTotal = prices.reduce((total,price)=>total+price,0)
        return cardTotal;
    }
return (
    <>
    { cart.length===0 ? <h1 className="text-center">Your cart is empty</h1> : 
    <div>
        <h1 className="fst-italic">My Cart</h1>
       <div className="d-flex justify-content-between p-4">
       <h2>Total Items:{cart.length}</h2>
       <h2>Cart Total:{totalReducer(cart)}</h2>
       </div>
        <div className="d-flex flex-column gap-2 p-3">

        {cart.map(item=>
            <div key={item.name} className="d-flex justify-content-around p-2 align-items-center border border-dark rounded">
                <div>
                    <img src={item.image} alt={item.name} height={210} width={200}/>
                </div>
                <div>
                    {item.brand}
                    </div>
                    <div>
                        {item.name}
                        </div>
                        <div>
                            {item.price}
                            </div>
                            <div>
                             <button title="Remove Item" className="btn btn-danger" onClick={()=>removeItemFromCart(item)}><FaTrash />
                             </button>
                            </div>
                </div>
        )}
    </div>
        </div> }
        </>
)

};
export default ShoppingCart;