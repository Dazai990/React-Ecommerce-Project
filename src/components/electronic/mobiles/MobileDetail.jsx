import {useParams,useNavigate} from 'react-router-dom'
import mobiles from './database/mobile_data'
import { useState, useContext } from 'react';
import { shopContext } from '../../../App';

const MobileDetail = ()=>{
    const [show,setShow] = useState(false);
    const {addItemToCart} = useContext(shopContext)

     const navigate = useNavigate();

    const {mb1Id} = useParams()
    const mobile = mobiles.find(mb1=>mb1.id===mb1Id)

    //event handler
    const handleClick = ()=>{
        navigate("/elec/mobiles")
    }

    return(

        <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img src={mobile.image} alt={mobile.name}/>
            </div>
        <div className='d-flex flex-column gap-2'>
            <h1>{mobile.brand} {mobile.name}</h1>
            <h2>&#8377; {mobile.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(mobile)}>Add To Cart</button>
        </div>
        </div>
        {show &&
        <div>
            <h3>Specification Details:</h3>
            <table className='table table-striped'>
                <thead>
                <tr className='table-dark'>
                    <th>Specification Name</th>
                    <th>Specification Value</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Primary Camera:</th>
                    <td>{mobile.specification.camera.primary}</td>
                    </tr>
                    <tr>
                        <th>Front Camera:</th>
                    <td>{mobile.specification.camera.front}</td>
                    </tr>
                    <tr>
                        <th>Storage:</th>
                    <td>{mobile.specification.storage}</td>
                    </tr>
                    <tr>
                        <th>RAM:</th>
                    <td>{mobile.specification.ram}</td>
                    </tr>
                </tbody>
            </table>
        </div> }
        <div>
            <button className='btn btn-outline-dark' onClick={handleClick}>Back to Gallery</button>
        </div>
    </div>
    );
}
export default MobileDetail;