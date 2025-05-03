const WardrobeCard = ({wardrobe})=>{

    return (
        <div className="card mt-3">
        <img className="card-img-top" src={wardrobe.image} alt={wardrobe.name} height={320} style={{width:'470px'}}/>
        <div className="card-body">
             <h6 className="card-title">{wardrobe.brand} {wardrobe.name}</h6>
             <h6 className="card-subtitle">&#8377;{wardrobe.price}</h6>
        </div>
    </div>
    )

};
export default WardrobeCard;