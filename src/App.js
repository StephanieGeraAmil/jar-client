import './styles/styles.css';
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';


import {getMovements} from './actions/MovementsActions.js'
import {getJars} from './actions/JarsActions.js'
import { getTransferences } from './actions/TransferActions';



import {Dashboard} from './components/Dashboard';
import MovementForm from './components/MovementForm';
import JarMoneyTransfer from './components/JarMoneyTransfer';
import { NavigationBar } from './components/NavigationBar';
import { DistributionForm } from './components/DistributionForm.js';
import JarForm from './components/JarForm.js';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';




const App = () =>{
  const dispatch= useDispatch();
  const selectorFormPurpose=
        (state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null);
 
  const formToBeDisplayed= useSelector(selectorFormPurpose);
  useEffect(()=>{
    dispatch(getMovements());
    dispatch(getJars());
    dispatch(getTransferences());
    },
   
    []);

 

  return (
    <div className="App">
    
      <Dashboard/>
      {(() => {
       
            switch(formToBeDisplayed){
              case 'Add Income': return ( <React.Fragment><Backdrop/><Modal form={<MovementForm/>}/></React.Fragment>)
              case 'Add Expense': return ( <React.Fragment><Backdrop/><Modal form={<MovementForm/>}/></React.Fragment>)
              case 'Edit Movement': return ( <React.Fragment><Backdrop/><Modal form={<MovementForm/>}/></React.Fragment>)
              case 'Transfer Money': return( <React.Fragment><Backdrop/><Modal form={<JarMoneyTransfer/>}/></React.Fragment>)
              case 'Edit Jar': return ( <React.Fragment><Backdrop/><Modal form={<JarForm/>}/></React.Fragment>)
              case 'Add Jar': return ( <React.Fragment><Backdrop/><Modal form={<JarForm/>}/></React.Fragment>)
              case 'Distribute Percentage': return ( <React.Fragment><Backdrop/><Modal form={<DistributionForm/>}/></React.Fragment>)
                
              default : return null
            }
          })()
      }
      {/* <NavigationBar/> */}
    
    </div>
  );
}

export default App;
