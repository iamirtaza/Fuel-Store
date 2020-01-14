import {
    AUTH
  } from "../Types";
  
  const initialState = {
      auth:false
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case AUTH:
        return {
          ...state,
          auth: action.payload
        };
      default:
        return state;
    }
  }