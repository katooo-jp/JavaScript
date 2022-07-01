import React, {useState, useMemo} from 'react'

const Memo = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const AddCount1 = () => {
        setCount1(prev => prev+1)
    }

    const AddCount2 = () => {
        setCount2(prev => prev+1)
    }

    // useMemo未使用
    // const isOdd = () => {
    //     let i = 0
    //     while(i < 500000000) {
    //         i++
    //     }
    //     return count1 % 2 !== 0
    // }

    // useMemo利用
    const isOdd = useMemo(() => {
        let i = 0
        while(i < 500000000) {
            i++
        }
        return count1 % 2 !== 0
    }, [count1])

    return (
        <>
        <button onClick={AddCount1}>Count1: {count1}</button>
        <span>{isOdd ? 'Odd Number':'Even Number'}</span>
        <button onClick={AddCount2}>Count2: {count2}</button>
        </>
    )
}

export default Memo

// ・useMemo
// useEffectと同じく不要なレンダリングを防ぐ
// 関数の結果を保持してレンダリング時の再評価をスキップする

// Count1のボタンを押すとcount1のStateが変化する。isOddにより表示を変化している
// isOdd()は処理に時間が掛かる様になっており、count2のボタンを押した時にもレンダリングされてisOddが再評価され処理に時間が掛かる
// count1の変化の時だけに評価をするようにするために useMemo() を使う
// useEffect同様に第2引数に評価対象の変数を入れる