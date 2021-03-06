import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import routes from './routes';
import './mongodb-connection';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

const __dirname = dirname(fileURLToPath(import.meta.url)); // eslint-disable-line no-underscore-dangle
const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

if (process.env.NODE_ENV === 'production')
  app.use(express.static(CLIENT_BUILD_PATH));

app.use('/api', routes);

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
  } else {
    res.status(200).send('API gateway in development');
  }
});

app.listen(PORT, () =>
  console.log(`env: ${process.env.NODE_ENV}\nServer running on port: ${PORT}`)
);

export default app;
