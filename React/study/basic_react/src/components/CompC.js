import React, {useContext} from 'react';
import AppContext from '../contexts/AppContext';

const CompC = () => {
    const {providerDispatch} = useContext(AppContext)
    // ','を使えば複数受け取りも可能 {providerCount, providerDispatch}
    
    return (
        <>
        <button onClick={()=> providerDispatch('add_1')}>Add + 1</button>
        <button onClick={()=> providerDispatch('multiple_3')}>Multiple * 3</button>
        <button onClick={()=> providerDispatch('reset')}>reset</button>
        </>
    )
}

export default CompC

// 親からReducerのdispatchを受け取り、Stateの状態を変更する（useContext() + useReducer())