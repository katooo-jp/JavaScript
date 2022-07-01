import React,{useState} from 'react'
import Timer from './Timer'

const TimerContainer = () => {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            {/* ボタンでタイマーの表示をスイッチ */}
            <button onClick={() => setDisplay(!display)}>Switch Timer</button>
            { display && <Timer /> }
        </div>
    )
}

export default TimerContainer