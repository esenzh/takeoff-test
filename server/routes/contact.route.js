const { Router } = require("express");
const Contact = require("../models/Contact");
const sessionChecker = require("../middleware/auth");

const router = Router();

router
  .get("/contacts", sessionChecker, async (req, res) => {
    try {
      const userID = req.session.user._id;
      const contacts = await Contact.find({ author: userID });
      res.status(200).json({ contacts });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  })
  .post("/contacts", sessionChecker, async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      const { user } = req.session;

      const contact = new Contact({ name, email, phone, author: user._id });
      await contact.save();
      res.status(201).json({ message: "Contact is created", contact });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  })
  .put("contacts", sessionChecker, async (req, res) => {
    try {
      const { id, name, email, phone } = req.body;
      await Contact.updateOne({ _id: id }, { $set: { name, email, phone } });
      res.status(200).json({ message: "Contact is updated" });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  })
  .delete("contacts", sessionChecker, async (req, res) => {
    try {
      const { id } = req.body;
      await Contact.deleteOne({ _id: id });
      res.status(200).json({ message: "Contact deleted" });
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  });

module.exports = router;
