import * as actions from '../constants/actionTypes'
import * as api from "../api/api.js";
export const setMovementSelected=(currentSelection)=>(dispatch)=>{
    try {
       
        const action={type: actions.SELECTED_MOVEMENT, payload:currentSelection};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const clearMovementSelected=()=>(dispatch)=>{
    try {
       
        const action={type: actions.UNSELECTED_MOVEMENT};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const setJarSelected=(currentSelection)=>(dispatch)=>{
    try {
       
        const action={type: actions.SELECTED_JAR, payload:currentSelection};
        dispatch(action);
        
        
    } catch (error) {
        console.log(error);
    }

}
export const clearJarSelected=()=>(dispatch)=>{
    try {
     
        const action={type: actions.UNSELECTED_JAR};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const settingFormPurpose=(form)=>(dispatch)=>{
    try {
       
        const action={type: actions.SETTING_FORM_PURPOSE, payload:form};
       
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}

export const clearFormPurpose=()=>(dispatch)=>{
    try {
        const action={type: actions.CLEAR_FORM_PURPOSE};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}

export const settingUser=(usr) => async (dispatch)=>{
    try {       
        const { data } = await api.fetchUser(usr.email);
        const action={type: actions.SETTING_USER, payload:data.message};  
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}

export const clearUser=()=>(dispatch)=>{
    try {
    
        const action={type: actions.CLEAR_USER};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}

