import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Star className="w-4 h-4 text-yellow-400" />
          {product.rating} ({product.reviews} reviews)
        </div>
        <div className="text-gray-900 text-xl font-bold">${product.price}</div>
        {product.originalPrice && (
          <div className="text-sm line-through text-gray-500">${product.originalPrice}</div>
        )}
        <div className="mt-4 flex justify-between">
          <button className="bg-yellow-400 px-4 py-2 text-sm font-bold rounded hover:bg-yellow-300">
            <ShoppingCart className="inline-block mr-2 w-4 h-4" />
            Agregar
          </button>
          <button className="text-gray-500 hover:text-red-500">
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
