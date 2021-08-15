
const ItemCard = (props) => {
    const { title, imgSrc, description, price } = props;
    return (
        <div className="col-12 col-sm-4 mt-2 d-flex align-items-stretch">
            <div className="card p-2" style={{ width: "18rem" }}>
                <img className="card-img-top rounded" src={imgSrc} alt={title} style={{ objectFit: "scale-down", height: "250px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;