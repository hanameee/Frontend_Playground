import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// configureStore - redux store을 만들기 위해 Redux Toolkit에서 제공하는 함수
// store을 만들기 위해서는 reducer을 인자로 넘겨줘야 한다
export default configureStore({
    reducer: {
        // Redux state 객체에 state.counter이라는 부분이 생긴 것
        // action이 dispatch 되었을 때 이 state.counter을 변경하는 친구가 바로 counterReducer
        counter: counterReducer,
    },
});
