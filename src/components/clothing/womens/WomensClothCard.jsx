const WomensClothCard = ({women})=>{

    return (
        <div className="card mb-4">
        <img className="card-img-top" src={women.image} alt={women.name} height={400} style={{width:'350px'}}/>
        <div className="card-body">
             <h6 className="card-title">{women.brand} {women.name}</h6>
             <h6 className="card-subtitle">&#8377;{women.price}</h6>
        </div>
    </div>
    )

};
export default WomensClothCard;