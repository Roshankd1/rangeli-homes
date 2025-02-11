import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Calendar, Wifi, Car, Coffee, Tv, ArrowLeft } from 'lucide-react';
import { properties } from '../data/properties';

const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const amenities = [
    { icon: <Wifi className="h-5 w-5" />, name: 'High-speed WiFi' },
    { icon: <Car className="h-5 w-5" />, name: 'Free parking' },
    { icon: <Coffee className="h-5 w-5" />, name: 'Coffee maker' },
    { icon: <Tv className="h-5 w-5" />, name: 'Smart TV' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Properties
        </button>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-96">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">${property.price}</div>
                <div className="text-gray-600">per night</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Bed className="h-6 w-6 text-gray-700 mr-3" />
                <div>
                  <div className="font-semibold">{property.beds} Beds</div>
                  <div className="text-sm text-gray-600">Comfortable sleeping</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Bath className="h-6 w-6 text-gray-700 mr-3" />
                <div>
                  <div className="font-semibold">{property.baths} Baths</div>
                  <div className="text-sm text-gray-600">Full bathrooms</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Square className="h-6 w-6 text-gray-700 mr-3" />
                <div>
                  <div className="font-semibold">{property.sqft} sqft</div>
                  <div className="text-sm text-gray-600">Living space</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                Experience luxury living in this beautifully appointed {property.beds}-bedroom property. 
                Located in the heart of {property.location}, this space offers modern amenities and 
                stunning views. Perfect for both short-term stays and extended visits, this property 
                combines comfort with sophistication.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    {amenity.icon}
                    <span className="ml-3 text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-8">
              <button className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;