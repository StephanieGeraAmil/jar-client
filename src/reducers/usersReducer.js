import * as actions from '../constants/actionTypes'
export default (users=[], action)=>{
    switch(action.type){
        case actions.CREATE_USER:
        return  [...jars, action.payload];

        case actions.FETCH_USER:
        return action.payload;
      
        
        default:
        return users;
    }


}