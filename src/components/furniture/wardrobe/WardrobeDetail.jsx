import {useParams,useNavigate} from 'react-router-dom'
import wardrobes from './wardrobeDatabase/wardrobe_data';
import { useState, useContext } from 'react';
import { shopContext } from '../../../App';
const WardrobeDetail = ()=>{
    const [show,setShow] = useState(false);
        const {addItemToCart} = useContext(shopContext)
    

    const navigate = useNavigate();
    const {wardrobe1Id} = useParams()
    const wardrobe = wardrobes.find(wr1=>wr1.id===wardrobe1Id)

    //event handler
    const handleClick = ()=>{
        navigate("/furniture/wardrobes")
    }

    return(

        <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img className='img-fluid' style={{maxWidth:'500px'}} src={wardrobe.image} alt={wardrobe.name}/>
            </div>
        <div div className='d-flex flex-column gap-2'>
            <h1>{wardrobe.brand} {wardrobe.name}</h1>
            <h2>&#8377; {wardrobe.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(wardrobe)}>Add To Cart</button>

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
                    <td>{wardrobe.color}</td>
                    </tr>
                <tr>
                        <th> Material:</th>
                    <td>{wardrobe.specification.material}</td>
                    </tr>
                    <tr>
                        <th>Door:</th>
                    <td>{wardrobe.specification.doors}</td>
                    </tr>
                    <tr>
                        <th>Drawers:</th>
                    <td>{wardrobe.specification.drawers}</td>
                    </tr>
                    <tr>
                        <th>Depth:</th>
                    <td>{wardrobe.dimensions.depth}</td>
                    </tr>
                    <tr>
                        <th>Width:</th>
                    <td>{wardrobe.dimensions.width}</td>
                    </tr>
                    <tr>
                        <th>Height:</th>
                    <td>{wardrobe.dimensions.height}</td>
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
export default WardrobeDetail;