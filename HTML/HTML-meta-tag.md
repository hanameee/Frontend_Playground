# HTML meta tag

html <head> 부분에 들어가는 meta tag 들의 종류와 의미를 정리합니다.

[코드 및 설명 출처 - heropy blog](https://heropy.blog/2019/04/24/html-css-starter/)
[코드 및 설명 출처2 - mdn](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta)
[코드 및 설명 출처3 - w3schools]([https://ofcourse.kr/html-course/meta-%ED%83%9C%EA%B7%B8](https://ofcourse.kr/html-course/meta-태그))

---

## meta tag 란?

meta 요소는 HTML 문서에 관한 보이지 않는 정보(표시 방식, 제작자, 내용, 키워드 등)를 `검색엔진`이나 `브라우저`에 제공하기 위해 사용된다.

페이지의 설명 요약, 핵심 키워드, 제작자, 크롤링 정책 등 다양한 정보를 태그의 속성을 통해 정보를 제공한다. (닫는 태그가 없는 empty element)

```html
<head>
  <meta charset="UTF-8"> 
  <meta name="author" content="홍길동">
  <meta name="description" content="우리 사이트가 최고!">
</head>

<!-- 위의 코드는 아래처럼 해석될 수 있다 -->
<문서의정보범위>
  <정보 문자인코딩방식="UTF-8">
  <정보 정보종류="사이트제작자" 정보값="홍길동">
  <정보 정보종류="사이트설명" 정보값="우리 사이트가 최고!">
</문서의정보범위>
```
### 기본적인 속성들

|     속성     |                             의미                             |                         값                         |
| :----------: | :----------------------------------------------------------: | :------------------------------------------------: |
|  `charset`   |                       문자인코딩 방식                        |             `UTF-8` (표준) `EUC-KR` 등             |
|    `name`    |      검색엔진 등에 제공하기 위한 정보종류(메타 데이터)       | `author`, `description`, `keywords`, `viewport` 등 |
|  `content`   |          `name` 또는 `http-equiv` 속성의 값을 제공           |                                                    |
| `http-equiv` | HTTP 헤더의 이름을 값으로 가지며, 서버 작동방식을 변경할 수 있는 지시를 정의 |              `refresh`, 혹은 IE 지원               |

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
```

위 코드는? Internet Explorer 에서 문서가 렌더링 될 때 최신의 IE 렌더링 방식으로 렌더링 되도록 지원하는 코드로, IE 지원을 위해 포함시키는 것이 좋다.

---

## 크롤러(봇)을 위한 robot 속성 🤖

[코드 작성 예시]

```html
<meta name="robots" content="index, follow"> <!-- 복수의 속성을 ,로 가진다 -->
```

아래 attribute 들을 가질 수 있다.

| 값             | 설명                                                         | Used by                                                      |
| :------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `index`        | Allows the robot to index the page (default).                | All                                                          |
| `noindex`      | Requests the robot to not index the page.                    | All                                                          |
| `follow`       | Allows the robot to follow the links on the page (default).  | All                                                          |
| `nofollow`     | Requests the robot to not follow the links on the page.      | All                                                          |
| `none`         | Equivalent to `noindex, nofollow`                            | [Google](https://support.google.com/webmasters/answer/79812) |
| `noodp`        | Prevents using the [Open Directory Project](https://www.dmoz.org/) description, if any, as the page description in search engine results. | [Google](https://support.google.com/webmasters/answer/35624#nodmoz), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/meta-tags-robotstxt-yahoo-search-sln2213.html#cont5), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240) |
| `noarchive`    | Requests the search engine not to cache the page content.    | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240) |
| `nosnippet`    | Prevents displaying any description of the page in search engine results. | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240) |
| `noimageindex` | Requests this page not to appear as the referring page of an indexed image. | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives) |
| `nocache`      | Synonym of `noarchive`.                                      | [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240) |

---

## 반응형을 위한 viewport 속성 🖥

[코드 작성 예시]

```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1" />
```

name = viewport 로 설정되었다면, content 에 viewport에 대한 세팅을 하겠다는 말!

- `width=device-width` : 페이지의 width 를 기기의 width 에 맞게 세팅
- ` initial-scale=1.0` : 처음 페이지에 진입했을 때 페이지가 확대되어 있는 비율을 100%로 세팅
- `user-scalable=no` : 사용자가 디바이스 화면을 확대하거나 축소하는 것을 막음
- `maximum-scale`, `maximum-scale` : 사용자가 디바이스 화면을 확대/축소 할 수 있는 배율을 제한. 둘 다 1로 설정하면 최대 확대값 / 최소 확대값도 100% 이기에 확대 축소를 원천적으로 제한하는 것.

| Value           | Possible subvalues                                    | Description                                                  |
| :-------------- | :---------------------------------------------------- | :----------------------------------------------------------- |
| `width`         | A positive integer number, or the text `device-width` | Defines the pixel width of the viewport that you want the web site to be rendered at. |
| `height`        | A positive integer, or the text `device-height`       | Defines the height of the viewport. Not used by any browser. |
| `initial-scale` | A positive number between `0.0` and `10.0`            | Defines the ratio between the device width (`device-width` in portrait mode or `device-height` in landscape mode) and the viewport size. |
| `maximum-scale` | A positive number between `0.0` and `10.0`            | Defines the maximum amount to zoom in. It must be greater or equal to the `minimum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default. |
| `minimum-scale` | A positive number between `0.0` and `10.0`            | Defines the minimum zoom level. It must be smaller or equal to the `maximum-scale` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default. |
| `user-scalable` | `yes` or `no`                                         | If set to `no`, the user is not able to zoom in the webpage. The default is `yes`. Browser settings can ignore this r |

## opengraph (og) 속성

Open graph 를 통해 사이트에서 외부에 제공할 정보를 제공할 수 있다. 대표적으로 SNS (Facebook) 나, 카카오톡 등의 메신저에서 많이 쓰인다.

![카카오톡 Open graph에 대한 이미지 검색결과](https://devtalk.kakao.com/uploads/default/original/2X/d/d93dd25d1ccfc071e6faf0bbb9a5b29c9f051868.png)

외부의 다양한 사이트는 og 태그에서 정의된 content 속성 안의 정보를 가져가서 사이트의 제목/설명/대표 이미지 등을 확인해간다.

```html
<!-- http://ogp.me/ -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Responsive-Github-Clone">
<meta property="og:title" content="Build software better, together">
<meta property="og:description" content="GitHub clone coding / GitHub is where people build software. More than 31 million people use GitHub to discover, fork, and contribute to over 100 million projects.">
<meta property="og:image" content="img/logo__github.png">
<meta property="og:url" content="https://github.com">
```

더 자세한 프로토콜 정보는 [링크](http://ogp.me/)에서 확인 가능!

Twitter 에서는 `Twitter Card` 라는 개념을 사용한다.

```html
<!-- https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html -->
<meta property="twitter:card" content="summary">
<meta property="twitter:site" content="GitHub">
<meta property="twitter:title" content="Build software better, together">
<meta property="twitter:description" content="GitHub clone coding / GitHub is where people build software. More than 31 million people use GitHub to discover, fork, and contribute to over 100 million projects.">
<meta property="twitter:image" content="img/logo__github.png">
<meta property="twitter:url" content="https://github.com">
```

역시 더 자세한 정보는 [링크](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html) 에서 확인 가능!

