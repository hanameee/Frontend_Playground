# CSS Grid

CSS Grid(그리드)는 2차원(행과 열)의 레이아웃 시스템을 제공하는 CSS 모듈로, 다양한 레이아웃을 해결하기 위해 만들어졌다.

Flexbox와 마찬가지로, 여러개의 **자식 요소**인 `item`과 그들을 감싸는 상위 **부모 요소**인 `container`로 구성되어 있다.

CSS Grid 를 사용하기 위해서는?
간단하다. 정렬하고 싶은 요소들의 **부모 요소**에 `display: grid` 속성을 선언하면 된다. 

```css
.container {
  /* Block 속성의 Grid container 정의 */
  display: grid;
}
```

```css
.container {
  /* Inline 속성의 Grid container 정의 */
  display: inline-grid;
}
```

해당 속성을 선언한 부모 요소는 grid container이 되고, 자식 요소들은 grid item이 된다. Flexbox와 마 **부모 요소와 자식 요소에 정의하는 속성을 구분**해 적용해야 한다.



## 1. 부모 요소 (Grid container) 에 정의하는 속성 

Grid Container를 위한 속성들은 다음과 같다.

| 속성                        | 의미                                              |
| --------------------------- | ------------------------------------------------- |
| display                     | 그리드 컨테이너(Container)를 정의                 |
| grid-template-rows          | 명시적 행(Track)의 크기를 정의                    |
| grid-template-columns       | 명시적 열(Track)의 크기를 정의                    |
| grid-template-areas         | 영역(Area) 이름을 참조해 템플릿 생성              |
| grid-template               | `grid-template-xxx`의 단축 속성                   |
| row-gap(grid-row-gap)       | 행과 행 사이의 간격(Line)을 정의                  |
| column-gap(grid-column-gap) | 열과 열 사이의 간격(Line)을 정의                  |
| gap(grid-gap)               | `xxx-gap`의 단축 속성                             |
| grid-auto-rows              | 암시적인 행(Track)의 크기를 정의                  |
| grid-auto-columns           | 암시적인 열(Track)의 크기를 정의                  |
| grid-auto-flow              | 자동 배치 알고리즘 방식을 정의                    |
| grid                        | `grid-template-xxx`과 `grid-auto-xxx`의 단축 속성 |
| align-content               | 그리드 콘텐츠(Grid Contents)를 수직(열 축) 정렬   |
| justify-content             | 그리드 콘텐츠를 수평(행 축) 정렬                  |
| place-content               | `align-content`와 `justify-content`의 단축 속성   |
| align-items                 | 그리드 아이템(Items)들을 수직(열 축) 정렬         |
| justify-items               | 그리드 아이템들을 수평(행 축) 정렬                |
| place-items                 | `align-items`와 `justify-items`의 단축 속성       |

### display

```css
.container {
  /* Block 속성의 Grid container 정의 */
  display: grid;
}
```

```css
.container {
  /* Inline 속성의 Grid container 정의 */
  display: inline-grid;
}
```

### grid-template-rows/columns

**명시적** 행/열의 크기를 정의한다.
동시에 라인의 이름도 정의할 수 있다.

```css
/* 각 행(열)의 크기 정의 */
.container {
  grid-template-rows: 100px 200px;
}
/* 각 라인의 이름도 [라인이름] 의 형식으로 정의할 수 있다. 다만, 이미 행열의 개수대로 라인 이름이 자동으로 지정되어 있기에 꼭 필요한 경우가 아니면 라인 이름을 정의할 필요는 없다. */
.container {
  grid-template-rows: [first] 100px [second] 200px [third];
}
```

fr 과 repeat을 사용해 조금 더 간략하게 정의할 수 있다.

```css
.container {
  display: grid;
  /* fr = fraction 비율을 의미 */
  /* 1fr 1fr 1fr 은 전체 길이를 1:1:1로 나누기 - 반복되는 구문을 repeat로 간단히! */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2,100px);
  border: 4px solid gold;
}

.item {
  border: 2px dashed RebeccaPurple;
  font-size: 35px;
}
```

### grid-template-areas

`grid-area` 라는 grid item 속성을 참고해 grid template 을 생성하는 속성

`html`

```html
<div class="container">
  <header>HEADER</header>
  <main>MAIN</main>
  <aside>ASIDE</aside>
  <footer>FOOTER</footer>
</div>
```

`css`

