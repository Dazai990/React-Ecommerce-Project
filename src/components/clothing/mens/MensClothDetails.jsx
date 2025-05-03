import {useParams,useNavigate} from 'react-router-dom'
import mens from './mensDatabase/mensCloth_data';
import { useState, useContext } from 'react';
import { shopContext } from '../../../App';
const MensClothDetails = ()=>{
    const [show,setShow] = useState(false);
     const {addItemToCart} = useContext(shopContext)
    
    const navigate = useNavigate();
    const {men1Id} = useParams()
    const men = mens.find(men1=>men1.id===men1Id)

    //event handler
    const handleClick = ()=>{
        navigate("/cloths/mens")
    }

    return(

        <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img className='img-fluid' style={{maxWidth:'400px'}} src={men.image} alt={men.name}/>
            </div>
        <div className='d-flex flex-column gap-2'>
            <h1>{men.brand} {men.name}</h1>
            <h2>&#8377; {men.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(men)}>Add To Cart</button>
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
                        <th>Color:</th>
                    <td>{men.specification.color}</td>
                    </tr>
                    <tr>
                        <th>Style:</th>
                    <td>{men.specification.style}</td>
                    </tr>
                    <tr>
                        <th>Material:</th>
                    <td>{men.specification.material}</td>
                    </tr>
                    <tr>
                        <th>Size:</th>
                    <td>{men.specification.size}</td>
                    </tr>
                    <tr>
                        <th>Fit:</th>
                    <td>{men.specification.fit}</td>
                    </tr>
                </tbody>
            </table>
        </div> }
        <div>
            <button className='btn btn-outline-dark' onClick={handleClick}>Back to Gallery</button>
        </div>
    </div>
    );


};
export default MensClothDetails;