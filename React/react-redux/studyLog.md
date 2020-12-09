# react-redux

## redux

### redux 기본 개념

- 앱의 모든 전역 state가 단일 **store**의 객체 트리 안에 저장된다.
- 이 store 내의 state를 변경하는 유일한 방법은 **action**(어떤 일이 일어났는지 설명하는, type 필드를 가진 순수 자바스크립트 객체)을 만들어 store에 **dispatch** 하는 것이다.
- action에 따라 state를 어떻게 변경할 지를 명시하기 위해, 이전 state과 action을 가지고 새로운 state를 계산해내는 순수함수인 **reducer** 함수를 작성한다.

## redux toolkit

Redux toolkit은 Redux logic을 보다 더 간단하게 작성하고, store을 간편하게 만들 수 있게 도와주는 도구이다.

## reference

[Redux 공식 문서](https://redux.js.org/)

[Redux Toolkit 공식 문서](https://redux-toolkit.js.org/tutorials/basic-tutorial)