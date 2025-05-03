const KidClothCard = ({kid})=>{

    return (
        <div className="card mb-4">
        <img className="card-img-top" src={kid.image} alt={kid.name} height={400} style={{width:'350px'}}/>
        <div className="card-body">
             <h6 className="card-title">{kid.brand} {kid.name}</h6>
             <h6 className="card-subtitle">&#8377;{kid.price}</h6>
        </div>
    </div>
    )

};
export default KidClothCard;