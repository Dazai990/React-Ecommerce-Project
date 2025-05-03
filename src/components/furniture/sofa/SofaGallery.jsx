import sofas from './sofaDatabase/sofa_data';
import {Link} from 'react-router-dom'
import SofaCard from './SofaCard';

const SofaGallery = ()=>{
    const sofaCards = sofas.map(sf1=> <div key={sf1.id} className="col">
        <Link style={{textDecoration:'none'}} to={'detail/'+sf1.id}>
         <SofaCard sofa={sf1}/>
        </Link>
      </div>)
      return (
         <div className="row">
             {sofaCards}
         </div>
      );


};
export default SofaGallery;