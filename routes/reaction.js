let router = require("express").Router();
let {
  create,
  updateReaction,
  read,
  destroy,
} = require("../controllers/reaction");
const schema = require("../schemas/reaction");
const validator = require("../middlewares/validator");
const passport = require("../config/passport");
const isTheSameUser = require("../middlewares/isTheSameUser");
const model = require("../models/Reaction");

router.post("/", validator(schema), create);
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  updateReaction
);
router.get("/", read);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  isTheSameUser(model),
  destroy
); //Remueve la reacción de la pagina, no la elimina

module.exports = router;
