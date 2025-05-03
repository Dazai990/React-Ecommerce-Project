import laptops from './laptopDatabase/laptop_data';
import LaptopCard from './LaptopCard'
import {Link} from 'react-router-dom'

const LaptopGallery = ()=>{
    const laptopCards = laptops.map(lt1=> <div key={lt1.id} className="col">
        <Link style={{textDecoration:'none'}} to={'details/'+lt1.id}>
         <LaptopCard laptop={lt1}/>
        </Link>
      </div>)
      return (
         <div className="row">
             {laptopCards}
         </div>
      );


};
export default LaptopGallery;