```css
.container {
  display: grid;
  grid-template-rows: repeat(3,100px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 
    "header header header"
    /* 빈칸으로 남기고 싶으면 . 을 찍으면 된다 */
    "main . aside"
    "footer footer footer";
  border: 4px solid gold;
}

div > * {
  border: 10px solid RebeccaPurple;
  font-size: 35px;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

aside {
  grid-area: aside;
}

footer {
  grid-area: footer;
}
```

#### 💡 [단축 속성] grid-template

`grid-template-xxx` 의 단축 속성 (`grid-template-rows`, `grid-template-columns` ,`grid-template-areas`)

rows와 columns를 동시에 선언할 땐 `/` 를 사용한다.
grid-template-areas 를 선언하면서 동시에 grid-template-rows/columns 값도 넣어줄 수 있는데, 형식은 아래와 같다.

```css
.container {
  display: grid;
  grid-template:
    [1행 시작] "AREAS" 행너비값 [1행 끝]
    [2행 시작] "AREAS" 행너비값 [2행 끝]
    [3행 시작] "AREAS" 행너비값 [3행 끝]
    / <grid-template-columns>;
}
```

[사용 예시]

```css
.container {
  display: grid;
  grid-template:
    "header header header" 80px /* header의 높이는 80px */
    "main main aside" 350px
    "footer footer footer" 130px
    / 2fr 100px 1fr; /* 각 column 들은 순서대로 2fr, 100px, 1fr*/
}
```

위 코드는 아래와 동일하다.

```css
.container {
  display: grid;
  grid-template-rows: 80px 350px 130px;
  grid-template-columns: 2fr 100px 1fr;
  grid-template-areas:
    "header header header"
    "main main aside"
    "footer footer footer";
}
```



### row/column-gap (= grid-row/column-gap)

각 행과 행, 열과 열 사이의 간격 (gutter) 을 지정하는 속성.
Grid Line의 너비를 지정한다고 표현할 수도 있다.

```css
.container {
  display: grid;
  row-gap: 30px;
  column-gap: 15px;
}
```

#### 💡 [단축 속성] gap (= grid-gap) 

row 와 column의 gap 을 한번에 정의할 수 있다.

```css
.container {
  display: grid;
  gap: 20px 10px;
  /* grid-gap: <grid-row-gap> <grid-column-gap> */
}
```

값 하나만 작성 시, row와 column의 gap을 하나의 값으로 통일함을 의미한다.

```css
.container {
  display: grid;
  gap: 10px;  /* row-gap: 10px; + column-gap: 10px; */
}
```

~~하나의 값만 적용하고자 한다면, 아래와 같이 작성한다.~~ (근데 이것보단 그냥 명시적 속성을 쓰는게 덜 헷갈릴듯 하다)

```css
.container {
  display: grid;
  gap: 10px 0; /* row-gap */
  gap: 0 10px; /* column-gap */
}
```

참고) `grid-gap` 의 접두사 `grid-` 는 deprecated 되었다고 한다.

### grid-auto-rows/columns

**암시적** 행/열의 크기를 정의한다. (명시하지 않았는데 만들어지는 행/열)

암시적 행/열을 정의해준다면, 명시적으로 2x2 grid 만 정의하고, 5/7 처럼 외딴 곳에 item을 배치했을 때 그 사이에 정의되지 않은 행/열들이 모두 암시적 값에 따라 자동으로 정의/배치된다!

```css
.container {
  display: grid;
  /* 명시적으로는 3*3 grid 정의 */
  grid-template-rows: repeat(3,100px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 
    "header header header"
    "main main aside"
    "footer footer footer";
  border: 4px solid gold;
  /* 암시적으로 행/열 값 정의 */
  grid-auto-rows: 100px;
  grid-auto-columns: 2fr;
}

...

.auto {
  /* 명시적 grid인 3*3을 벗어난 행/열들은 암시적 값을 따라 자동으로 생성됨*/
  grid-column: 4/5;
}
 
```

⚠️ 암시적 속성에서는 음수 값을 사용할 수 없음에 주의하자!

### grid-auto-flow

명시적으로 배치하지 않은 item들을 어떤 방식의 **자동 배치 알고리즘** 으로 처리할 지 정의해주는 속성.

| 값                  | 의미                                            |
| ------------------- | ----------------------------------------------- |
| row                 | 각 행 축을 따라 차례로 배치 (가로 방향)         |
| column              | 각 열 축을 따라 차례로 배 (세로 방향)           |
| row dense (= dense) | 각 행 축을 따라 차례로 배치하되, 빈 영역을 메움 |
| column dense        | 각 열 축을 따라 차례로 배치하되, 빈 영역을 메움 |

