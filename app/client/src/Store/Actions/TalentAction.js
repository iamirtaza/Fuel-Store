import { GET_ALL_TALENTS, GET_TALENT_BY_ID, AUTH } from "../Types";
import axios from "axios";
import api from "../../Components/api-endpoints/api";


export const login = (username, password) => dispatch => {
  return axios
    .get(api.login + "/" + username + "/" + password)
    .then(res=>{
      if(res.data.isSuccess){
        dispatch({
          type: AUTH,
          payload: true
      })
      }
      else{
        dispatch({
          type: AUTH,
          payload: false
      })
      }
    })
    .catch(err=>{
      console.log(err)
    })
};

export const register = data => dispatch => {
  axios
    .post(api.regster, data)
    .then(res => {
      console.log(res);
      if (res.data.isSuccess) {
      }
    })
    .catch(err => {
      console.log("err", err);
    });
};

export const getTalentById = id => dispatch => {
  return axios
    .get(api.getTalentById + "/" + id )
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_TALENT_BY_ID,
        payload: res.data.payload
    })
    })
    .catch(err => {
      console.log("err", err);
    });
};

export const getAllTalents = () => dispatch => {
 return axios
    .get(api.getAllTalents )
    .then(res => {
      console.log(res)
      dispatch({
        type: GET_ALL_TALENTS,
        payload: res.data.payload
    })
    })
    .catch(err => {
      console.log("err", err);
    });
};