const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');
connectToMongo();
const app = express();
app.use(cors());
const port = process.env.PORT  || 5000 ;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hi i am Home Page")
})
app.use('/api/notes', require('./routes/hobbies'));

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
})
/* 
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

connect();

const db = client.db('mydatabase');
const collection = db.collection('mycollection');

app.post('/api/create', async (req, res) => {
  try {
    const result = await collection.insertOne(req.body);
    res.send(result.ops[0]);
  } catch (err) {
    console.error(err);
  }
});

app.get('/api/read', async (req, res) => {
  try {
    const result = await collection.find().toArray();
    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

app.put('/api/update/:id', async (req, res) => {
  try {
    const result = await collection.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { returnOriginal: false }
    );
    res.send(result.value);
  } catch (err) {
    console.error(err);
  }
});

app.delete('/api/delete/:id', async (req, res) => {
  try {
    const result = await collection.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

*/
