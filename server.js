 const express = require('express');
 const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

//THIS GOES BEFORE APP.LISTEN
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

// //SELECTED DATABASE
 mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  //useFindAndModify: false,
   useNewUrlParser: true,
   useUnifiedTopology: true,
   //useCreateIndex: true
 });

 // Use this to log mongo queries being executed!
//mongoose.set('debug', true);
app.use(require('./routes'));

 app.listen(PORT, () => console.log(`Successfully connected on localhost:${PORT}`));
