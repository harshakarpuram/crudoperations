const Note = require('../models/note.model.js');

// Create and Save a New User
exports.create = (req, res) => {
    // Validate request
    console.log(req.body)
    if(!req.body) {
        return res.status(400).send({
            message: "User Details content can not be empty"
        });
    }

    // Create a User
    const note = new Note({
        username: req.body.username, 
        password: req.body.password,
        url: req.body.url,
        mail: req.body.mail,
        gender: req.body.gender,

    });

    // Save User in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    Note.find()
    .then(userData => {
        res.send(userData);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Users Data."
        });
    });
};

// Find a single User with a Id
exports.findOne = (req, res) => {
    Note.find({username:req.body.username})
    .then(note => {
        console.log(note)
        if(note.length===0) {
            console.log('note')
            return res.send("Invalid Username or Password");            
        }
        note.forEach((value)=>{
            if(value.password == req.body.password){
                res.send(req.body.username);
            }
            else{
                res.send("Invalid Username or Password");
            }
        })
      
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " +req.body.username
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + req.body.username
        });
    });
};




// Find a single user with a userid
exports.findSingleUserData = (req, res) => {
    console.log(req.body.id)
    Note.find({_id:req.body.id})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "User not found with id " + req.body.username
            });            
        }
      res.send(note)
      
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " +req.body.username
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + req.body.username
        });
    });
};
// Update a user details identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "User Details content can not be empty"
        });
    }   

    // Find user and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        _id:req.body.id,
        username: req.body.username, 
        password: req.body.password,
        url: req.body.url,
        mail: req.body.mail,
        gender: req.body.gender,
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "User not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating User with id " + req.params.noteId
        });
    });
};

// Delete a note with the specified id in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        console.log(note)
        if(!note) {
            return res.status(404).send({
                message: "User not found with id " + req.params.noteId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.noteId
        });
    });
};
