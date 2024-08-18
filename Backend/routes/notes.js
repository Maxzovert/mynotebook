const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//Route 1 : Get All the notes using GET "/api/notes/fetchallnotes" login require
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error");
  }
});
//Route 2 : Add a new note  using Post "/api/notes/addnnote" login require
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("discpription", "Okkey"),
  ],
  async (req, res) => {
    // Check errors
    try {
      const { title, discription, tag } = req.body;
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
      const note = new Notes({
        title,
        discription,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error");
    }
  }
);

//Route 3 : Update an existing note  using Post "/api/notes/updatenote" login require
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, discription, tag } = req.body;

  try {
    //create a new note objects
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (discription) {
      newNote.discription = discription;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //Find the note to be updated and update it

    let note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error");
  }
});

//Route 4 : delete a note  using Delete "/api/notes/deletenote" login require
router.delete("/deletenote/:id", fetchuser, async (req, res) => {

  try {
    //Find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not found");
    }

    //Allow deletion only user own this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note Deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server Error");
  }
});

module.exports = router;
