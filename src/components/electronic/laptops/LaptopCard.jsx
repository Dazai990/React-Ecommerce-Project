const LaptopCard = ({laptop})=>{

    return (
        <div className="card mb-4 mt-3 text-center">
        <img className="card-img-top" src={laptop.image} alt={laptop.name} height={250} style={{width:'320px'}}/>
        <div className="card-body">
             <h6 className="card-title font-italic">{laptop.brand} {laptop.name}</h6>
             <h6 className="card-subtitle font-italic">&#8377;{laptop.price}</h6>
        </div>
    </div>
    )
};
export default LaptopCard;