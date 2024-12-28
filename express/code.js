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
app.get("/test", (req, res) => {
  res.send("Hello World!");
});

//
app.post("/notes", (req, res) => {
  //
  console.log(Request.body);
  // 데이터를 넣는다.
  data.push(request.body);
  console.log(data);
  res.sendStatus(201);
});
