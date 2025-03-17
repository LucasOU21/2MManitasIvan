import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Star, ChevronUp, ChevronDown, Send, AlertTriangle, Filter, ArrowUpDown } from 'lucide-react';
import { getReviews, addReview } from '../firebase/reviewsService'; // Update path if needed

// Initial sample reviews - these will show until Firebase data loads
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
  },
  {
    id: 6,
    name: "Miguel Torres",
    rating: 4,
    text: "Muy satisfecho con la instalación del plato de ducha. Trabajo limpio y bien ejecutado.",
    date: "12-02-2025"
  },
  {
    id: 7,
    name: "Elena Navarro",
    rating: 5,
    text: "Contratamos su servicio de mudanzas y fueron extremadamente cuidadosos con nuestros muebles. Totalmente recomendable.",
    date: "05-02-2025"
  },
  {
    id: 8,
    name: "Pablo Soto",
    rating: 3,
    text: "Servicio correcto. Cumplieron con lo acordado aunque tardaron un poco más de lo previsto.",
    date: "08-02-2025"
  }
];

const Reviews = () => {
  const [allReviews, setAllReviews] = useState(initialReviews);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    text: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('newest');
  const [ratingFilter, setRatingFilter] = useState(0); // 0 means show all ratings
  const reviewsRef = useRef(null);

  // Load reviews from Firebase on component mount
  useEffect(() => {
    const loadFirebaseReviews = async () => {
      try {
        setIsLoading(true);
        const firebaseReviews = await getReviews();
        
        // If we get data from Firebase, combine with initial reviews
        if (firebaseReviews && firebaseReviews.length > 0) {
          setAllReviews([...initialReviews, ...firebaseReviews]);
        }
      } catch (error) {
        console.error("Error fetching reviews from Firebase:", error);
        // Keep initial reviews if Firebase fetch fails
      } finally {
        setIsLoading(false);
      }
    };

    loadFirebaseReviews();
  }, []);

  // Apply filters whenever allReviews or filter settings change
  useEffect(() => {
    let result = [...allReviews];
    
    // Apply rating filter
    if (ratingFilter > 0) {
      result = result.filter(review => review.rating === ratingFilter);
    }
    
    // Apply sort order
    switch (activeFilter) {
      case 'newest':
        // Convert DD-MM-YYYY to YYYY-MM-DD for proper sorting
        result.sort((a, b) => {
          const dateA = convertDateForSorting(a.date);
          const dateB = convertDateForSorting(b.date);
          return dateB.localeCompare(dateA);
        });
        break;
      case 'oldest':
        result.sort((a, b) => {
          const dateA = convertDateForSorting(a.date);
          const dateB = convertDateForSorting(b.date);
          return dateA.localeCompare(dateB);
        });
        break;
      case 'highest':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        result.sort((a, b) => a.rating - b.rating);
        break;
      default:
        // Default to newest
        result.sort((a, b) => {
          const dateA = convertDateForSorting(a.date);
          const dateB = convertDateForSorting(b.date);
          return dateB.localeCompare(dateA);
        });
    }
    
    setFilteredReviews(result);
  }, [allReviews, activeFilter, ratingFilter]);

  // Helper function to convert DD-MM-YYYY to YYYY-MM-DD for sorting
  const convertDateForSorting = (dateString) => {
    if (!dateString || typeof dateString !== 'string') return '';
    
    const parts = dateString.split('-');
    if (parts.length !== 3) return '';
    
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  // Memoized rating statistics calculation to avoid recalculating on every render
  const ratingStats = useMemo(() => {
    const stats = {
      average: 0,
      count: allReviews.length,
      distribution: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      }
    };

    // Calculate distribution
    allReviews.forEach(review => {
      if (review.rating >= 1 && review.rating <= 5) {
        stats.distribution[review.rating]++;
      }
    });

    // Calculate average rating
    const totalRating = allReviews.reduce((sum, review) => sum + (review.rating || 0), 0);
    stats.average = allReviews.length > 0 ? totalRating / allReviews.length : 0;

    return stats;
  }, [allReviews]);

  // Memoized percentage calculations
  const ratingPercentages = useMemo(() => {
    const percentages = {};
    for (let i = 1; i <= 5; i++) {
      percentages[i] = allReviews.length > 0 
        ? (ratingStats.distribution[i] / allReviews.length) * 100 
        : 0;
    }
    return percentages;
  }, [ratingStats, allReviews.length]);

  // Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    return () => {
      if (reviewsRef.current) {
        observer.unobserve(reviewsRef.current);
      }
    };
  }, []);

  // Review validation function
  const validateReview = (review) => {
    if (review.name.trim() === '') {
      return { valid: false, message: 'Por favor ingrese su nombre' };
    }
    if (review.rating === 0) {
      return { valid: false, message: 'Por favor seleccione una valoración' };
    }
    if (review.text.trim() === '') {
      return { valid: false, message: 'Por favor escriba su opinión' };
    }
    return { valid: true };
  };

  // Handle review submission - optimized with Firebase
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    
    // Validate form inputs
    const validation = validateReview(newReview);
    if (!validation.valid) {
      setSubmitMessage({
        type: 'error',
        text: validation.message
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      // Create review object to send to Firebase
      const reviewData = {
        name: newReview.name,
        rating: newReview.rating,
        text: newReview.text
      };
      
      // Add review to Firebase
      const savedReview = await addReview(reviewData);
      
      // Update local state with the new review at the beginning for "newest first"
      setAllReviews(prevReviews => [savedReview, ...prevReviews]);
      
      // Reset form
      setNewReview({ name: '', rating: 0, text: '' });
      
      // Show success message
      setSubmitMessage({
        type: 'success',
        text: '¡Gracias por su opinión! Ha sido publicada correctamente.'
      });
    } catch (error) {
      console.error("Error submitting review:", error);
      setSubmitMessage({
        type: 'error',
        text: 'Ha ocurrido un error al publicar su opinión. Por favor, inténtelo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to handle filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFilterOpen(false);
  };

  // Function to handle rating filter changes
  const handleRatingFilterChange = (rating) => {
    setRatingFilter(rating === ratingFilter ? 0 : rating); // Toggle if clicking the same rating
  };

  // Function to render the star rating input
  const renderStarInput = () => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setNewReview({ ...newReview, rating: star })}
            className="focus:outline-none p-1"
          >
            <Star
              size={24}
              className={star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          </button>
        ))}
      </div>
    );
  };

  // Function to render stars for display - memoized for better performance
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

  return (
    <section id="reviews" ref={reviewsRef} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold text-center mb-8">Opiniones de Nuestros Clientes</h2>
          
          {/* Rating Summary */}
          <div className="max-w-3xl mx-auto mb-8 bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Average Rating */}
              <div className="text-center md:border-r md:border-gray-200">
                <div className="text-4xl font-bold text-gray-800 mb-1">{ratingStats.average.toFixed(1)}</div>
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.round(ratingStats.average) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Basado en {ratingStats.count} opiniones</p>
              </div>
              
              {/* Rating Distribution */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-base font-semibold mb-2">Distribución de valoraciones</h3>
                {[5, 4, 3, 2, 1].map(rating => (
                  <div 
                    key={rating} 
                    className={`flex items-center mb-1 cursor-pointer ${ratingFilter === rating ? 'bg-gray-100 rounded' : ''}`}
                    onClick={() => handleRatingFilterChange(rating)}
                  >
                    <div className="flex items-center w-12">
                      <span className="mr-1 text-sm">{rating}</span>
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="flex-1 h-3 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-500 rounded-full"
                        style={{ width: `${ratingPercentages[rating]}%` }}
                      ></div>
                    </div>
                    <div className="w-16 text-right text-xs text-gray-600">
                      {ratingStats.distribution[rating]} ({ratingPercentages[rating].toFixed(0)}%)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Review Form */}
          <div className="max-w-xl mx-auto mb-8 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-3">Deje su opinión</h3>
            
            {submitMessage.text && (
              <div className={`mb-3 p-2 rounded-md text-sm ${
                submitMessage.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}>
                {submitMessage.type === 'error' ? (
                  <div className="flex items-center">
                    <AlertTriangle size={14} className="mr-1" />
                    {submitMessage.text}
                  </div>
                ) : (
                  submitMessage.text
                )}
              </div>
            )}
            
            <form onSubmit={handleSubmitReview}>
              <div className="mb-3">
                <label className="block text-gray-700 mb-1 text-sm">Su valoración</label>
                {renderStarInput()}
              </div>
              
              <div className="mb-3">
                <label htmlFor="name" className="block text-gray-700 mb-1 text-sm">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
                  placeholder="Su nombre"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="review" className="block text-gray-700 mb-1 text-sm">Su opinión</label>
                <textarea
                  id="review"
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
                  rows="3"
                  placeholder="Cuéntenos su experiencia con nuestro servicio"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`bg-teal-500 hover:bg-teal-600 text-white px-3 py-1.5 rounded-lg flex items-center text-sm ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={14} className="mr-1" />
                    Enviar opinión
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Reviews List with Loading State and Filters */}
          <div className="max-w-3xl mx-auto">
            {/* Filter Controls */}
            <div className="bg-white rounded-lg shadow-md p-3 mb-4 flex flex-wrap items-center justify-between">
              <div className="flex items-center">
                <Filter size={16} className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-700 mr-2">Filtrar por:</span>
                
                {/* Star Rating Filter Buttons */}
                <div className="flex space-x-1 mr-2">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <button
                      key={rating}
                      onClick={() => handleRatingFilterChange(rating)}
                      className={`px-2 py-1 rounded-full text-xs flex items-center ${
                        ratingFilter === rating 
                          ? 'bg-teal-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {rating}
                      <Star size={10} className={`ml-0.5 ${ratingFilter === rating ? 'fill-white text-white' : 'fill-yellow-400 text-yellow-400'}`} />
                    </button>
                  ))}
                </div>
                
                {ratingFilter > 0 && (
                  <button 
                    onClick={() => setRatingFilter(0)}
                    className="text-xs text-teal-500 underline hover:text-teal-700"
                  >
                    Limpiar filtro
                  </button>
                )}
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative mt-2 sm:mt-0">
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center text-sm px-3 py-1.5 border border-gray-300 rounded-md bg-white"
                >
                  <ArrowUpDown size={14} className="mr-2 text-gray-500" />
                  <span>
                    {activeFilter === 'newest' ? 'Más recientes' : 
                     activeFilter === 'oldest' ? 'Más antiguos' : 
                     activeFilter === 'highest' ? 'Mayor puntuación' : 
                     'Menor puntuación'}
                  </span>
                </button>
                
                {filterOpen && (
                  <div className="absolute right-0 sm:right-0 left-0 sm:left-auto mt-1 w-48 bg-white shadow-lg rounded-md z-10 py-1 text-sm">
                    <button 
                      onClick={() => handleFilterChange('newest')}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${activeFilter === 'newest' ? 'bg-gray-100' : ''}`}
                    >
                      Más recientes
                    </button>
                    <button 
                      onClick={() => handleFilterChange('oldest')}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${activeFilter === 'oldest' ? 'bg-gray-100' : ''}`}
                    >
                      Más antiguos
                    </button>
                    <button 
                      onClick={() => handleFilterChange('highest')}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${activeFilter === 'highest' ? 'bg-gray-100' : ''}`}
                    >
                      Mayor puntuación
                    </button>
                    <button 
                      onClick={() => handleFilterChange('lowest')}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${activeFilter === 'lowest' ? 'bg-gray-100' : ''}`}
                    >
                      Menor puntuación
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {isLoading ? (
              <div className="text-center py-8">
                <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando opiniones...</p>
              </div>
            ) : (
              <>
                <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expanded ? 'max-h-full' : 'max-h-80'}`}>
                  {filteredReviews.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No se encontraron reseñas con los filtros seleccionados.
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {filteredReviews.map((review) => (
                        <div key={review.id} className="p-3">
                          <div className="flex items-center mb-1">
                            <div className="flex mr-2">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700 mb-1 text-sm">"{review.text}"</p>
                          <p className="text-gray-900 text-sm font-medium">- {review.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {filteredReviews.length > 3 && (
                  <div className="text-center mt-3">
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="inline-flex items-center text-teal-500 hover:text-teal-700 text-sm"
                    >
                      {expanded ? (
                        <>
                          <ChevronUp size={16} className="mr-1" />
                          Ver menos opiniones
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} className="mr-1" />
                          Ver más opiniones
                        </>
                      )}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;