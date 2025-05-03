import wardrobes from './wardrobeDatabase/wardrobe_data';
import {Link} from 'react-router-dom'
import WardrobeCard from './WardrobeCard';

const WardrobeGallery = ()=>{
    const wardrobeCards = wardrobes.map(wr1=> <div key={wr1.id} className="col">
        <Link style={{textDecoration:'none'}} to={'detail/'+wr1.id}>
         <WardrobeCard wardrobe={wr1}/>
        </Link>
      </div>)
      return (
         <div className="row">
             {wardrobeCards}
         </div>
      );


};
export default WardrobeGallery;
