import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);

    const time = () => {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        // マウント時の処理
        setInterval(time, 1000);
        
        // Clean up
        // アンマウントされたら返される
        return () => {
            clearInterval();
            console.log('cleared timer');
        };
    },[])

    return (
        <div>
            {count}
        </div>
    )
}

export default Timer

// 画面にコンポーネントが表示される状態をマウント、その逆はアンマウント

// setCount(count+1)ではなく直前の状態を受け取り変更 setCount(prev => prev+1)