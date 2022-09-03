import { useSelector } from 'react-redux';

function ProfileComponent() {
  const states = useSelector((state) => state);
  let rocketsReserved = 0;
  let missionJoined = 0;
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-sm-6">
          <h2>My Rockets</h2>
          <table className="table table-bordered">
            <tbody>
              {
              states.rockets.map((rocket) => {
                if (rocket.Reserved) {
                  rocketsReserved += 1;
                  return (
                    <tr>
                      <td>{rocket.name}</td>
                    </tr>
                  );
                }
                return null;
              })
            }
              {
              !rocketsReserved
              && (
                <tr>
                  <td>There is no reserved rocket</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
        <div className="col-sm-6">
          <h2>My Missions</h2>
          <table className="table table-bordered">
            <tbody>
              {
              states.missions.map((mission) => {
                if (mission.joined) {
                  missionJoined += 1;
                  return (
                    <tr>
                      <td>{mission.name}</td>
                    </tr>
                  );
                }
                return null;
              })
            }
              {
              !missionJoined
              && (
                <tr>
                  <td>There is not selected mission</td>
                </tr>
              )
            }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
