import PropTypes from 'prop-types';
import './styles/Rocket.css';

const Rocket = ({
  name,
  image,
  description,
  isReseved,
}) => (
  <div className="rocket flex">
    <img src={image} alt="rocket" className="rocket--image" />
    <div className="rocket--info">
      <h2 className="rocket--name">{name}</h2>
      <p className="rocket--description">
        {(isReseved)
        && <span className="reserved--batch">Reserved</span>}
        {description}
      </p>
      <div className="user--actions">
        {(isReseved)
          ? <button className="cancel--reserve--button" type="button">Cancel Reservation</button>
          : <button className="reserve--button" type="button">Reserve Rocket</button>}
      </div>
    </div>
  </div>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReseved: PropTypes.bool.isRequired,
};

export default Rocket;