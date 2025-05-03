import {Link,Outlet} from 'react-router-dom'
const Clothing=()=>{
    return (
        <div>
            <nav className='navbar navbar-expand-lg' style={{backgroundColor:'#046169',height:'40px'}} data-bs-theme="dark">
        <ul className='navbar-nav'>

            <li className='nav-item'>
                <Link className='nav-link active' to="mens">Mens</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="womens">Womens</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="kids">Kids</Link>
            </li>

        </ul>
            </nav>
            <Outlet/>
    </div>
    );
}
export default Clothing;