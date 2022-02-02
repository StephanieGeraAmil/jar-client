import React ,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {updateJar} from '../actions/JarsActions.js'
import {clearFormPurpose} from '../actions/currentSelectionActions.js'


 

export const DistributionForm = () => {
    const [updatedJars, setUpdatedJars]=useState([])
    const [validationMessage, setValidationMessage]=useState('')

    const dispatch= useDispatch();
   
    const jars = useSelector((state) =>(state.jars ? state.jars :null));

    useEffect(()=>{
         setUpdatedJars(jars);
   
    },[jars])
   
   

    const handleSubmit=(e)=>{
        e.preventDefault();
        let reducer=(acc,item)=>acc+parseFloat(item.percentage);
        
        if(updatedJars.reduce(reducer,0)!=100){
            setValidationMessage(" All the Percentages shoud Add up to 100%");
        }else{
            
            setValidationMessage('');
            updatedJars.map(jar=>dispatch(updateJar(jar))); 
        }
        dispatch(clearFormPurpose());

         
    };

    const handleChange=(e,jar)=>{
           const newJar={...jar,percentage:e.target.value };
           setUpdatedJars(updatedJars.map(item=>item._id==jar._id?newJar:item))
       
    }
    return (
        <div>
          <div className="form">
          <label className="m-2 validation_message">{validationMessage} </label>
          <form onSubmit={handleSubmit}>
              {updatedJars.map(jar=>{
                    return ( 
                    <div className="form-group" key={jar._id}> 
                        <label className="m-2">{jar.name} </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={jar.percentage}
                            onChange={(e)=>{handleChange(e,jar)}}
                            />
                    </div>
                    )}
                )}
              
              <div className="bottom mt-5">
                <input type="submit" value="Save" className="submitButton" />
                 <input className="submitButton cancel" readOnly value="Cancel" onClick={()=>{ dispatch(clearFormPurpose());}}/>
              </div>            
          </form>
        </div>
            
        </div>
    )
}
