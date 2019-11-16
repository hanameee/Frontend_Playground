# SCSS의 기본

## 1. 기본 문법

### 부모 선택자 &

[parent selector 공식 문서](https://sass-lang.com/documentation/style-rules/parent-selector)

**[사용 예시]**

```scss
.Button {
    &.large { 
        height: 3rem;
    }
    &.medium {
        height: 2.25rem;
    }
    &.small {
        height: 1.75rem;
    }
}
```

위 코드에서

```scss
.Button {
  &.large {

  }
}
```

가 의미 하는 것은

```css
.Button.large {

}
```

결국, `Button` 과 `large` CSS 클래스가 함께 적용되어 있으면 우리가 원하는 스타일을 적용하겠다는 것을 의미!

### 변수 선언기호 $

[variables 공식 문서](https://sass-lang.com/documentation/variables)

**[사용 예시]**

```scss
$blue: #228be6; // 변수 설정
$gray: #495057;
$pink: #f06595;

.Button {
    &.blue {
        background: $blue;
        &:hover {
            background: lighten($blue, 10%);
        }
        &:active {
            background: darken($blue, 10%);
        }
    }

    &.gray {
        background: $gray;
        &:hover {
            background: lighten($gray, 10%);
        }
        &:active {
            background: darken($gray, 10%);
        }
    }

    &.pink {
        background: $pink;
        &:hover {
            background: lighten($pink, 10%);
        }
        &:active {
            background: darken($pink, 10%);
        }
    }
  
}

```

# SASS mixin

[공식 문서 mixin 설명](https://sass-guidelin.es/ko/#mixins)