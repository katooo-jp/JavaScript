import React from 'react'

const CountClick = ({handleClick, children}) => {
    console.log('clicked', children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(CountClick)

// React.memo()
// 同じコンポーネントを複数利用している時に変化したpropsの内容だけレンダリングするため
// React.memo()で囲ってexportする（テキストのみ）

// useCallback()
// 関数に対して変化した内容にだけレンダリングするためにuseCallbackを使う
// 第２引数にuseEffect同様に[]でレンダリングする条件のStateを与える