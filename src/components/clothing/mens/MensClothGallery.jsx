import mens from './mensDatabase/mensCloth_data';
import {Link} from 'react-router-dom'
import MensClothCard from './MensClothCard';

const MensClothGallery = ()=>{
    const menCards = mens.map(men1=> <div key={men1.id} className="col">
        <Link style={{textDecoration:'none'}} to={'detail/'+men1.id}>
         <MensClothCard men={men1}/>
        </Link>
      </div>)
      return (
         <div className="row">
             {menCards}
         </div>
      );
};
export default MensClothGallery;