취지: 공부하다 궁금한 건 🤷‍♀️? 그때 그때 해결하자 🙆‍♀️!

---

# CSS에서 완벽한 3등분을 하는 법

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

caniuse에서 확인한 브라우저 지원율은 95.53%이다! 가장 직관적인 해결 방법.

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

⚠️ 하지만 (mostly fluid pattern 에서처럼) 하나의 container에 3개만 있는게 아니고 & viewport size에 따라 다양한 레이아웃을 주고 싶다면?

그럴땐 직접 width를 한땀 한땀 선언해줘야 하기 때문에 flexbox에만 의존할 수는 없다.

### 방법3. 무적권

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



🚩이걸 알기 위해선? **CSS 단위**를 공부하자.

[참고 링크](https://webclub.tistory.com/356)



### ❕answer

키워드 - `CSS단위` `CSSunits`



#### 1. 기본 단위 : `px`, `%`

px는 절대값, %는 **부모요소** 에 영향을 받는 상대값

#### 2. `em`, `rem`

`em` : 현재 **자기 자신**의 **font-size** 의 영향을 받는 상대값
⚠️ 주의할 점 - 자식의 font-size가 정의되지 않았다면 부모의 font-size를 상속받는다.

```html
<div class="container">
  container
  <div class="parent">
    <div class="child">Child1</div>
    <div class="child">Child2</div>
  </div>
</div>
```

```css
body * {
  border: 2px solid;
}

.container {
  width: 60em; /* 10px*60 = 600px */
  font-size: 10px;
}

.parent {
  width: 30em; /* 부모의 font-size를 상속받아 10px*30 = 300px */
}

.child {
  width: 50%;
  font-size: 2em; /* 상속받은 font-size (=10px) 의 2배 = 20px */
}
```

em으로 모든 요소의 font-size를 정의하면, 가장 상위 요소의 (이 예제에서는 container) font-size만 변경하면 모든 값을 동시에 상대적으로 변경할 수 있겠지!

특정 조상 요소에 절대적인 값을 (px) 입력해두고, 그 이하는 그 값에 맞게 변형되게 할 때 em을 많이 쓴다.

`rem` : root em = 가장 조상 요소, 즉 **HTML** 태그의 **font-size** 의 영향만을 받는 상대값
모든 부모에게 차곡차곡 영향을 받아 헷갈리는 em의 단점을 극복하기 위해, 중간 단계의 부모들은 모두 무시하고 오로지 최종 조상의 font-size 영향을 받는 상대값이다.

```css
html {
  font-size: 10px;
}

.container {
  width: 60em; /* 10px*60 = 600px */
  font-size: 10px;
}

.parent {
  width: 30em; /* 부모의 font-size를 상속받아 10px*30 = 300px */
}

.child {
  width: 200rem; /* 10*20 = 200px 임. rem은 중간조상인 parent의 width에는 영향을 받지 않는다 */
  font-size: 2em; /* 상속받은 font-size (=10px) 의 2배 = 20px */
}
```

만약 나중에 전체적인 font-size를 16px로 수정하고 싶다면, html은 가만 놔두고 body (혹은 body 바로 밑의 어떤 요소)의 font-size 값을 16px로 바꿔주면 된다. 이 경우, rem에는 전혀 지장을 주지 않는다!

이렇게 rem이라는 단위를 온전하게 사용할 수 있다. 유용!

#### 3. vw, vh

`vw` : viewport weight `vh` : viewport height
**viewport**란? 화면에 보이고 있는 size!

```css
.container {
  width: 50vw; /* vw는 100단위임. 50vw는 viewport width의 50%를 의미 */
  height: 200px;
  background: salmon;
}
```

vw (= 100vw) : 온전히 viewport의 가로길이를 다 먹겠다는 말
vh (= 100vh) : 온전히 viewport의 세로길이를 다 먹겠다는 말

1vw/vh 부터 100 vw/vh 까지 선언한다.

#### 4. vmin, vmax

`vmax`: 현재 화면의 (viewport) 가로/세로 길이 중 더 긴 것을 의미
`vmin`: 현재 화면의 (viewport) 가로/세로 길이 중 더 긴 것을 의미

```css
.container {
  width: 50vmax;
}
```

1) viewport의 가로 길이 > 세로 길이인 경우 : container의 width = viewport width 의 50%
2) viewport의 가로 길이 < 세로 길이인 경우 : container의 width = viewport height 의 50%

vmin은 이 반대겠지 :)

vmin, vmax는 viewport 에 따라 그때그때 기준점으로 삼는 길이가 달라진다는 것에 주의.



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

SCSS 란?

- CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든
- Sass의 모든 기능을 지원하는 (Sass 의 ver.3 에서 새롭게 등장한 것이 Scss)
- CSS의 상위집합(Superset) = CSS의 확장
- 즉, SCSS는 CSS와 거의 같은 문법으로 Sass 기능을 지원하는 CSS Preprocessor (전처리기)

CSS Preprocessor 이란?

- 웹에서는 CSS 만 동작하지만 CSS는 한계를 가진다
- 따라서 선택자의 중첩(Nesting)이나 조건문, 반복문, 다양한 단위(Unit)의 연산 표준 CSS 보다 훨씬 많은 기능을 지원하는 전처리기를 사용해서 코드를 작성한 뒤
- 이렇게 작성한 전처리기를 웹에서 동작 가능한 표준의 CSS로 컴파일(Compile)한다

SCSS와 SASS의 차이는?

문법과 지원 기능이 조금 다르다. 한가지 예시로, Sass는 선택자의 유효범위를 ‘들여쓰기’로 구분하고, SCSS는 `{}`로 범위를 구분한다. 또, Sass는 `;`(세미콜론)을 사용하지 않지만 Scss는 사용한다.

현재는 SCSS의 사용이 보편화되어있음. 따라서 둘의 차이점보다는 CSS Preprocessor에 대한 개념을 이해하는 것이 더 유의미!

----

# 내 margin이 먹지 않았던 이유

### ❔question

왜 아래처럼 특정 

🚩이걸 알기 위해선

[참고 링크](https://www.educba.com/sass-vs-scss/) - 영어
[참고 링크](https://heropy.blog/2018/01/31/sass/) - 한글 설명 짱짱맨



### ❕answer

키워드 - `scss` `sass` `css preprocessor`



[margin collapsing 공식 API 문서](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

