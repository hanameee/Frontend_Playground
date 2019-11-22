# Transform

Animation은 transform 과 함께 사용해야 진또배기!

[참고 링크 - TCP school](http://tcpschool.com/css/css3_transform_2Dtransform)

## Transform 속성이란?

HTML 요소의 위치를 이동시키거나 (translate), 크기를 조절하거나 (scale), 회전시키거나 (rotate), 기울일 수 있는 속성! CSS3에서는 transform 속성을 사용하여 요소의 모양, 크기, 위치를 자유롭게 바꿀 수 있다.

CSS3의 transform 속성은 2D와 3D (z-index) 를 모두 제공한다.

## 2D Transform

### 1. translate() 메소드

현재 위치에서 해당 요소를 주어진 x축과 y축의 거리만큼 이동시킨다. 양/음수 가능

```html
<style>
    #trans {
        -webkit-transform: translate(100px, 50px);
        -ms-transform: translate(100px, 50px);
        transform: translate(100px, 50px);
    }
</style>
```

### 2. rotate() 메소드

해당 요소를 주어진 각도만큼 시계 방향(양수)이나 반시계 방향(음수)으로 회전시킨다.

```html
<style>
    #rotate {
        -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        transform: rotate(30deg);
    }
</style>
```

### 3. scale() 메소드

해당 요소의 크기를 주어진 배율만큼 늘이거나 줄인다. 주어진 배율이 1보다 크면 늘리고, 1보다 작으면 줄인다.

```html
<style>
    #scale_inc {
        -webkit-transform: scale(1.5, 2);
        -ms-transform: scale(1.5, 2);
        transform: scale(1.5, 2);
    }

    #scale_dec {
        -webkit-transform: scale(0.7, 0.7);
        -ms-transform: scale(0.7, 0.7);
        transform: scale(0.7, 0.7);
    }
</style>
```

### 4. skew() 메소드

해당 요소를 주어진 각도만큼 각각 x축과 y축 방향으로 기울인다.

```html
<style>
    #skew {
        -webkit-transform: skew(20deg, 30deg);
        -ms-transform: skew(20deg, 30deg);
        transform: skew(20deg, 30deg);
      	/* transform: skewX, skewY 로 각 축별로 개별 선언도 가능 */
    }
</style>
```

### 5. matrix() 메소드

모든 2D transform 메소드를 한 줄에 설정할 수 있도록 해줌. 매개변수 순서는 다음과 같다.

```css
matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY());
```

[사용 예시]

```html
<style>
    #matrix {
        -webkit-transform: matrix(0.7, 0, 0, 0.7, 1, 0);
        -ms-transform: matrix(0.7, 0, 0, 0.7, 0, 0);
        transform: matrix(2, 0.3, 0.2, 1.3, 150, 100);
    }
</style>
```

### 6. transform-origin 속성

transform을 적용하는 중심좌표를 설정한다. [공식 API 문서](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
디폴트 값은 center 이며, `px`,  `%`, keyword (left, right, bottom, top) 으로 설정할 수 있다. 

[다양한 syntax 사용 예시]

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;
```



## 3D Transform

2D transform의 모든 메소드에 x축이 추가되며, 3d 메소드 (rotate3d, translate3d, scale3d) 가 추가적으로 존재한다.

[사용 예시]

```html
<style>
  	/* 2d 버전 translate */
    #trans_01 {
        -webkit-transform: translate(100px, 50px);
        -ms-transform: translate(100px, 50px);
        transform: translate(100px, 50px);
    }
		/* 3d 버전 translate */
    #trans_02 {
        -webkit-transform: translate3d(100px, 50px, -150px);
        transform: translate3d(100px, 50px, -150px);
    }

</style>
```

