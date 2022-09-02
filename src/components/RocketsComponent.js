import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from './Rockets';
import { fetchRockets } from '../redux/rockets/rockets';

function RocketsComponent() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  const rocketComponets = rockets.map((rocket) => [
    <Rockets
      key={rocket.id}
      id={rocket.id}
      name={rocket.name}
      image={rocket.image}
      description={rocket.description}
      Reseved={rocket.Reserved}
    />,
  ]);
  return <section>{rocketComponets}</section>;
}

export default RocketsComponent;
