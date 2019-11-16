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



### 직속 형제 선택자 +

아래 코드는 heading 클래스 바로 다음에 온 **intro 클래스**를 target 한다.

```scss
.heading + .intro {
  ...
}
```

이 `+` 선택자는 병렬적으로 위치한 element 사이에 스타일을 한꺼번에 입히기 유용하다

아래와 같이 2개의 btn 클래스가 병렬적으로 위치해 있을때

```html
<div class="btn-group">
  <a class="btn" href="#">Primary Action</a>
  <a class="btn" href="#">Secondary Action</a>
</div>
```

아래와 같은 css를 입혀주면

```scss
.btn { // 먼저 btn 클래스를 reference 한 뒤
  ...
  & + & { // immediate sibling을 target 한다
    margin-left: 15px;
    background: firebrick;
  }
}
```

2개의 btn 클래스가 형제 element로 인접해 있을 경우, 두번째 요소는 해당 속성을 먹게 된다!

[참고 문서](https://blog.teamtreehouse.com/sass-tip-double-ampersand-selector)



사실 `+` 선택자는 CSS 에서 원래 존재하는 선택자 😎 선택자 복습!

[CSS combinators 공식 문서](https://www.w3schools.com/css/css_combinators.asp)

| Selector name             | Combinator | 예시                                           |
| ------------------------- | ---------- | ---------------------------------------------- |
| descendant selector       | (space)    | div p {<br/> background-color: yellow;<br/>}   |
| child selector            | >          | div > p {<br/> background-color: yellow;<br/>} |
| adjacent sibling selector | +          | div + p {<br/> background-color: yellow;<br/>} |
| general sibling selector  | ~          | div ~ p {<br/> background-color: yellow;<br/>} |

# SASS mixin

[공식 문서 mixin 설명](https://sass-guidelin.es/ko/#mixins)

반복되는 코드는 mixin을 통해 쉽게 재사용이 가능하다.

`예시 - 반복되는 코드`

```scss
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
```

`mixin 을 통해 간결화한 코드`

```scss
$blue: #228be6; // 변수 설정
$gray: #495057;
$pink: #f06595;

// mixin 선언
@mixin button-color($color) {
    background: $color;
    &:hover {
        background: lighten($color, 10%);
    }
    &:active {
        background: darken($color, 10%);
    }
}

...

		&.blue {
      	// mixin 사용
        @include button-color($blue);
    }

    &.gray {
        @include button-color($gray);
    }

    &.pink {
        @include button-color($pink);
    }
```

