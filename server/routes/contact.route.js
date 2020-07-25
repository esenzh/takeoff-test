const { Router } = require("express");
const Contact = require("../models/Contact");

const router = Router();

router
  .get("/contacts", async (req, res) => {
    res.json({ message: "ALL posts" });
  })
  .post("/contacts", async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      const { user } = req.session;

      const contact = new Contact({ name, email, phone, author: user._id });
      await contact.save();
      res.status(201).json({ message: "Contact created" });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  });

module.exports = router;
