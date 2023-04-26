import React  from 'react';
import {useSelector, useDispatch } from 'react-redux';

import { settingFormPurpose, clearJarSelected} from '../actions/currentSelectionActions.js'


import MovementsHistorySection from './MovementsHistorySection';
import Panel from './Panel';
import JarsSection from './JarsSection';
import {DoughnutChart} from './Chart';




export const Dashboard = () => {
 
    const dispatch= useDispatch();
    const formToBeDisplayed= useSelector((state) =>(state.currentSelection.formPurpose ? state.currentSelection.formPurpose :null));
   
    const handleAddJar=()=>{
        dispatch(clearJarSelected());
        dispatch(settingFormPurpose("Add Jar"));
    }
    const handleDistributePercentages=()=>{
        dispatch(clearJarSelected());
        dispatch(settingFormPurpose( "Distribute Percentage"));
    }
    return (
        <div className="dashboard">
                
                <Panel/>
                <MovementsHistorySection/>
                <JarsSection/>
                <div className="management_actions">
                    <div  className="action div_img" style={{
                        backgroundImage: `url("/imgs/addJar.png")`
                        }} onClick={()=>{handleAddJar()}}>
                        </div>
                    <div  className="action div_img" style={{
                        backgroundImage: `url("/imgs/distribute.png")`
                        }} onClick={()=>{handleDistributePercentages()}}>
                    </div>
                </div>
                <DoughnutChart/>
                
                

                
        </div>
    )
}
