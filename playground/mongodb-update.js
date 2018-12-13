//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err)
  {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');
  const db = client.db('TodoApp');

  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c1215286153aa5445d500a8')
  },{
    $set: {
      completed: true
    }
  },{
      returnOriginal: false
    }).then((result) =>{
      console.log(result);
    });

  //client.close();

});
