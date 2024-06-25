const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(201).json({ success: true, data: people });
};

const createPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(401)
      .json({ success: false, msg: "Entre com um nome adequado" });
  }

  res.status(201).json({ success: true, person: name });
};

const createPeoplePostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).json({ success: false, msg: "entre com um nome" });
  }
  const data = { id: people.length + 1, newName: name };
  res.status(201).json({ success: true, data: [...people, data] });
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      data: "No person find with the id: " + req.params.id,
    });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
}