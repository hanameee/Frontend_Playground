# Materialize

[공식 문서](https://materializecss.com/)

## 1) Grid System - [link](https://materializecss.com/grid.html)

###1-1. Grid System 을 구성하는 요소들

- Container
- Columns
- Row

`Container`

용례는 아래와 같다.

```html
<body>
  <div class="container">
    <!-- 컨테이너가 들어가는 부분 -->
  </div>
</body>
```

소스코드는 아래와 같다.

```css
.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
}

@media only screen and (min-width: 601px) {
  .container {
    width: 85%;
  }
}

@media only screen and (min-width: 993px) {
  .container {
    width: 70%;
  }
}
```

993px 이상의 **large screen에서는 70%** (단 max-width 1280px), 601~992px 사이의 **middle screen에서는 85%**, 600px 이하의 **small screen에서는 90%** 의 width를 차지하는 것을 알 수 있다.

나아가, margin은 0 auto로 기본값이 가운데 정렬.

`Columns`

### 1-2. Columns 를 조정하는 기능들

- Offsets
- Push
- Pull

