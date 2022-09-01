/* eslint-disable camelcase */
// Action types
const GET_MISSIONS = 'spaceTravellers/missions/JOIN/';
const JOIN = 'spaceTravellers/missions/JOIN/';
const LEAVE = 'spaceTravellers/missions/LEAVE/';
const BASE_URL = 'https://api.spacexdata.com/v3/missions';

// Initial State
const initialState = {
  missions: [],
  status: null,
};

/*
Missions:
mission_id
mission_name
description
*/

// eslint-disable-next-line default-param-last
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${JOIN}fulfilled`:
      return {
        missions: action.payload,
        status: 'Mission joined successfully',
      };
    case `${LEAVE}fulfilled`:
      return {
        missions: action.payload,
        status: 'Mission left successfully',
      };
    default:
      return state;
  }
};

const loadMissions = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});
export const fetchMissions = () => async (dispatch) => {
  try {
    const response = await fetch(BASE_URL);
    const missions = await response.json();

    dispatch(loadMissions(
      missions.map((rocket) => {
        const {
          mission_id: id,
          mission_name,
          description,

        } = rocket;

        return {
          id,
          mission_name,
          description,
        };
      }),
    ));
  } catch (err) {
    Error(err);
  }
};

export default missionsReducer;
