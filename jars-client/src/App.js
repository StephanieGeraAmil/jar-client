import './styles/styles.css';
import React, { useEffect, useState } from 'react';
import Panel from './components/Panel';
import JarsSection from './components/JarsSection';
import MovementsHistorySection from './components/MovementsHistorySection';
import { useDispatch,useSelector } from 'react-redux';
import {getMovements} from './actions/MovementsActions.js'
import {getJars} from './actions/JarsActions.js'
import MovementForm from './components/MovementForm';
import JarForm from './components/JarForm';
import JarMoneyTransfer from './components/JarMoneyTransfer';
import { NavigationBar } from './components/NavigationBar';
import { getTransferences } from './actions/TransferActions';



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
  //dispatches an action
  return (
    <div className="App">
   
      <Panel/>
      <MovementsHistorySection/>
      <JarsSection section="dashboard"/>
    

      {(() => {
       
            switch(formToBeDisplayed){
              case 'Add Income': return <MovementForm/>
              case 'Add Expense': return <MovementForm/>
              case 'Edit Movement': return <MovementForm/>
              case 'Transfer Money': return <JarMoneyTransfer/>
                
              default : return null
            }
          })()
      }
      <NavigationBar/>
      
    </div>
  );
}

export default App;
