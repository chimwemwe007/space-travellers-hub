import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

function RocketsComponent() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);
  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <div className="container">
            <br />
            <div className="row">
              <div className="col-sm-4">
                <img className="images" src={rocket.images} alt={rocket.name} />
              </div>
              <div className="col-sm-8">
                <h3>{rocket.name}</h3>
                <p>{rocket.description}</p>
                <button type="button" className="btn btn-primary">Reserve Rocket</button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RocketsComponent;
