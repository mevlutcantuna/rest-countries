import "../styles/Card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img className="card__image" src={item?.flags?.[0]} alt="flag" />
      <div className="card__header">
        <div>
          <span> Name:</span> {item?.name.common}
        </div>
        <div>
          <span>Capital: </span>
          {item?.capital}
        </div>
      </div>
      <div className="card__bottom">
        <div>
          <span>Region:</span> {item?.region}
        </div>
      </div>
    </div>
  );
};

export default Card;
