import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/sessions-analytics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection established'))
  .catch((error) => console.error(error));

