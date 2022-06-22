import { createContext } from "react";
import App from "../App";

const AppContext = createContext()

export default AppContext

// 親から孫にデータを渡す際に従来はprops経由で 親〜子〜孫 と渡さなければいけなかった。（ドリリング問題）
// これを解消できるのがcontext

// createContext()のインスタンスをexportで準備完了
// 親のコンポーネントで変数をimportしてProviderタグで囲んでデータを定義し、孫側でuseContext()を利用して受け取る
// 今回は 親App から 孫C へvalueを渡している