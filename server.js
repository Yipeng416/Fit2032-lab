import express from 'express';
import cors from 'cors';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import admin from 'firebase-admin';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
initializeApp({
  credential: admin.credential.applicationDefault()
});

const db = getFirestore();

// Example route to get books from Firestore
app.get('/books', async (req, res) => {
  try {
    const booksRef = db.collection('books');
    const snapshot = await booksRef.get();
    
    if (snapshot.empty) {
      return res.status(404).send('No books found');
    }

    let books = [];
    snapshot.forEach(doc => {
      books.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).send('Error retrieving books: ' + error.message);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
