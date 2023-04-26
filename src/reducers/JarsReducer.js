import * as actions from '../constants/actionTypes'
export default (jars=[], action)=>{
    switch(action.type){
        case actions.CREATE_JAR:
        return  [...jars, action.payload];
        
        case actions.UPDATE_JAR:
        return jars.map((jar)=>jar.id===action.payload.id? action.payload: jar);

        case actions.DELETE_JAR:
        return jars.filter((jar)=>jar.id!==action.payload);

        case actions.FETCH_ALL_JARS:
        return action.payload;
        case actions.UPDATE_JAR_ARRAY:
            return action.payload;
        
        default:
        return jars;
    }


}