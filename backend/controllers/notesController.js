// controllers/notesController.js

exports.getNotes = (req, res) => {
    res.json({ message: "GET all notes" });
};

exports.createNote = (req, res) => {
    const note = req.body;
    res.json({ message: "Note created", note });
};
