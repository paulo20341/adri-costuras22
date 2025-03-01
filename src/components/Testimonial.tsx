import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, text, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <p className="font-medium text-gray-800">{name}</p>
    </div>
  );
};

export default Testimonial;