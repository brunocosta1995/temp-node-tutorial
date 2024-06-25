const express = require("express");
const {
  getPeople,
  createPeople,
  createPeoplePostman,
  updatePeople,
  deletePeople,
} = require("../controller/people");

const router = express.Router();

//primeira opção de configuração das routes

// router.get("/", getPeople);
// router.post("/", createPeople);
// router.post("/postman", createPeoplePostman);
// router.put("/:id", updatePeople);
// router.delete("/:id", deletePeople);

//alternativa para configurar a routes
router.route('/').get(getPeople).post(createPeople);
router.route('/postman').post(createPeoplePostman);
router.route('/:id').put(updatePeople).delete(deletePeople);

module.exports = router;
