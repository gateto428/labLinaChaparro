//import axios from 'axios';
//const HOST = 'http://localhost:3001/';
import dataBase from '../TempData/dataBase.json'
export const GET_LAB = 'GET_LAB';
export const ERROR = 'ERROR';

//Get Recipe per ID
export function getLab(id){
    return async function(dispatch){
        try {
            let response ={}
            for(let i = 0; i< dataBase.length; i++){
                if(dataBase[i].Laboratorio ===  parseInt(id)) response = dataBase[i];
            }
            return dispatch({type: GET_LAB, payload: response});
        } catch (error) {
            return dispatch({type: ERROR, payload: "Algo paso en get lab"});
        }
    }
}