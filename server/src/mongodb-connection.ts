import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// const options = {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   autoIndex: false,
//   poolSize: 10,
//   bufferMaxEntries: 0,
// };

const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = process.env;

const URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

try {
  mongoose.connect(URL);
} catch (e) {
  console.error('Mongoose connection error', e);
}

const db = mongoose.connection;

db.once('open', () => {
  console.log(`MongoDB connected on ${URL}`);
});

export default db;
