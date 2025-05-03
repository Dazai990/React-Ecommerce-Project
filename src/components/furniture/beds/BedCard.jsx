const BedCard = ({bed})=>{

    return (
        <div className="card mt-3">
        <img className="card-img-top" src={bed.image} alt={bed.name} height={310} style={{width:'470px'}}/>
        <div className="card-body">
             <h6 className="card-title">{bed.brand} {bed.name}</h6>
             <h6 className="card-subtitle">&#8377;{bed.price}</h6>
        </div>
    </div>
    )

};
export default BedCard;