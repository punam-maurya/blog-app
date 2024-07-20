const mongoose = require('mongoose');

function dbConnection(url){

    
// Connect to MongoDB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  });
  
  // Get the default connection
  const db = mongoose.connection;
  
  // Bind connection events
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

module.exports=dbConnection;
