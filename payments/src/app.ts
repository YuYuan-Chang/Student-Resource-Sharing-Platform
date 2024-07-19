import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
<<<<<<< HEAD
import { errorHandler, NotFoundError, currentUser } from '@rallycoding/common';
=======
import { errorHandler, NotFoundError, currentUser } from '@lawani321/common';
>>>>>>> 9ab12212f2fd6a289e10f0d5a20a414ea9e9d31b
import { createChargeRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

app.use(createChargeRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
