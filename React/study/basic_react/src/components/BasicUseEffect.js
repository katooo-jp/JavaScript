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