import React ,{useState,useEffect} from 'react'
import * as movementActions from '../actions/MovementsActions.js'
import * as jarActions from '../actions/JarsActions.js'
import * as selectionActions from '../actions/currentSelectionActions.js'
import { useDispatch , useSelector} from 'react-redux';

 const MovementForm = () => {
   
 
    const dispatch= useDispatch();
     
   
    const jars = useSelector(state=>state.jars ? state.jars :null);

   
    const selectorMovementSelected=
        (state) =>(state.currentSelection.movement ? state.currentSelection.movement :null);
    const movementSelected = useSelector(selectorMovementSelected);

    const selectorFormPurpose=
        (state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null);
    const actionBeingPerformed = useSelector(selectorFormPurpose);
       
    const [movementData, setMovementData]=useState({
         amount:'',
         concept:'',
         jar:[],
         id:''

     })
    const [validationMessage, setValidationMessage]=useState('')


    useEffect(() => {  
        
        if (movementSelected!=null) {
            setMovementData({concept:movementSelected.concept, amount: movementSelected.amount, jar:movementSelected.jar});
           
        }else{
            
            setMovementData({...movementData, id:"",concept:"", amount:'', jar:[]});
            if(actionBeingPerformed=="Add Income"){setMovementData({...movementData, jar:jars});}

        }
    }, [movementSelected]);
  
    const handleSubmit=(e)=>{

        e.preventDefault();

        //  if(actionBeingPerformed=="Add Expense" && movementData.amount>0){
        //     setValidationMessage("Expenses should be < 0");
        //  }else 
         if (actionBeingPerformed=="Add Income" && movementData.jar.length!=jars.length){
            setValidationMessage("Incomes should be applied to all jars");
        }else if (actionBeingPerformed=="Edit Movement" && movementData.amount>0 && movementData.jar.length!=jars.length){
            setValidationMessage("Incomes should be applied to all jars");

        }else{
                if (movementSelected) {
                
                    dispatch(movementActions.updateMovement({_id:movementSelected._id,...movementData}));      
                    dispatch(selectionActions.clearMovementSelected());
                    dispatch(selectionActions.clearFormPurpose());
                
                }else{

                    if(actionBeingPerformed=="Add Expense") setMovementData({...movementData, amount:-Math.abs(movementData.amount)})
                    console.log(movementData)
                    dispatch(movementActions.createMovement(movementData));      
                    setMovementData({...movementData,concept:"", amount:'', jar:[]});
                    dispatch(selectionActions.clearFormPurpose());
                }
            }
        
    };
    const handleCheck = (e) => {
      
        let updatedList = [...movementData.jar];
    
        if (e.target.checked) {
                
        updatedList = [...movementData.jar, jars.find(item=>item._id==e.target.value)];
        setMovementData({...movementData, jar:updatedList})
        } else {
            setMovementData({...movementData, jar:updatedList.filter(item=>item._id!=e.target.value)})
        
        }
    
      
    };
    const signCheck=(e)=>{
        if(!isNaN(e.target.value)){
            setMovementData({...movementData, amount:e.target.value})
            }else{
                 setMovementData({...movementData, amount:0})
            }
    }
    
  
    return (
        <div className="form">
           { validationMessage !="" &&
             <div className="alert-pop-up">
                <span className="alert">{validationMessage}</span>
                <input className="close-alert" readOnly value="x" onClick={()=>setValidationMessage("")}/>
            </div>
             }
          <form onSubmit={handleSubmit}>
              <div className="form-group"> 
                  <label className="m-2">Concept: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={movementData.concept}
                      onChange={(e)=>setMovementData({...movementData, concept:(e.target.value).toUpperCase()})}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Amount: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={(movementData.amount)?((actionBeingPerformed=="Add Expense")?-Math.abs(movementData.amount):movementData.amount):''}
                      onChange={(e)=>{signCheck(e)}}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Jar: </label>
                
                    <div className="checkbox_list"> 
                     {jars.map( item => <div  key={item._id} className="checkbox_item" >
                                    <input value={item._id} type="checkbox"  onChange={(e)=>handleCheck(e)} checked={movementData.jar.map(jarInMovementData=>jarInMovementData._id).indexOf(item._id)!=-1 ?true:false} /> 
                                    <span>{item.name} </span>
                             </div>)}
                    </div>



              </div>

              <div className="bottom mt-5">
                  <input className="submitButton cancel" readOnly value="x" onClick={()=>{ dispatch(selectionActions.clearFormPurpose());}}/>
                <input type="submit" value={actionBeingPerformed?actionBeingPerformed:"Button"} className="submitButton" />
                 
              </div>  
              
         
          </form>
        </div>
    )
}
export default MovementForm;
