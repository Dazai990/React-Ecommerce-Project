import {useParams,useNavigate} from 'react-router-dom'
import sofas from './sofaDatabase/sofa_data';
import { useState, useContext } from 'react';
import { shopContext } from '../../../App';
const SofaDetail = ()=>{
     const [show,setShow] = useState(false);
    const {addItemToCart} = useContext(shopContext)

    const navigate = useNavigate();
    const {sofa1Id} = useParams()
    const sofa = sofas.find(sf1=>sf1.id===sofa1Id)

    //event handler
    const handleClick = ()=>{
        navigate("/furniture/sofas")
    }

    return(

        <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img className='img-fluid' style={{maxWidth:'450px'}} src={sofa.image} alt={sofa.name}/>
            </div>
        <div div className='d-flex flex-column gap-2'>
            <h1>{sofa.brand} {sofa.name}</h1>
            <h2>&#8377; {sofa.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(sofa)}>Add To Cart</button>
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
                    <td>{sofa.color}</td>
                    </tr>
                    <tr>
                        <th>Dimensions:</th>
                    <td>{sofa.specification.dimensions}</td>
                    </tr>
                    <tr>
                        <th>Frame Material:</th>
                    <td>{sofa.specification.frameMaterial}</td>
                    </tr>
                    <tr>
                        <th>Seater:</th>
                    <td>{sofa.specification.seater}</td>
                    </tr>
                    <tr>
                        <th>Frame Material Type:</th>
                    <td>{sofa.specification.frameMaterialType}</td>
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
export default SofaDetail;