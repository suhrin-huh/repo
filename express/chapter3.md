# Chapter 3

## 1. HTTP GET 만들기

- 기본 설정

```js
const express = require("express");
const mysql = require("mysql");
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

```js
// request: 클라이언트에게 전달받는 모든 것, response: 서버가 응답 보내는 것

const data = [
  {
    id: "id-1",
    name: "name-1",
    note: "note-1",
  },
  {
    id: "id-2",
    name: "name-2",
    note: "note-2",
  },
  {
    id: "id-3",
    name: "name-3",
    note: "note-3",
  },
];

// GET : 데이터를 가져오는 것
app.get("/notes", (req, res) => {
  res.send(data);
});
```

## 2. HTTP POST 만들기 + 미들웨어 추가해보기

```js
// 미들웨어를 넣어준다.
app.use(express.json()); // json 형식
app.use(exporess.urlencoded(extended: true));필요에 맞추어서 추가하기

app.post('/notes', (req, res) => {
  console.log(Request.body);
  // 데이터를 넣는다.
  data.push(request.body);
  console.log(data);
  res.sendStatus(201);
})
```

- GET은 200, POST는 201
- 근데 그냥 이렇게 받게 되면 `undefined`로 출력
  => json 형식을 받아올 수 있도록 해야한다.

## 3. 미들웨어 더 잘 알아보기

```js
// 미들웨어를 넣어준다.
app.use(express.json()); // json 형식
app.use(exporess.urlencoded(extended: true));
```

```js
app.get(
  "/notes",
  (req, res, next) => {
    console.log("MiddleWare test");
    next(); //넣지 않으면 다음으로 안 넘어간다!
  },
  (req, res) => {
    res.send(data);
  }
);
```

`(req, res, next) => {...}` 이 부분이 미들웨어!!

- 사이에 여러개를 넣어도 괜찮다!

## 4. Routing 기본 이해 + Path Parameter

[공식문서 참고하기](https://expressjs.com/ko/api.html#router)

- path에 있는 parameter를 가져오기

```js
app.get("/notes/:noteId", (req, res) => {
  console.log(req.params); // 문자열로 나오는 것 주의하기!
  const item = data.filter((i) => i.id == req.params.noteId);
  res.sendStatus(200);
});
```
