const { Router } = require('express');
const router = Router();
const { get, createNote, retrieveAllNotes, retrieveNote, updateNote, deleteNote } = require('../controllers/notes.controllers');

router.get('/', get);
router.get('/notes/', retrieveAllNotes);
router.get('/notes/:id', retrieveNote);
router.post('/notes/create', createNote);
router.put('/notes/edit/:id', updateNote);
router.put('/notes/delete/:id', deleteNote);

module.exports = router;