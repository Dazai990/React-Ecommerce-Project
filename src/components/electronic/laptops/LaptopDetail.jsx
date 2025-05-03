import {useParams,useNavigate} from 'react-router-dom'
import laptops from './laptopDatabase/laptop_data';
import {useState, useContext} from 'react'
import { shopContext } from '../../../App';


const LaptopDetail = ()=>{
    const [show,setShow] = useState(false);
    const {addItemToCart} = useContext(shopContext)

    const navigate = useNavigate();
    const {lt1Id} = useParams();
    const laptop = laptops.find(lt1=>lt1.id===lt1Id)

      //event handler
      const handleClick = ()=>{
        navigate("/elec/laptops")
    }

    return(

        <div className='container mt-3'>
         <div className='d-flex justify-content-evenly align-items-center'>
            <div>
            <img src={laptop.image} alt={laptop.name}/>
            </div>
        <div className='d-flex flex-column gap-2'>
            <h1>{laptop.brand} {laptop.name}</h1>
            <h2>&#8377; {laptop.price.toFixed(2)}</h2>
            <button className='btn btn-outline-success' onClick={ ()=>setShow(!show)  }>{ show?"Hide Details":"Show More"}</button>
            <button className='btn btn-outline-primary' onClick={ ()=>addItemToCart(laptop)}>Add To Cart</button>

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
                        <th>Processor:</th>
                    <td>{laptop.specification.processor}</td>
                    </tr>
                    <tr>
                        <th>Ram</th>
                    <td>{laptop.specification.ram}</td>
                    </tr>
                    <tr>
                        <th>Storage:</th>
                    <td>{laptop.specification.storage}</td>
                    </tr>
                    <tr>
                        <th>Screen-Size:</th>
                    <td>{laptop.specification.screenSize}</td>
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
export default LaptopDetail;