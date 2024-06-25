const express = require("express");
const { people } = require("../data");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).json({ success: true, data: people });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(401)
      .json({ success: false, msg: "Entre com um nome adequado" });
  }

  res.status(201).json({ success: true, person: name });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).json({ success: false, msg: "entre com um nome" });
  }
  const data = { id: people.length + 1, newName: name };
  res.status(201).json({ success: true, data: [...people, data] });
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({
        success: false,
        data: "No person find with the id: " + req.params.id,
      });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newPeople });
});


module.exports = router;