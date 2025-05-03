import beds from './bedDatabase/bed_data';
import {Link} from 'react-router-dom'
import BedCard from './BedCard';

const BedGallery = ()=>{
    const bedCards = beds.map(bd1=> <div key={bd1.id} className="col">
        <Link style={{textDecoration:'none'}} to={'detail/'+bd1.id}>
         <BedCard bed={bd1}/>
        </Link>
      </div>)
      return (
         <div className="row">
             {bedCards}
         </div>
      );


};
export default BedGallery;