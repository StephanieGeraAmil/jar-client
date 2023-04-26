import React,{useState,useEffect} from 'react'
import { useSelector} from 'react-redux';

const Balance = () => {
        
        const [balance, setBalance]=useState(0)
        const selector=(state) =>(state.movements ? state.movements:null);
        const movements = useSelector(selector);
        let sign=balance>0?'+':'-';
        useEffect(() => {
            const reducer=(acc,item)=>acc+parseFloat(item.amount)
            setBalance(movements.reduce(reducer,0))
            sign=balance>0?'+':'-';
        },[movements])
    
    return (
        <div className="balance">
                <h4>BALANCE</h4>
            <h1>{sign}${ new Intl.NumberFormat({useGrouping:true}).format(Math.abs(balance))}</h1>    
        
        </div>
    )
}
export default Balance;


