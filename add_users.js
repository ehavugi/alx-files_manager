import dbClient from './utils/db';

const user = {
  username: 'exampleUser2',
  email: 'user@example.com',
};

async function insertUser() {
  const db = dbClient.client.db();
  const usersCollection = db.collection('files');
  await usersCollection.insertOne(user); // insert the user document
}

insertUser()
  .then(() => {
    console.log('User inserted successfully');
  })
  .catch((error) => {
    console.error('Error inserting user:', error);
  });
