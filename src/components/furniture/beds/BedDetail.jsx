import {useParams,useNavigate} from 'react-router-dom'
import beds from './bedDatabase/bed_data';
import { useState, useContext } from 'react';
import { shopContext } from '../../../App';
const BedDetail = ()=>{
    const [show,setShow] = useState(false);
       const {addItemToCart} = useContext(shopContext)
    
    
    const navigate = useNavigate();
    const {bed1Id} = useParams()
    const bed = beds.find(bd1=>bd1.id===bed1Id)

    //event handler
    const handleClick = ()=>{
        navigate("/furniture/beds")
    }

    return(

        <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img className='img-fluid me-4' style={{maxWidth:'500px'}} src={bed.image} alt={bed.name}/>
            </div>
        <div className='d-flex flex-column gap-2'>
            <h1>{bed.brand} {bed.name}</h1>
            <h2>&#8377; {bed.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(bed)}>Add To Cart</button>
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
                    <td>{bed.color}</td>
                    </tr>
                    <tr>
                        <th>Size:</th>
                    <td>{bed.specification.size}</td>
                    </tr>
                    <tr>
                        <th>Dimensions:</th>
                    <td>{bed.specification.totalBedDimensions}</td>
                    </tr>
                    <tr>
                        <th>Warrenty:</th>
                    <td>{bed.specification.warrenty}</td>
                    </tr>
                </tbody>
            </table>
        </div> }
        <div>
            <button className='btn btn-outline-dark mt-3' onClick={handleClick}>Back to Gallery</button>
        </div>
    </div>
    );


};
export default BedDetail;