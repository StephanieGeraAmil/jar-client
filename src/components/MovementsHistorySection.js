import React ,{useEffect} from 'react'
import Movement from './Movement';
import { useSelector } from 'react-redux';
const MovementsHistorySection = () => {  
    const movements=useSelector((state)=>state.movements);  

  
    return (
        <div className="movement_history">
           <ul>
                {movements&&movements.map((item) =>  (
                        <li key={item.id}>
                            <Movement key={item.id} movement={item} />
                        </li>
                    )
                )}
             </ul>
        </div>
    )
}
export default MovementsHistorySection;
