import express from 'express';
import jwt from 'jsonwebtoken';
import { requireAuth } from '../middlewares/require-auth';

import { currentUser } from '../middlewares/current-user';

const router = express.Router();

// A functino handling get request
router.get('/api/users/currentuser', currentUser, requireAuth, (req, res) => {
    res.send("Hi there, this is current user");

    res.send({currentUser: req.currentUser || null});
});

export {router as currentUserRouter};