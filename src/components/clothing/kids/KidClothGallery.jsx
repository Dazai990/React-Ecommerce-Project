import kids from './kidsDatabase/kidsData';
import {Link} from 'react-router-dom'
import KidClothCard from './KidClothCard';

const KidClothGallery = ()=>{
    const kidCards = kids.map(kid1=> <div key={kid1.id} className="col">
        <Link style={{textDecoration:'none'}} to={'detail/'+kid1.id}>
         <KidClothCard kid={kid1}/>
        </Link>
      </div>)
      return (
         <div className="row">
             {kidCards}
         </div>
      );


};
export default KidClothGallery;