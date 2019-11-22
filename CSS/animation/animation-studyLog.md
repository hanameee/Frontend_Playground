# animation

CSS3이 지원하는 애니메이션 효과의 사용법에 대해 알아보자 💁‍♀️

[참고링크 1 - TCP school.com](http://tcpschool.com/css/css3_transform_animation)
[참고링크 2 - CSS Animation for Beginners](https://thoughtbot.com/blog/css-animation-for-beginners) : 연습중

## 1. @keyframes

CSS3 에서 애니메이션 효과를 사용하기 위해서는 우선 애니메이션에 대한 `키프레임(keyframe)` 을 정의해야 한다.

`keyframe` 에는 **특정 시간에 해당 요소가 가져야 할 CSS 스타일을 명시**하고, `animation-name` 속성을 이용하여 요소와 keyframe 을 연결해줘야 애니메이션 효과가 동작함.

```html
<style>
  p {
    -webkit-animation-name: movingPara;
    -webkit-animation-duration: 3s;
    animation-name: movingPara;
    animation-duration: 3s;   
  }
  @keyframes movingPara {
    /* from 키워드에는 처음 스타일을, to 키워드에는 마지막 스타일을 명시해준다 */
    from { margin-left: 100% }
    to { margin-left: 0%; }
  }
</style>
```

좀 더 복잡한 애니메이션 효과를 위해서는 from/to 대신 % 를 사용해 좀 더 세밀하게 구간을 나눌 수 있다.

```html
<style>
    p {
        -webkit-animation-name: movingPara;
        -webkit-animation-duration: 4s;
        animation-name: movingPara;
        animation-duration: 4s;
    }
		/* 0% 에는 처음 스타일을, 100%에는 마지막 스타일을 명시하고 중간에 원하는 수 만큼의 키프레임을 생성할 수 있다 */
    @-webkit-keyframes movingPara {
        0% { border-color: red; }
        20% { border-color: orange; }
        40% { border-color: yellow; }
        50% { border-color: green; }
        60% { border-color: blue; }
        80% { border-color: navy; }
        100% { border-color: purple; }
    }
</style>
```

재생이 모두 끝난 애니메이션 효과는 해당 요소가 맨 처음 가지고 있던 스타일로 요소를 되돌려 놓는다.

## 2. animation 속성들

| 속성명             | 사용법                        | 비고 |
| ------------------ | ----------------------------- | ---|
| animation-name | 애니메이션 이름을 지정 |  |
| animation-duration | 애니메이션 효과를 재생할 시간 | 이 속성값의 default 값은 0초 (명시해야만 효과 나타남) |
| animation-delay   | 애니메이션 효과가 나타나기까지의 지연 시간 | 이 속성값으로 설정된 시간이 흐른 뒤에야 애니메이션 효과가 시작됨 |
| animation-iteration-count | 애니메이션 효과의 반복 횟수 | 이 속성값으로 infinite를 설정하면 애니메이션 효과가 무한히 반복됨 |
| animation-direction | 애니메이션의 진행 방향 설정 | 속성값으로 <br />- reverse (역방향 즉 to에서 from으로 진행)<br />- alternate (애니메이션 반복될 때마다 진행 방향을 from > to, to > from 으로 계속 변경하며 iteration count 만큼 반복)<br />가 있음 |
| animation-timing-function | 애니메이션 효과의 시간당 속도 설정 | 속성값으로 <br />- linear (애니메이션 효과가 처음부터 끝까지 일정한 속도로 진행)<br />- ease (기본값으로, 애니메이션 효과가 천천히 시작 > 빨라지고 > 마지막에 느려짐)<br />- ease-in (애니메이션 효과가 천천히 시작됨)<br />- ease-out (애니메이션 효과가 천천히 끝남)<br />- ease-in-out (애니메이션 효과가 천천히 시작되어, 천천히 끝남)<br />- cubic-bezier(n,n,n,n) : 애니메이션 효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행됨 |



## 3. 애니메이션 축약 표현 (animation shorthand)

2의 모든 animation 속성 (6가지) 을 이용한 스타일을 한 줄에 축약해 설정할 수 있음

```html
<style>
  div {
        animation-name: myShorthand;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        animation-iteration-count: 3;
        animation-direction: alternate;
  }
</style>
```

위의 코드를 아래처럼 축약해서 작성할 수 있음

```html
div { animation: myShorthand 3s ease-in-out 1s 3 alternate}
```



## 4. 추가적인 애니메이션 속성 포함 정리

|           속성            |                             설명                             |
| :-----------------------: | :----------------------------------------------------------: |
|         animation         | 모든 animation 속성을 이용한 스타일을 한 줄에 설정할 수 있음. |
|      animation-name       |               애니메이션 효과의 이름을 설정함.               |
|    animation-duration     |           애니메이션 효과를 재생할 시간을 설정함.            |
|      animation-delay      |     애니메이션 효과가 나타나기까지의 지연 시간을 설정함.     |
| animation-iteration-count |          애니메이션 효과가 몇 번 반복될지를 설정함.          |
|    animation-direction    |               애니메이션의 진행 방향을 설정함.               |
| animation-timing-function |           애니메이션 효과의 시간당 속도를 설정함.            |
|    animation-fill-mode    | 애니메이션 효과가 재생 중이 아닐 때 요소의 스타일을 설정함.  |
|   animation-play-state    |            애니메이션 효과의 재생 상태를 설정함.             |


