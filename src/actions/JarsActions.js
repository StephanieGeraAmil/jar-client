import * as actions from '../constants/actionTypes'
import * as api from '../api/api.js';
//action creators
export const getJars = ()=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchJars();
        const action={type:actions.FETCH_ALL_JARS, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const createJar=(jar)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
    try {

        const {data} =await api.createJar(jar);
        const action={type:actions.CREATE_JAR, payload:data};
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateJar=(updatedJar)=>async(dispatch)=>{
    try {
        await api.updateJar(updatedJar);
        const action={type:actions.UPDATE_JAR, payload:updatedJar};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteJar=(jar_id)=>async(dispatch)=>{
    try {
    
        await api.deleteJar(jar_id);
        const action={type: actions.DELETE_JAR,payload:jar_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}
