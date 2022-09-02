/* eslint-disable no-unused-vars  */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/missions/missions';

import TableRow from './mission';

function MissionssComponent() {
  const missions = useSelector((state) => (state.missions));
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) dispatch(fetchMission());
  }, []);

  const tablerRows = missions.map((mission) => (
    <TableRow
      key={mission.id}
      description={mission.description}
      name={mission.name}
      id={mission.id}
      joined={mission.joined}
    />
  ));
  return (
    <div className="missionsContainer flex">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th colSpan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tablerRows}
        </tbody>
      </table>
    </div>
  );
}

export default MissionssComponent;
