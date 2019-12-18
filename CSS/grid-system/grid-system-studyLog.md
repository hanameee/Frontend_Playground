# CSS Grid

CSS Grid(그리드)는 2차원(행과 열)의 레이아웃 시스템을 제공하는 CSS 모듈로, 다양한 레이아웃을 해결하기 위해 만들어졌다 👊

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


## 2. 부모 요소 (Grid item) 에 정의하는 속성 
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

