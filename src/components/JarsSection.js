import React, { useEffect } from 'react'
import { Jar } from './Jar'
import { useSelector ,useDispatch} from 'react-redux';
// import JarMoneyTransfer from './JarMoneyTransfer.js';
import { settingFormPurpose } from "../actions/currentSelectionActions.js";

const JarsSection = () => {
    //   const dispatch = useDispatch();
    const jars=useSelector(state=> state.jars); 

//     useEffect(() => {
   
//     if (jars && jars.length > 0) {
//       let reducer = (acc, item) => acc + parseFloat(item.percentage);
//       console.log(jars.reduce(reducer, 0) !== 100);
//       if (jars.reduce(reducer, 0) !== 100) {
//         dispatch(settingFormPurpose("Distribute Percentage"));
//       }
//     }
//   }, [jars]);
 
  
    return (
        <>
            <div className="jarGrid">
                {jars&&jars.map((item) => (
                            <Jar key={item.id} jar={item} />
                        )
                    )}

            </div>
        </>
    )
}
export default JarsSection
