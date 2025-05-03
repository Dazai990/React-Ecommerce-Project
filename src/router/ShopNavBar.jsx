import {Link,Outlet} from 'react-router-dom'
import { useContext } from 'react';
import { shopContext } from '../App';
import { FaCartShopping } from "react-icons/fa6";
const ShopNavBar = ()=>{

    const {cart} = useContext(shopContext);

    return(
        <div>
            <nav className='navbar navbar-expand-lg' style={{backgroundColor:'#032f3c'}}data-bs-theme="dark">
               <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link active' to="/"> Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/elec"> Electronics</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/cloths"> Clothing</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/furniture"> Furniture</Link>
                </li>
               </ul>
               <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to='login_reg'>Login/Register</Link>
                </li>
                <li className='nav-item me-3'>
                    <Link title= 'View Cart' className='nav-link' to='shopping_cart'><FaCartShopping className='fs-4' /><span className='position-absolute top-1 text-bg-danger rounded-circle border border-light badge'>{cart.length}</span></Link>
                </li>
               </ul>
            </nav>
                <Outlet/>
        </div>
    )
}
export default ShopNavBar; 