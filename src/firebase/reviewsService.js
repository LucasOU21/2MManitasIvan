// src/firebase/reviewsService.js
import { db } from './config';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  Timestamp 
} from 'firebase/firestore';

const REVIEWS_COLLECTION = 'reviews';

// Get all reviews
export const getReviews = async () => {
  try {
    const reviewsRef = collection(db, REVIEWS_COLLECTION);
    const q = query(reviewsRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const reviews = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Convert Firestore Timestamp to JS Date
      const dateObj = data.date ? data.date.toDate() : new Date();
      
      // Format as DD-MM-YYYY
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const year = dateObj.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;
      
      reviews.push({
        id: doc.id,
        ...data,
        date: formattedDate // Use the dd-mm-yyyy format
      });
    });
    
    return reviews;
  } catch (error) {
    console.error("Error getting reviews: ", error);
    throw error;
  }
};

// Add a new review
export const addReview = async (reviewData) => {
  try {
    const reviewWithDate = {
      ...reviewData,
      date: Timestamp.now()
    };
    
    const docRef = await addDoc(
      collection(db, REVIEWS_COLLECTION), 
      reviewWithDate
    );
    
    // Format current date as DD-MM-YYYY for immediate display
    const dateObj = new Date();
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    
    return {
      id: docRef.id,
      ...reviewData,
      date: formattedDate // Return with dd-mm-yyyy format
    };
  } catch (error) {
    console.error("Error adding review: ", error);
    throw error;
  }
};