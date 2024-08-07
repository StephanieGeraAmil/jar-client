import React, { useEffect } from 'react'
import { Jar } from './Jar'
import { useSelector ,useDispatch} from 'react-redux';
import { settingFormPurpose } from "../actions/currentSelectionActions.js";

const JarsSection = () => {
    const jars=useSelector(state=> state.jars); 
  
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
