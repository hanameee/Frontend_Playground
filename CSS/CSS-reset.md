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

## CSS reset file

```css
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

위 코드를 추가해주고 HTML에서 불러오면 끝.

```html
<link rel="stylesheet" href="./css/reset.css" />
<link rel="stylesheet" href="./css/main.css" />
```

⚠️ 주의 : reset.css 는 반드시 내 stylesheet 보다 먼저 불러와져야 한다. 호출 순서 조심!

하지만 매번 이런 초기화 코드를 작성하면 불편하겠지? 그 때 편리하게 사용할 수 있는 것이 cdn.

## CSS reset CDN

다양한 cdn이 있으나, 아래 예시는 [meyer-reset](https://cdnjs.com/libraries/meyer-reset)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 여기 추가.마찬가지로 reset.css는 반드시 가장 먼저 불러와져야 한다! -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css" crossorigin="anonymous" />
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
