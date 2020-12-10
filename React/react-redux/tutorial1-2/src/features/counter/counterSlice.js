import { createSlice } from "@reduxjs/toolkit";

// Slice란? 앱의 한가지 기능을 위한 reducer + action의 조합
// RTK가 제공하는 함수인 createSlice는 action type 문자열, action 생성함수, action 객체를 개발자 대신 생성해준다.
export const counterSlice = createSlice({
    // 액션 객체 네이밍의 앞부분이 되는 name 필드
    name: "counter",
    // reducer이 처음 호출되었을 때 state 초기값 역할을 할 initialState 필드
    initialState: {
        value: 0,
    },
    // RTK가 내부적으로 immer 라이브러리를 사용하기에 reducer에서는 immutable을 지키지 않고 그냥 state를 변경해도 된다.
    reducers: {
        // 개발자는 slice에서 name과 reducer만 작성하면 알아서 액션 객체(예시 - counter/increment)를 생성해준다
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    // RTK의 createSlice가 만들어준 action은 counterSlice.actions.리듀서이름() (ex.counterSlice.actions.increment()) 로 접근할 수 있다.
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 비동기 로직을 포함하는 함수인 thunk
// RTK의 configureStore은 내부적으로 redux-thunk 라이브러리를 포함한다.
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

// selector 함수 - 이렇게 slice 파일에 작성해도 되고, useSelector을 통해 state를 가져다 쓰는 컴포넌트에서 inline으로 작성해도 무방하다.
// 예시) useSelector((state) => state.counter.value)
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
