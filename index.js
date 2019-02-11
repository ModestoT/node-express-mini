// implement your API here
const express = require('express');
const db = require('./data/db.js');

const server = express();


//middleware 
server.use(express.json());

//End-points
server.post('/api/users', (req, res) => {
    const { name, bio } = req.body;
    const newUser = { name, bio };

    if(!name || !bio){
        return res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    } 
    db
        .insert(newUser)
        .then(user => {
            res.status(201).json({ success: true, user });
        })
        .catch( err => {
            res.status(500).json({ success: false, error: "There was an error while saving the user to the database" })
        })
});

server.get('/api/users', (req, res) => {
    db
        .find()
        .then(users => {
            res.status(200).json({ success: true, users})
        })
        .catch( err => {
            res.status(500).json({ success: false, error: "The users information could not be retrieved." })
        })
})

server.listen(4000, () => {
    console.log('\n*** Running on port 4000 ***\n');
  });
