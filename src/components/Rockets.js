import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ToggleReserved } from '../redux/rockets/rockets';

function Rocket({
  id,
  name,
  image,
  description,
  Reseved,
}) {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-sm-4">
          <img src={image} alt="rocket" className="images" />
        </div>
        <div className="col-sm-8">
          <br />
          <h2 className="rocket--name">{name}</h2>
          <p>
            {(Reseved)
        && <span className="reserved">Reserved</span>}
            {description}
          </p>
          <div className="user--actions">
            {(Reseved)
              ? <button className="btn btn-primary" onClick={() => dispatch(ToggleReserved(id))} type="button">Cancel Reservation</button>
              : <button className="btn btn-primary" onClick={() => dispatch(ToggleReserved(id))} type="button">Reserve Rocket</button>}
          </div>
        </div>

      </div>

    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Reseved: PropTypes.bool.isRequired,
};

export default Rocket;
