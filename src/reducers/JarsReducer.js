import * as actions from '../constants/actionTypes'
export default (jars=[], action)=>{
    switch(action.type){
        case actions.CREATE_JAR:
        return  [...jars, action.payload];
        
        case actions.UPDATE_JAR:
        return jars.map((jar)=>jar._id===action.payload._id? action.payload: jar);

        case actions.DELETE_JAR:
        return jars.filter((jar)=>jar._id!==action.payload);

        case actions.FETCH_ALL_JARS:
        return action.payload;
        
        default:
        return jars;
    }


}