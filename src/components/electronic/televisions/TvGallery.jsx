import tvs from "./tvDatabase/tv_data";
import TvCard from "./TvCard";
import {Link} from 'react-router-dom'

const TvGallery = ()=>{
    const tvCards = tvs.map(tv1=> <div key={tv1.id} className="col">
        <Link style={{textDecoration:'none'}} to={'detail/'+tv1.id}>
         <TvCard tv={tv1}/>
        </Link>
      </div>)
      return (
         <div className="row">
             {tvCards}
         </div>
      );


};
export default TvGallery;