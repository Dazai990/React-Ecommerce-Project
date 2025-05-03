import {useParams,useNavigate} from 'react-router-dom'
import tvs from './tvDatabase/tv_data';
import {useState, useContext} from 'react'
import { shopContext } from '../../../App';

const TvDetail = ()=>{
    const [show,setShow] = useState(false);
        const {addItemToCart} = useContext(shopContext)
    

    const navigate = useNavigate();
    const {tv1Id} = useParams()
    const tv = tvs.find(tv1=>tv1.id===tv1Id)

    //event handler
    const handleClick = ()=>{
        navigate("/elec/tvs")
    }

    return(

        <div className='container mt-3'>
        <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img src={tv.image} alt={tv.name}/>
            </div>
        <div className='d-flex flex-column gap-2'>
            <h1>{tv.brand} {tv.name}</h1>
            <h2>&#8377; {tv.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(tv)}>Add To Cart</button>
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
                        <th>Screen Type:</th>
                    <td>{tv.specification.screenType}</td>
                    </tr>
                    <tr>
                        <th>Screen-Size:</th>
                    <td>{tv.specification.displaySize}</td>
                    </tr>
                    <tr>
                        <th>Connectivity:</th>
                    <td>{tv.specification.connectivity}</td>
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
export default TvDetail;