// ACTION TYPES

const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_URL = 'WRITE_CAMPUS_URL';
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION';

// ACTION CREATORS

export function writeCampusName (campusName) {
  const action = { type: WRITE_CAMPUS_NAME, campusName };
  return action;
}

export function writeCampusUrl (campusUrl) {
  const action = { type: WRITE_CAMPUS_URL, campusUrl };
  return action;
}

export function writeCampusDescription (campusDescription) {
  const action = { type: WRITE_CAMPUS_DESCRIPTION, campusDescription };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_CAMPUS_NAME:
      return action.campusName;

    case WRITE_CAMPUS_URL:
      return action.campusUrl;

    case WRITE_CAMPUS_DESCRIPTION:
      return action.campusDescription;

    default:
      return state;
  }

}
