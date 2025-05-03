import {useParams,useNavigate} from 'react-router-dom'
import kids from './kidsDatabase/kidsData';
import { useState, useContext } from 'react';
import { shopContext } from '../../../App';
const KidClothDetail = ()=>{
   const [show,setShow] = useState(false);
   const {addItemToCart} = useContext(shopContext)

    const navigate = useNavigate();
    const {kid1Id} = useParams()
    const kid = kids.find(kid1=>kid1.id===kid1Id)

    //event handler
    const handleClick = ()=>{
        navigate("/cloths/kids")
    }

    return(

        <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img className='img-fluid' src={kid.image} alt={kid.name} style={{maxWidth:'400px'}}/>
            </div>
        <div className='d-flex flex-column gap-2'>
            <h1>{kid.brand} {kid.name}</h1>
            <h2>&#8377; {kid.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(kid)}>Add To Cart</button>
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
                    <td>{kid.specification.color}</td>
                    </tr>
                    <tr>
                        <th>Style:</th>
                    <td>{kid.specification.style}</td>
                    </tr>
                    <tr>
                        <th>Material:</th>
                    <td>{kid.specification.material}</td>
                    </tr>
                    <tr>
                        <th>Size:</th>
                    <td>{kid.specification.size}</td>
                    </tr>
                    <tr>
                        <th>Fit:</th>
                    <td>{kid.specification.fit}</td>
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
export default KidClothDetail;