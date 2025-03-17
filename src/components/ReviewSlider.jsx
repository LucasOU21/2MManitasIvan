import React, { useState, useEffect, useMemo } from 'react';
import { Star } from 'lucide-react';
import { getReviews } from '../firebase/reviewsService'; // Update path if needed

// Sample reviews data as fallback if Firebase isn't available
const initialReviews = [
  {
    id: 1,
    name: "María García",
    rating: 5,
    text: "Excelente servicio. Vinieron el mismo día que les llamé y solucionaron el problema de fontanería rápidamente. Muy profesionales.",
    date: "10-03-2025"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    rating: 5,
    text: "Contratamos sus servicios para montar muebles de Ikea y lo hicieron perfecto. Puntuales y el precio muy razonable.",
    date: "05-03-2025"
  },
  {
    id: 3,
    name: "Laura Martínez",
    rating: 4,
    text: "Buen servicio de electricidad. Resolvieron el problema con profesionalidad y limpieza. Recomendable.",
    date: "01-03-2025"
  },
  {
    id: 4,
    name: "Javier López",
    rating: 5,
    text: "La reforma del baño quedó increíble. Terminaron en el plazo previsto y con un acabado perfecto.",
    date: "25-02-2025"
  },
  {
    id: 5,
    name: "Ana Sánchez",
    rating: 5,
    text: "Servicio de pintura excepcional. Transformaron completamente mi salón, muy atentos a los detalles.",
    date: "18-02-2025"
  }
];

const ReviewSlider = ({ onReviewSectionClick }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get the 5 best reviews for the slider
  const topReviews = useMemo(() => {
    // Sort by rating (highest first) and take only 5
    return [...reviews]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  }, [reviews]);

  // Load reviews from Firebase on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const firebaseReviews = await getReviews();
        
        // If we get data from Firebase, combine with initial reviews
        if (firebaseReviews && firebaseReviews.length > 0) {
          // Get the best ratings from both Firebase and initial reviews
          const combinedReviews = [...initialReviews, ...firebaseReviews];
          setReviews(combinedReviews);
        }
      } catch (error) {
        console.error("Error fetching reviews for slider:", error);
        // Keep initial reviews as fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Function to display rating stars - memoized for better performance
  const renderStars = useMemo(() => {
    const starsCache = {};
    
    return (rating) => {
      // Return from cache if we've already rendered this rating
      if (starsCache[rating]) return starsCache[rating];
      
      const stars = Array(5).fill(0).map((_, index) => (
        <Star 
          key={index} 
          size={16} 
          className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
        />
      ));
      
      // Cache the result
      starsCache[rating] = stars;
      return stars;
    };
  }, []);

  // Auto rotate reviews every 5 seconds
  useEffect(() => {
    if (isLoading || topReviews.length === 0) return;

    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % topReviews.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isLoading, topReviews.length]);

  // Prevent errors if no reviews available
  if (isLoading) {
    return (
      <div className="flex flex-col">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-md flex items-center justify-center h-40">
          <div className="w-6 h-6 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (topReviews.length === 0) {
    return (
      <div className="flex flex-col">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-md relative overflow-hidden mx-auto">
          <p className="text-gray-700 italic">No hay reseñas disponibles todavía. ¡Sé el primero en dejar tu opinión!</p>
        </div>
      </div>
    );
  }

  const currentReview = topReviews[currentReviewIndex];

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-md relative overflow-hidden mx-auto">
        {/* Fixed height content container to prevent layout shifts */}
        <div className="h-40 flex flex-col justify-between">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="flex mb-2">
              {renderStars(currentReview.rating)}
            </div>
            
            {/* Content with ellipsis for overflow */}
            <div className="overflow-hidden" style={{ maxHeight: "5rem" }}>
              <p className="text-gray-700 italic mb-2 line-clamp-3">"{currentReview.text}"</p>
            </div>
            
            <p className="text-gray-900 font-medium mt-auto">- {currentReview.name}</p>
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {topReviews.map((_, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 rounded-full ${index === currentReviewIndex ? 'bg-teal-500' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Button positioned on the right side */}
      <div className="flex justify-end mx-auto w-full max-w-md">
        <button 
          onClick={onReviewSectionClick}
          className="text-white border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-teal-500 transition-colors duration-300"
        >
          Ver todas las reseñas
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;