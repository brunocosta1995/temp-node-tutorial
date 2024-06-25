const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(201).json({ success: true, data: people });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).json({ success: false, msg: "entre com um nome" });
  }
  const data = { id: people.length + 1, newName: name };
  res.status(201).json({ success: true, data: [...people, data] });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(401)
      .json({ success: false, msg: "Entre com um nome adequado" });
  }

  res.status(201).json({ success: true, person: name });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res
      .status(404)
      .json({ success: false, msg: "No person find with the id: " + id });
  }

  const newPeople = people.map((people) => {
    if (people.id === Number(id)) {
      people.name = name;
    }
    return people;
  });

  res.status(200).json({ success: true, data: newPeople });
});


app.delete('/api/people/:id', (req, res) => {
    const person = people.find(person => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({success: false, data: "No person find with the id: " + req.params.id});
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    res.status(200).json({success: true, data: newPeople});
});



app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send("Entre com nome valido!");
  }
  res.status(201).send(`Welcome ${name}`);
});

app.listen(5000, () => {
  console.log("Listen to the port 5000");
});
