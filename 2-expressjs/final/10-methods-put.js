const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).json({ success: false, msg: "entre com um nome" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).json({ success: false, msg: "entre com um nome" });
  }
  const data = { id: people.length + 1, newName: name };
  res.status(201).json({ success: true, data: [...people, data] });
});

app.put("/api/people/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with the id of ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
        person.name = name;
    }
    return person;
  })

  res.status(200).json({success: true, data: newPeople});

});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Entre com um nome");
});

app.listen(5000, () => {
  console.log("Listen to the port 5000...");
});
