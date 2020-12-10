# react-redux

## redux

### redux 기본 개념

- 앱의 모든 전역 state가 단일 **store**의 객체 트리 안에 저장된다.
- 이 store 내의 state를 변경하는 유일한 방법은 **action**(어떤 일이 일어났는지 설명하는, type 필드를 가진 순수 자바스크립트 객체)을 만들어 store에 **dispatch** 하는 것이다.
- action에 따라 state를 어떻게 변경할 지를 명시하기 위해, 이전 state과 action을 가지고 새로운 state를 계산해내는 순수함수인 **reducer** 함수를 작성한다.

### 리덕스의 리듀서라면 꼭 지켜야 할 규칙들

- 순수 함수로, side effect를 일으키지 않고 오직 전달받은 prevState, action을 가지고 nextState를 계산해 내야 한다.
- immutable하게 state를 업데이트 해야 한다. (단, RTK의 createSlice API를 사용한다면 state를 직접 mutate해도 내부적으로 불변하게 처리해준다)
- side effect를 일으키는 async logic 등을 포함해서는 안된다.

### 모든 상태를 redux store에서 관리해야 하는가? [출처](Redux Overview and Concepts)

**아 니 다! 🙅‍♀️**

앱 전체적으로 필요한 전역 상태를 Redux store에서 관리하는 것이고, 컴포넌트 안에서만 사용될 상태는 컴포넌트에서 관리하는 것이 맞다.

> In a React + Redux app, your global state should go in the Redux store, and your local state should stay in React components.

예를 들어, textfield 컴포넌트가 있다고 하면, input이 바뀔 때 마다 변경되는 문자열 상태값은 오직 textfield 컴포넌트만 관심이 있다. 이걸 궂이 redux state에 넣어서 onChange 핸들러에서 dispatch를 할 필요가 없는 것.

#### 어떤 상태를 컴포넌트에서 관리할지, 리덕스에서 관리할 지 판단하는데 도움을 줄 기준들

- 앱의 다른 부분들도 이 상태값에 관심이 있는가
- 이 상태값에서 파생된 다른 데이터를 만들어야 하는가
- 여러 컴포넌트에서 같이 해당 데이터를 사용하고 있는가
- time travel debugging에 필요한가
- data를 캐싱할 필요가 있는가
- UI 컴포넌트를 Hot-reloading 할 때 데이터를 일관되게 유지해야 하는가



## redux toolkit

Redux toolkit은 Redux logic을 보다 더 간단하게 작성하고, store을 간편하게 만들 수 있게 도와주는 도구이다.

## reference

[Redux 공식 문서](https://redux.js.org/)

[Redux Toolkit 공식 문서](https://redux-toolkit.js.org/tutorials/basic-tutorial)