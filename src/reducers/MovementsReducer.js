import * as actiontypes from '../constants/actionTypes'

export default (movements=[], action)=>{
    switch(action.type){
        case actiontypes.CREATE_MOVEMENT:
        //return the action or the state changed by the action
        return [...movements, action.payload];
        
        case actiontypes.UPDATE_MOVEMENT:
        return movements.map((movement)=>movement._id===action.payload._id? action.payload : movement);
      
        case actiontypes.DELETE_MOVEMENT:
        return movements.filter((movement)=>movement._id!=action.payload);

        case actiontypes.FETCH_ALL_MOVEMENTS:
        return action.payload;
        
        default:
        return movements
    }


}