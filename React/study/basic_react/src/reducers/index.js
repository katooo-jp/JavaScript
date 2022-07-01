import { combineReducers } from "redux";
import reducerMeat from "./reducerMeat";
import reducerVegetable from "./reducerVegetable";

const rootReducer = combineReducers({
    reducerMeat,
    reducerVegetable
})

export default rootReducer

// combineReducer
// 複数のReducerを管理したい場合、combineReducer()で結合して利用する