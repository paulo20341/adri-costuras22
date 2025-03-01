import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, price }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col h-full">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <p className="text-rose-600 font-semibold">{price}</p>
        <a 
          href="#contato" 
          className="mt-4 inline-block bg-rose-100 hover:bg-rose-200 text-rose-700 font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;