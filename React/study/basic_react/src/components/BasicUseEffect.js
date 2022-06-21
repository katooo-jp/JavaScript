import React,{useEffect, useState} from 'react'

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState('');

  useEffect(() => {
    console.log(item);
  },[item]);
  return (
    <>
      <button onClick={()=> setCount(prev=>prev+1)}>count {count}</button>
      <input type="text" value={item} onChange={evt => setItem(evt.target.value)}/>
      <p>{item}</p>
    </>
  )
}

export default BasicUseEffect

// useEffectはGETの時のリソースfatch処理などに使う
// 第２引数は 指定なしでrender毎に処理が実行 []ならば最初のrenderのみ [state]であれば状態が変わる毎に処理が実行される