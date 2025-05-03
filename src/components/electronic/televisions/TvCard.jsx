const TvCard = ({tv})=>{

    return (
        <div className="card mb-4 mt-2 text-center">
        <img className="card-img-top" src={tv.image} alt={tv.name} height={270} style={{width:'350px'}}/>
        <div className="card-body">
             <h6 className="card-title">{tv.brand} {tv.name}</h6>
             <h6 className="card-subtitle">&#8377;{tv.price}</h6>
        </div>
    </div>
    )

};
export default TvCard;