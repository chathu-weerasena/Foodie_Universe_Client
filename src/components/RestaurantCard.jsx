export const RestaurantCard = (props) => {
  const { name, address, description, rating, createdAt, updatedAt, userId } =
    props;
  return (
    <div className="card " style={{ width: 400, height: 400 }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Address: {address}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{description}</li>
        <li className="list-group-item">{rating}</li>
      </ul>
    </div>
  );
};
