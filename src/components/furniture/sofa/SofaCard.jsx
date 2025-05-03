const SofaCard = ({sofa})=>{

    return (
        <div className="card mt-3">
        <img className="card-img-top" src={sofa.image} alt={sofa.name} height={300} style={{width:'480px'}}/>
        <div className="card-body">
             <h6 className="card-title">{sofa.brand} {sofa.name}</h6>
             <h6 className="card-subtitle">&#8377;{sofa.price}</h6>
        </div>
    </div>
    )

};
export default SofaCard;