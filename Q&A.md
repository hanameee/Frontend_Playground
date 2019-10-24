취지: 공부하다 궁금한 건 🤷‍♀️? 그때 그때 해결하자 🙆‍♀️!

---

# CSS에서 3등분 어케하노...33.3333...%?!

### ❔question

flexbox를 사용한 layout을 짜던 중, content 3개가 width를 나눠먹을때 width를 33.3%로 주니 미묘하게 못생긴 것을 발견...! 😒

검색해보니 역시 나와 같은 고민 (완벽하게 1/3을 먹게 하기) 을 한 외국 찡구들이 스택 오버플로우에 있었다고 한다. 링크는 밑에.

🚩이걸 알기 위해선

 [참고 링크](https://stackoverflow.com/questions/18781713/css-divide-width-100-to-3-column) - css divide width 100% to 3 column



### ❕answer

키워드 - `calc()` `flexbox` `grid`

### 방법1. CSS calc 속성 사용

calc 를 사용해서 100/3을 해버리면 된다. 편-안

```css
body {
  margin: 0;
}

div {
  height: 200px;
  width: 33.33%; /* 옛날 browser들 중 calc 속성을 먹지 않는 애들을 위한 대비책 */
  width: calc(100% / 3);
  display: inline-block;
}

div:first-of-type { background-color: red }
div:nth-of-type(2) { background-color: blue }
div:nth-of-type(3) { background-color: green }
```

```html
<div>
  1
</div>
<div>
  2
</div>
<div>
  3
</div>
```

브라우저 지원율은 95.53% 로, 써도 될 듯 하다. 가장 직관적인 해결 방법.

![image-20191025010808766](../REACT_study/Udemy/images/image-20191025010808766.png)

### 방법2. Flexbox 사용

2018년이니 Flexbox를 쓰라고...! 지금은 거의 2020년이니 더더욱 flexbox를 쓰자.
flexbox 자체가 width에 꽉 차게 content를 배열해주는거니깐, 존재 자체로 문제 해결.

```css
body {
  margin: 0;
}

#wrapper {
  display: flex;
  height: 200px;
}

#wrapper > div {
  flex-grow: 1;
}

#wrapper > div:first-of-type { background-color: red }
#wrapper > div:nth-of-type(2) { background-color: blue }
#wrapper > div:nth-of-type(3) { bac
```

```html
<div id="wrapper">
  <div id="c1"></div>
  <div id="c2"></div>
  <div id="c3"></div>
</div>
```

⚠️ 하지만, 내가 mostly fluid를 만들 때처럼 하나의 container에 3개만 있는게 아니고 & viewport size에 따라 다양한 레이아웃을 보여주고 싶다면 직접 width를 한땀 한땀 선언해줘야 하기 때문에, flexbox에만 의존할 수는 없다.

### 방법4. 무적권

무적권 먹히는 방법 그것은 바로 `33.3333333%` 😎
가끔은 무식한게 도움이 될 때도 있다. 완벽한 1/3은 아닐지라도 적어도 모든 브라우저에서 지원하므로 백업 코드 용으로 선언해두라는 조언.

---

# CSS 소스코드에서 보이는 [ -webkit ]은 뭘까? 

`CSS접두어` `크로스 브라우징` `vendor prefixes` `browser prefixes`

🚩이걸 알기 위해선 -  **CSS 접두어**를 공부하자.

[참고 링크](https://mainia.tistory.com/3671) - 블로그 설명
[참고 링크](https://stackoverflow.com/questions/3468154/what-is-webkit-and-how-is-it-related-to-css) - stackoverflow
[참고 링크](http://prefixr.com/what-are-vendor-prefixes.php) - What are vendor or web browser prefixes?



---
# rem, em ... 너 뭐하는 애니

### ❔question

UI Framework 소스코드를 까보면 자주 보이는 rem과 em 등등... 뭐하는 애들일까?
px 말고 다른 단위가 나오면 애써 회피하던 지난날들에 지쳤다면 한번에 정리하고 가자.

🚩이걸 알기 위해선 - **CSS 단위**를 공부하자.

[참고 링크](https://webclub.tistory.com/356)

 

### ❕answer

키워드 - `CSS단위`

---

# 갑자기 분위기 display: table?

### ❔question

 `Materialize css 에서 grid 코드 공부하던 중`

```css
.row:after {
  content: "";
  display: table;
  clear: both;
}
```

띠용, 갑자기 content: "" display: table 은 왜 나온거지 🤔

🚩이걸 알기 위해선 - 까먹었던 **Float**를 복습하고, **Clearfix**를 다시 정리하자.

[참고 링크](https://takeuu.tistory.com/60)



### ❕answer

키워드 - `clearfix` `float`

---

# SCSS 랑 SASS 랑 뭐가 달라여? (멍청)

### ❔question

제곧내

🚩이걸 알기 위해선

[참고 링크](https://www.educba.com/sass-vs-scss/) - 영어
[참고 링크](https://heropy.blog/2018/01/31/sass/) - 한글 설명 짱짱맨



### ❕answer

키워드 - `scss` `sass` `css preprocessor`



----

