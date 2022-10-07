export const PhotoCard = (props) => {
  const { imageUrl, description, createdAt, updatedAt, userId } = props;
  return (
    <div className="card " style={{ width: 400, height: 400 }}>
      <img
        src={imageUrl}
        className="card-img-top"
        style={{ height: 200, width: 300 }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{description}</h5>
        <p className="card-text">Date: {createdAt}</p>
      </div>
    </div>
  );
};
