const { Router } = require('express');

const router = Router();
const { rootGet, createNewNote, getAllNotes } = require('../controllers/notes.controllers');//desestructción
const { verifyToken } = require('../middlewares/jwt')

/* Peticiones GET en la raíz / */
router.get("/notes", verifyToken , getAllNotes);

router.post("/notes/add", verifyToken ,createNewNote);

// router.put("/notes/:id/edit", giveEditTaskById);

// router.post("/notes/:id/edit", editTaskById);

// router.get("/notes/:id/delete", deleteTaskById);

module.exports = router;