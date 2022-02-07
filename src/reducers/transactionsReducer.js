import * as actiontypes from '../constants/actionTypes'

export default (transactions=[], action)=>{
    switch(action.type){
        case actiontypes.CREATE_TRANSACTION:

        return [...transactions, action.payload];

        case actiontypes.FETCH_ALL_TRANSACTIONS:
        return action.payload;
        case actiontypes.DELETE_TRANSACTION:
        return transactions.filter((transaction)=>transaction._id!=action.payload);

        default:
        return transactions
    }


}