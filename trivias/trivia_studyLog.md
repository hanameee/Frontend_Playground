trivia : 프론트엔드 공부하면서 짜잘하게 기억해둘 만한 것을 적습니다 ✍️

# Emmet 문법

마크업의 생산성을 높여주는 Emmet 문법에 대해 알아보아요.

## 1. HTML 에서 사용할 때

` .container>ul.list>li.list-item*10>a{list$}` 를 작성하면 어떻게 될까?

```html
<div class="container">
  <ul class="list">
    <li class="list-item"><a href="">list1</a></li>
    <li class="list-item"><a href="">list2</a></li>
    <li class="list-item"><a href="">list3</a></li>
    <li class="list-item"><a href="">list4</a></li>
    <li class="list-item"><a href="">list5</a></li>
    <li class="list-item"><a href="">list6</a></li>
    <li class="list-item"><a href="">list7</a></li>
    <li class="list-item"><a href="">list8</a></li>
    <li class="list-item"><a href="">list9</a></li>
    <li class="list-item"><a href="">list10</a></li>
  </ul>
</div>
```

이게 한번에 짜잔! 🥳

- Container 이라는 class를 가진 div
- list 라는 class를 가진 ul 태그
- List-item이라는 class를 가진 li태그 `10개`
- 각각의 list-item 안에는 list(1~10) 내용을 보유한 a태그

사실 이렇게 복잡한 구조를 가지는 마크업을 할 일은 많지 않지만, 알아두면 멋있다(?)

## 2. CSS에서 사용할 때

`w:100` = `width= 100px` , `h:100%` = `height= 100%`

소소하지만 작은 행복을 주는 에밋 :D

