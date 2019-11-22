# CSS Reset

CSS Reset이 왜 필요한가?
브라우저에서 제공하는 스타일은 각 브라우저마다 조금씩 다르다. (ex. h 태그들, ul, li 태그들)

따라서 브라우저와 상관없이 항상 내가 의도한 스타일대로 보여주기 위해선 **CSS 초기화**가 필요하다.

```html
<body>
    <div class="box">
         
    </div>
</body>
```

```css
.box {
    width: 300px;
    height: 150px;
    background: tomato;
}
```

이렇게 작성하면 box 주위로 내가 원하지 않았던 8px의 margin이 생긴 것을 볼 수 있다. 이는 browser에서 body 태그에게 기본적으로 제공하는 여백!

![img](https://i.imgur.com/HE4kRAp.png)

이를 아래와 같이  초기화해줄 수 있다.

```css
body {
    margin: 0;
    padding: 0;
}
```



하지만 매번 이런 초기화 코드를 작성하면 불편하겠지?
따라서 우리는 **Reset.css** 라이브러리를 사용해서 CSS Reset을 할 것임

구글링하면 많은 CDN들이 나오지만, 내가 사용할 것은 [meyer-reset](https://cdnjs.com/libraries/meyer-reset)!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- ⚠️reset하는 css는 반드시 main.css 보다 먼저 불러와져야 한다! -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" integrity="sha256-gvEnj2axkqIj4wbYhPjbWV7zttgpzBVEgHub9AAZQD4=" crossorigin="anonymous" />
    <link rel="stylesheet" href="main.css">
    <title>CSS Playground</title>
</head>
<body>
    <div class="box">
    </div>
         <h1>HEADER1</h1>
         <h2>HEADER2</h2>
         <h3>HEADER3</h3>
         <p>PARAGRAPH</p>
         <div>DIVISION</div>
         <ul>
             <li>Unordered List Item1</li>
             <li>Unordered List Item2</li>
             <li>Unordered List Item3</li>
         </ul>
         <ol>
             <li>Ordered List Item1</li>
             <li>Ordered List Item2</li>
             <li>Ordered List Item3</li>
         </ol>
</body>
</html>
```

reset.css는 반드시 내 stylesheet 보다 먼저 불러와져야 한다는 점을 기억하고!
이렇게 cdn을 추가하고 나면, 브라우저가 제공하는 모든 style들이 초기화 된 것을 볼 수 있다👍

