const MobileCard = ({mobile})=>{

    return (
        <div className="card mb-4 mt-3 text-center">
            <img className="card-img-top" src={mobile.image} alt={mobile.name} height={250} style={{width:'240px'}}/>
            <div className="card-body">
                 <h6 className="card-title ">{mobile.brand} {mobile.name}</h6>
                 <h6 className="card-subtitle">&#8377;{mobile.price}</h6>
            </div>
        </div>
    )
}
export default MobileCard;