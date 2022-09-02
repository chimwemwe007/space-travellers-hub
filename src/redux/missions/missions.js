const FETCH_DATA = 'FETCH_DATA';
const TOGGLE_MISSION = 'TOGGLE_MISSION';
const apiUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const toggleJoined = (id) => ({
  type: TOGGLE_MISSION,
  id,
});

export const fetchMission = () => async (dispatch) => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const missionData = data.map((mission) => ({
    name: mission.mission_name,
    id: mission.mission_id,
    description: mission.description,
    joined: false,
  }));
  dispatch(fetchMissions(missionData));
};

// eslint-disable-next-line default-param-last
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case TOGGLE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, joined: !mission.joined };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
