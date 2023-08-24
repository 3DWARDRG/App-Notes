const notesController = {};

notesController.get = (req, res) => {
    res.send('Hola Mundo');
};

notesController.createNote = (req, res) => {
    res.send('Crear nueva nota');
}

notesController.retrieveAllNotes = (req, res) => {
    res.send('Todas las notas');
}

notesController.retrieveNote = (req, res) => {
    res.send('Nota con id');
}

notesController.updateNote = (req, res) => {
    res.send('Actualizar nota');
}

notesController.deleteNote = (req, res) => {
    res.send('Eliminar nota');
}

module.exports = notesController;