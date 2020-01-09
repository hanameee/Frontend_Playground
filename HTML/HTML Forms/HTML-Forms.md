# HTML Forms

[Mozilla 공식 문서](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

## What is web form?

form은 유저와 웹 사이트(or 앱) 의 상호작용 역할을 해주는 대표적인 요소이다.

유저는 form을 통해 data 를 입력하고, 해당 데이터는 

- 서버로 보내지거나 (for process and storage)
- 혹은 클라이언트 단에서 interface를 변경하는 데에 쓰일 수 있다.

##Components of web form

web form 은 1개 이상의 form controls (=widgets) 로 구성되어 있다. 이 control 들은 dropdown boxes 일수도, buttons 일수도, checkboxes 나 radio buttons 일수도 있으며 주로 `input` 태그로 생성된다.

Form 은 특정 포맷이나 값이 입력되도록 validation을 거칠 수도 있으며, 접근성을 위해 text label 과 함께 짝지어지기도 한다.

## Form Structure

Form을 구성하는 요소들은 다음과 같다.

### <form> 요소

Form의 속성은 모두 optional 이나, action과 method 속성이 주로 사용된다.

```html
<form action="/my-handling-form-page" method="post">
</form>
```

-  `action` 속성 : form에서 수집된 데이터가 submit 될 때 보내질 location (URL) 을 명시한다
-  `method` 속성 : data 를 보낼 HTTP method 를 정의한다 (get, post, patch 등...)

### <label>, <input> 요소

```html
<label for="name">NAME: </label>
<input type="text" id="name" name="user_name" />
```
Label 요소는 Form의 usability 와 accessibility 를 위해 사용된다.


- <label> 의 for 속성은 form control 의 id 를 값으로 취해, 해당 label이 그 id 값의 form control과 연관되어 있음을 나타낸다. 
- 이렇게 <label> 을 사용하면 control 이 아닌 label 을 선택해도 해당 control이 활성화된다.
- 또한, screen reader이 유저에게 읽어줄 수 있는 control name 을 제공한다는 장점도 있다. 

```html
<input type="email" id="mail" name="user_mail" />
<input type="text" id="name" name="user_name" />
```

Input 요소는 type 속성으로 form control 의 외형과 동작을 정의한다.

- type 이 email 로 정의되면? valid 한 email  형식만 유저에게 받고,스마트폰에서는 이메일을 입력하기에 적합한 키보드로 바꿔주는 등의 기능을 한다.

### <input> 요소와 <textarea> 요소의 차이

```html
<input type="text" value="by default this element is filled with this text">
<textarea>
by default this element is filled with this text
</textarea>
```

`input` 태그는 닫는 태그가 필요 없는 empty element 인 한편, `textarea`  태그는 ending tag 가 필요하다는 차이점이 있다.

default value를 선언하기 위해 input tag는 `value` 속성을 사용해서 정의해줘야 하지만, textarea는 태그 사이에 default value를 넣어주면 된다. 

### <button> 요소

유저는 form 을 작성한 뒤, submit button 을 통해 data를 전송할 수 있다. 이 작업은 button 요소로 이루어진다.

```html
<li class="button">
  <button type="submit">Send your message</button>
</li>
```

button type은 3가지 값을 가진다. (`submit`, `reset`,  or `button`)

- submit (default) : form 의 data를 form의 action 속성에 정의된 page로 보낸다.
- reset : 모든 control 의 값을 default value로 바꾼다. UX 관점에서 좋지 않으므로 지양
- button : JS로 custom button을 만들 수 있다. 내가 직접 functionality를 정의하는 것.

## Sending Form data to web server

Form data 를 다루는 데에는 `<form>` element에서 정의된 **action, method** 그리고 `input` element에서 정의된 **name** 이 중요하다. 

각각의 form control 에서 정의된 name은 해당 data의 이름표와 같은 역할을 한다.
Form data는 name/value 쌍으로 서버에 전달되기 때문에 브라우저는 name을 통해 해당 data에 이름을 부여하고, 서버는 그 data를 name을 통해 handle할 수 있다.

```html
<form action="/my-handling-form-page" method="post">
  <ul>
    <li>
      <label for="name">NAME: </label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">EMAIL: </label>
      <input type="email" id="mail" name="user_mail" />
    </li>
    <li>
      <label for="msg">MESSAGE: </label>
      <textarea id="msg" name="user_message">
        placeholder</textarea
        >
    </li>
    <li class="button">
      <button type="submit">submit</button>
    </li>
  </ul>
</form>
```

위 코드의 경우, form 은  "`user_name`", "`user_email`", and "`user_message`" 이라고 named 된 3쌍의 데이터를 HTTP POST method 를 사용해  "`/my-handling-form-page`" 로 전송할 것이다.