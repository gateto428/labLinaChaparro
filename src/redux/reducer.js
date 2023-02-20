import { GET_LAB } from "./actions.js";

const initialState = {
        lab: {},
}

function rootReducer(state = initialState, action){
        if(action.type === GET_LAB){
                return {
                    ...state,
                    lab: action.payload
                }
        }
        return state
}

export default rootReducer;