module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/postuserdata', notes.create);

    // Retrieve all Notes
    app.get('/getuserdata', notes.findAll);

    // Retrieve a single Note with noteId
    app.post('/verify', notes.findOne);

    app.post('/getsingleuserdata', notes.findSingleUserData);

    // Update a Note with noteId
    app.put('/updateuserdata/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/deleteuser/:noteId', notes.delete);
}