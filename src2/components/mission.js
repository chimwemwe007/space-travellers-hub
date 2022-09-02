import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleJoined } from '../redux/missions/missions';

function TableRow({
  id,
  name,
  description,
  joined,
}) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td className="missionName">{name}</td>
      <td className="missionDescription">{description}</td>
      <td>
        {!joined
          ? <span className="statusJoined">Not a member</span>
          : <span className="statusLeaved">Member</span>}
      </td>
      <td>
        {!joined
          ? <button className="joinMission" type="button" onClick={() => dispatch(toggleJoined(id))}>Join Mission</button>
          : <button className="leaveMission" type="button" onClick={() => dispatch(toggleJoined(id))}>Abort Mission</button>}
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};
export default TableRow;
