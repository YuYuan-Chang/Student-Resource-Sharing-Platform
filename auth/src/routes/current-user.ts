import express from 'express';

const router = express.Router();

// A functino handling get request
router.get('/api/users/currentuser', (req, res) => {
    res.send("Hi there, this is current user");
});

export {router as currentUserRouter};