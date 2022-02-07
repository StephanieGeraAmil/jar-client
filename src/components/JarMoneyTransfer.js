import React ,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import * as transferActions from '../actions/TransferActions.js'
import * as selectionActions from '../actions/currentSelectionActions.js'

 const JarMoneyTransfer = () => {
    
    const dispatch= useDispatch();
       
    const selectorGetJars=
        (state) =>(state.jars ? state.jars :null);
    const jars = useSelector(selectorGetJars);
    const selectorOfSelectedJar=
        (state) =>(state.currentSelection.jar ? state.currentSelection.jar :null);
    const jarSelected = useSelector(selectorOfSelectedJar);

    const [destinationJar, setDestinationJar]=useState(jars[0]);
    const [amount, setAmount]=useState('');
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(transferActions.createTransference({origin:jarSelected._id,destination:destinationJar._id,amount}));
        setDestinationJar({});
        dispatch(selectionActions.clearMovementSelected());
         dispatch(selectionActions.clearFormPurpose());
        };

    const handleDropdownChange=(e)=>{
            const optionClicked = e.target.value; 
            setDestinationJar(jars.find(item=>item._id==optionClicked));  
        };


    const handleCancel=()=>{
        dispatch(selectionActions.clearMovementSelected());
        dispatch(selectionActions.clearFormPurpose());

    }
    useEffect(()=>{
          setDestinationJar(jars[0])
  
    },[])

  
    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group"> 
                  <label className="m-2">Origin Jar: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={jarSelected.name}
                      readOnly={true}
                      />
              </div>

 

              <div className="form-group">
                  <label className="m-2">DestinationJar: </label>
                  <select  className="form-control  dropdown-control" value={destinationJar}   onChange={(e)=>handleDropdownChange(e)}>
                        {jars.map(item=><option  key={item._id}>{item.name}</option>)}
                    </select>
              </div>
                 <div className="form-group">
                  <label className="m-2">Amount: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={amount}
                      onChange={(e)=>setAmount(e.target.value)}
                      />
              </div>
         
            

              <div className="bottom mt-5">
                <input className="submitButton cancel" readOnly value="x" onClick={()=>{ handleCancel() }}/>
                <input type="submit" value="Transfer" className="submitButton" />
            
              </div>            
          </form>
        </div>
    )
}
export default JarMoneyTransfer;
