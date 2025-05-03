import womens from './womensDatabase/womensCloth_Data';
import {Link} from 'react-router-dom'
import WomensClothCard from './WomensClothCard';

const WomensClothGallery = ()=>{
    const womenCards = womens.map(women1=> <div key={women1.id} className="col">
        <Link style={{textDecoration:'none'}} to={'detail/'+women1.id}>
         <WomensClothCard women={women1}/>
        </Link>
      </div>)
      return (
         <div className="row">
             {womenCards}
         </div>
      );


};
export default WomensClothGallery;