row 가 기본값이다.

### grid

`grid-template-xxx` 와 `grid-auto-xxx` 의 단축 속성

> grid 만 사용하면 넘나리 많이 축약되어서 template 와 auto 정도는 명시적으로 써주는 것이 좋다고 한다! 그래도 해석할 수 있어야 하니 알아두자.

```css
.container {
  grid: <grid-template>;
  grid: <grid-template-rows> / <grid-auto-flow> <grid-auto-columns>;
  grid: <grid-auto-flow> <grid-auto-rows> / <grid-template-columns>;
}
```

`grid-auto-flow`를 작성할 때는 `auto-flow` 키워드를 사용한다ㅏ. `/`로 구분해 작성하는 위치가 곧 `row`, `column` 값을 의미하기에, grid 단축 표현을 사용해서 auto-flow 값을 작성할때 `row`, `column` 값은 작성하지 않는다. `dense` 값은 `auto-flow` 뒤에 붙여준다.

## 2. 자식 요소 (Grid item) 에 정의하는 속성 

Grid Item을 위한 속성들은 다음과 같다.

| 속성              | 의미                                                         |
| ----------------- | ------------------------------------------------------------ |
| grid-row-start    | 그리드 아이템(Item)의 행 시작 위치 지정                      |
| grid-row-end      | 그리드 아이템의 행 끝 위치 지정                              |
| grid-row          | `grid-row-xxx`의 단축 속성(행 시작/끝 위치)                  |
| grid-column-start | 그리드 아이템의 열 시작 위치 지정                            |
| grid-column-end   | 그리드 아이템의 열 끝 위치 지정                              |
| grid-column       | `grid-column-xxx`의 단축 속성(열 시작/끝 위치)               |
| grid-area         | 영역(Area) 이름을 설정하거나, `grid-row`와 `grid-column`의 단축 속성 |
| align-self        | 단일 그리드 아이템을 수직(열 축) 정렬                        |
| justify-self      | 단일 그리드 아이템을 수평(행 축) 정렬                        |
| place-self        | `align-self`와 `justify-self`의 단축 속성                    |
| order             | 그리드 아이템의 배치 순서를 지정                             |
| z-index           | 그리드 아이템의 쌓이는 순서를 지정                           |

### grid-row/column

그리드 아이템을 배치하기 위해 그리드 Line의 `시작 위치` 와 `끝 위치` 를 지정하는 속성. container 속성과는 달리 복수형이 아니라 단수형임에 주의!

> grid-row-start 와 grid-row-end 의 단축 속성이다

```css
.item {
  /* start 와 end 를 / 로 구분한다! */
  grid-row: <grid-row-start> / <grid-row-end>
}
```

[사용 예시]

```css
.item:nth-child(1){
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.item:nth-child(2){
  grid-row: 1 / 3;
}
.item:nth-child(4){
  grid-row: 4 / 5;
  /* 음수 값으로도 정의할 수 있다 */
  grid-column: -1 / -3;
}
```

### 💡 [단축 속성] grid-area

2가지 기능이 있다. 2가지 기능 중 1가지만 사용할 수 있다!

1. grid-row 와 grid-column 의 단축 속성

```css
/* ⚠️ 행시작 / 열시작 / 행끝 / 열끝 순서임에 주의! */
.item {
  grid-ared: <grid-row-start> / <grid-column-start> / <grid-row-end> / <grid-column-end> / 
}
```

2. container 속성인 grid-template-areas가 참조할 영역 이름 설정
   (⚠️ 주의 - 이 경우 grid-row와 grid-column 개념은 무시된다!)

`html`

```html
<div class="container">
  <header class="item">HEADER</header>
  <main class="item">MAIN</main>
  <aside class="item">ASIDE</aside>
  <footer class="item">FOOTER</footer>
</div>
```

`css`

```css
.container {
  display: grid;
  grid-template-rows: repeat(4, 90px);
  grid-template-columns: repeat(3, 1fr);
  /* 이친구는 grid item 속성인 grid-area를 참조한다 */
  grid-template-areas:
    "header header header"
    "main main aside"
    "main main ."
    "footer footer footer";
}

header.item { grid-area: header; }
main.item   { grid-area: main;   }
aside.item  { grid-area: aside;  }
footer.item { grid-area: footer; }
```

