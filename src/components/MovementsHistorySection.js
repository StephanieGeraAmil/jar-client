import React ,{useEffect} from 'react'
import Movement from './Movement';
import { useSelector } from 'react-redux';
const MovementsHistorySection = () => {  
    const movements=useSelector((state)=>state.movements);  
  
    return (
        <div className="movement_history">
           <ul>
                {movements.map((item) => {
                    return (
                        <li key={item._id}>
                            <Movement key={item._id} movement={item} />
                        </li>
                    )
                })}
             </ul>
        </div>
    )
}
export default MovementsHistorySection;
