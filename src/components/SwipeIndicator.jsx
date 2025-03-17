import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SwipeIndicator = () => {
  return (
    <div className="md:hidden flex justify-center items-center mt-4 mb-2 animate-pulse">
      <div className="flex items-center bg-white rounded-full shadow-md px-3 py-1">
        <ChevronLeft size={18} className="text-teal-500 mr-2" />
        <span className="text-gray-600 text-sm mx-1">Deslizar</span>
        <ChevronRight size={18} className="text-teal-500 ml-2" />
      </div>
    </div>
  );
};

export default SwipeIndicator;