import logo from './logo.svg';
import './App.css';

// =========== useState(1) ============
// import Basic1 from './components/1.useState(1)/Basic1';
// ====================================


// =========== useState(2) ============
// import Basic2 from './components/2.useState(2)/Basic2';
// import { useState } from 'react';
// ====================================


// ============ useEffect =============
// import BasicUseEffect from './components/3.useEffect/BasicUseEffect';
// ====================================


// ======= useEffect(Clean up) ========
// import TimerContainer from './components/4.useEffect(Clean up)/TimerContainer';
// ====================================


// ======= API取得(axios, fetch) =======
// import ApiFatch from './components/5.API取得(axios, fetch)/ApiFetch';
// ====================================


// =========== useContext ============
// import AppContext from './contexts/AppContext';
// import B from './components/6.useContext/B';
// ====================================


// =========== useReducer ============
// import BasicReducer from './components/7.useReducer/BasicReducer';
// ====================================


// =========== useReducer + useContext ============
// import React, { useReducer } from 'react';
// import AppContext from './contexts/AppContext';
// import CompB from './components/8.useReducer + useContext/CompB';

// const initialState = 0
// const reducer = (currentState, action) => {
//     switch(action) {
//         case 'add_1':
//             return currentState + 1
//         case 'multiple_3':
//             return currentState * 3
//         case 'reset':
//             return initialState
//         default:
//             return currentState
//     }
// }
// ====================================


// ============= useMemo ==============
// import Memo from './components/9.useMemo/Memo';
// ====================================


// ============= useCallback ==============
// import React, { useState, useCallback } from 'react';
// import CountDisplay from './components/10.useCallback/CountDisplay';
// import CountClick from './components/10.useCallback/CountClick';
// ====================================


// ========= combineReducer ===========
import React, {useReducer} from 'react';
import rootReducer from './reducers';
import { SELL_MEAT, SELL_VEGETABLE } from './reducers/actionTypes';
// ====================================




function App() {
  // ============= useState(1) ===============
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Basic1 />
  //     </header>
  //   </div>
  // );
  // =========================================


  // ============= useState(2) ===============
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Basic2 />
  //     </header>
  //   </div>
  // );
  // =========================================


  // ============= useEffect ===============
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <BasicUseEffect />
  //     </header>
  //   </div>
  // );
  // =========================================


  // ========= useEffect(Claen up) ===========
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <TimerContainer />
  //     </header>
  //   </div>
  // );
  // =========================================


  // ========= API取得(axios, fetch) ==========
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <ApiFatch />
  //     </header>
  //   </div>
  // );
  // =========================================


  // ============= useContext ===============
  // return (
  //   <AppContext.Provider value={'value from App.js'}>
  //     <div className='App'>
  //       <header className='App-header'>
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <B />
  //       </header>
  //     </div>
  //   </AppContext.Provider>
  // );
  // =========================================


  // ============= useReducer ===============
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <BasicReducer />
  //     </header>
  //   </div>
  // );
  // =========================================


  // ========= useReducer + useContext =========
  // const [count, dispatch] = useReducer(reducer, initialState)

  // return (
  //   <AppContext.Provider value={{providerCount:count, providerDispatch:dispatch}}>
  //     <div className='App'>
  //       <header className='App-header'>
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h3>Count:{ count }</h3>
  //         <CompB />
  //       </header>
  //     </div>
  //   </AppContext.Provider>
  // );
  // =========================================


  // =============== useMemo =================
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Memo />
  //     </header>
  //   </div>
  // );
  // =========================================


  // ============= useCallback ===============
  // const [count1, setCount1] = useState(0)
  // const [count2, setCount2] = useState(0)
  
  // const AddCount1 = useCallback(() => {
  //   setCount1(prev => prev + 1)
  // },[])
  // const AddCount2 = useCallback(() => {
  //   setCount2(prev => prev + 1)
  // },[])

  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <CountDisplay name="count1" count={count1} />
  //       <CountClick handleClick={AddCount1}>AddCount1</CountClick>
  //       <CountDisplay name="count2" count={count2} />
  //       <CountClick handleClick={AddCount2}>AddCount2</CountClick>
  //     </header>
  //   </div>
  // );
  // =========================================


  // ============ combineReducer =============
  const initialState = {
    reducerMeat: {numOfMeat: 30},
    reducerVegetable: {numOfVegetable: 25}
  }
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=> dispatch({type: SELL_MEAT})}>Sell meat</button>
        <p>Today's Meat: {state.reducerMeat.numOfMeat}</p>
        <button onClick={()=> dispatch({type: SELL_VEGETABLE})}>Sell vegetable</button>
        <p>Today's Vegetable: {state.reducerVegetable.numOfVegetable}</p>
      </header>
    </div>
  );
  // =========================================
}

export default App;
