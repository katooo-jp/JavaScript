import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);

    const time = () => {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        setInterval(time, 1000);
        return () => {
            clearInterval();
            console.log('cleared timer');
        };
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default Timer