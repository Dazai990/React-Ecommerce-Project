import mobiles from "./database/mobile_data"
import MobileCard from "./MobileCard"
import {Link} from 'react-router-dom';

const MobileGallery = ()=>{
 const mobileCards = mobiles.map(mb1=> <div key={mb1.id} className="col">
   <Link style={{textDecoration:'none'}} to={'detail/'+mb1.id}>
    <MobileCard mobile={mb1}/>
   </Link>
 </div>)
 return (
    <div className="row">
        {mobileCards}
    </div>
 );
}
export default MobileGallery;