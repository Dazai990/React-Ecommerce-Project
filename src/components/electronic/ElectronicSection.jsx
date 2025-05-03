import {Link,Outlet} from 'react-router-dom'
const ElectronicSection = () =>{
    return (
    <div>
        <nav className='navbar navbar-expand-lg' style={{backgroundColor:'#046169',height:'40px'}} data-bs-theme="dark">
              <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link active' to="mobiles">Mobile</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="laptops">Laptops</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="tvs">Television</Link>
                </li>
              </ul>
        </nav>
        <Outlet/>
    </div>
    );
}

export default ElectronicSection;