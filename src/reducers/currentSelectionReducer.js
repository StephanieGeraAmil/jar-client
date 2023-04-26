import * as actions from '../constants/actionTypes'
export default (selected={movement: null, jar:null, formPurpose:null}, action)=>{
    switch(action.type){
        case  actions.SELECTED_MOVEMENT:
        return {...selected,movement: action.payload};
         
        case  actions.UNSELECTED_MOVEMENT:
        return {...selected,movement: null};
       
        case  actions.SELECTED_JAR:
        return {...selected,jar: action.payload};
       
        case  actions.UNSELECTED_JAR:
        return {...selected,jar: null};


   case  actions.SETTING_FORM_PURPOSE:
        return {...selected,formPurpose: action.payload};
        // case  actions.SETTING_FORM_FOR_INCOME:
        // return {...selected,formPurpose: "Add Income"};
        
        // case  actions.SETTING_FORM_FOR_EXPENSE:
        // return {...selected,formPurpose: "Add Expense"};
        //  case  actions.SETTING_FORM_FOR_ADDING_JAR:
        // return {...selected,formPurpose: "Add Jar"};
        
        // case  actions.SETTING_FORM_FOR_EDIT_MOVEMENT:
        // return {...selected,formPurpose: "Edit Movement"};
        
        // case  actions.SETTING_FORM_FOR_EDIT_JAR:
        // return {...selected,formPurpose: "Edit Jar"};
        
        // case  actions.SETTING_FORM_FOR_DISTRIBUTE_PERCENTAGES:
        // return {...selected,formPurpose: "Distribute Percentage"};
        
        // case  actions.SETTING_FORM_FOR_TRANSER_MONEY:
        // return {...selected,formPurpose: "Transfer Money"};
        
        case  actions.CLEAR_FORM_PURPOSE:
        return {...selected,formPurpose: null};




        default:
        return selected;
    }


}