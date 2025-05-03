import {useParams,useNavigate} from 'react-router-dom'
import womens from './womensDatabase/womensCloth_Data';
import { useState, useContext } from 'react';
import { shopContext } from '../../../App';
const WomenClothDetails = ()=>{
    const [show,setShow] = useState(false);
    const {addItemToCart} = useContext(shopContext)

    const navigate = useNavigate();
    const {women1Id} = useParams()
    const women = womens.find(women1=>women1.id===women1Id)

    //event handler
    const handleClick = ()=>{
        navigate("/cloths/womens")
    }

    return(

        <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img className='img-fluid' style={{maxWidth:'400px'}} src={women.image} alt={women.name}/>
            </div>
        <div className='d-flex flex-column gap-2'>
            <h1>{women.brand} {women.name}</h1>
            <h2>&#8377; {women.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(women)}>Add To Cart</button>
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
                    <td>{women.specification.color}</td>
                    </tr>
                    <tr>
                        <th>Style:</th>
                    <td>{women.specification.style}</td>
                    </tr>
                    <tr>
                        <th>Material:</th>
                    <td>{women.specification.material}</td>
                    </tr>
                    <tr>
                        <th>Size:</th>
                    <td>{women.specification.size}</td>
                    </tr>
                    <tr>
                        <th>Fit:</th>
                    <td>{women.specification.fit}</td>
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
export default WomenClothDetails;