# BEM (Block, Element, Modifier) methodology

[참고 링크 - css-tricks](https://css-tricks.com/bem-101/)

---

## CSS 작명 규칙으로써의 BEM

```css
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
```

### Block component

새로운 component 의 가장 상위 top-level abstraction

```css
.btn {  
}

.nav {
}

.container {
  
}
```

일반적인 작명 - 단순히 component의 이름을 나타내는 경우 : `-` 사용

```css
.toggle-btn {
  
}
```

### Element

block component의 **구조적인 일부분**을 나타내는 element : `__` 사용

```css
.container__item {
  
}
```

### Modifier

block component의 **상태**를 나타내는 modifier : `--` 사용

```css
.btn--success {
  
}

.btn--danger {
  
}
```

