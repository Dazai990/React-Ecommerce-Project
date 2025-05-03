const MensClothCard = ({men})=>{

    return (
        <div className="card mb-4">
        <img className="card-img-top" src={men.image} alt={men.name} height={400} style={{width:'350px'}}/>
        <div className="card-body">
             <h6 className="card-title">{men.brand} {men.name}</h6>
             <h6 className="card-subtitle">&#8377;{men.price}</h6>
        </div>
    </div>
    )
};
export default MensClothCard;