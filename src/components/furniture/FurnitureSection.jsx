import {Link,Outlet} from 'react-router-dom'
const FurnitureSection = ()=>{
    return (
      <div>
        <nav className='navbar navbar-expand-lg' style={{backgroundColor:'#046169',height:'40px'}} data-bs-theme="dark">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link active' to="wardrobes">Wardrobes</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="sofas">Sofa</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="beds">Beds</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
      </div>
    );
}
export default FurnitureSection;