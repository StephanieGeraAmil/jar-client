
import * as api from '../api/api.js';
import * as actions from '../constants/actionTypes';



export const getTransferences = ()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchTransactions();
        const action={type: actions.FETCH_ALL_TRANSACTIONS, payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
   
}
export const createTransference=(transaction)=>async(dispatch,getState)=>{
    
    try {
       console.log(transaction)
        const {data} =await api.createTransaction(transaction);
        const action={type: actions.CREATE_TRANSACTION, payload:data};
        dispatch(action);
       
        
    } catch (error) {
        console.log(error);
    }
    return{}
}

export const deleteTransaction=(transaction_id)=>async(dispatch,getState)=>{
    try {
      
        await api.deleteTransaction(transaction_id);
        const action={type: actions.DELETE_TRANSACTION,payload:transaction_id};
        dispatch(action);
      
        
    } catch (error) {
        console.log(error);
    }
}
