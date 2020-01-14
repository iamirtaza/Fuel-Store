import {
  GET_ALL_TALENTS,
  GET_TALENT_BY_ID,
} from "../Types";


const initialState = {
    talent:[],
    allTalents:[],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TALENTS:
      return {
        ...state,
        allTalents: action.payload
      };
      case GET_TALENT_BY_ID:
      return {
        ...state,
        talent: action.payload
      };
    default:
      return state;
  }
}