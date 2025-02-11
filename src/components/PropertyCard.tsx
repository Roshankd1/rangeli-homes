import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={handleViewDetails}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-700" onClick={handleViewDetails}>
          {property.title}
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">${property.price}/night</span>
          <button 
            onClick={handleViewDetails}
            className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;