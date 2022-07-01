import React, {useReducer} from 'react'

const initialState = 0
const reducer = (currentState, action) => {
    switch(action) {
        case 'add_1':
            return currentState + 1
        case 'multiple_3':
            return currentState * 3
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

const BasicReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <p>Count: {count} </p>
    <button onClick={()=> dispatch('add_1')}>Add + 1</button>
    <button onClick={()=> dispatch('multiple_3')}>multiple * 3</button>
    <button onClick={()=> dispatch('reset')}>reset</button>
    </>
  )
}

export default BasicReducer

// ・useReducerのイメージ
// ステートの値を更新するための関数を生成する関数

// 状態管理の関数を作って、useReducerへ初期ステートと一緒に渡す