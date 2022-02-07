import React from 'react'
import Balance from './Balance';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/currentSelectionActions.js'

const Panel = () => {
    const dispatch= useDispatch();

    const addingIncome=()=>{
        dispatch(actions.settingFormPurposeToIncome());
        dispatch(actions.clearMovementSelected());
    }
     const addingExpense=()=>{
        dispatch(actions.settingFormPurposeToExpense());
        dispatch(actions.clearMovementSelected());
    }
    return (
        <div className="panel">
            <Balance/>
            <div className='wallet_section'>
                <div className="wallet" onClick={()=>{addingIncome();}}>
                    <div  className="direction div_img" style={{
                    backgroundImage: `url("/imgs/inarrow.png")`
                    }} >
                    </div>
                    <div  className="picture div_img" style={{
                    backgroundImage: `url("/imgs/WalletBlue.png")`
                    }}>
                    </div>
                </div>
            
                <div className="wallet" onClick={()=>{addingExpense();}}>
                        <div  className="direction div_img" style={{
                        backgroundImage: `url("/imgs/outarrow.png")`
                        }}>
                        </div>
                        <div  className="picture div_img" style={{
                        backgroundImage: `url("/imgs/WalletBlue.png")`
                        }}>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Panel;
