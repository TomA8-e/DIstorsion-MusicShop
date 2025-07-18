import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Featured/ProductCard';

const productos = [
  {
    id: 1,
    name: 'Fender Telecaster Deluxe',
    image: '/images/fenderteledelux.jpg',
    categoria: 'guitarras-electricas',
    price: 120000,
    originalPrice: 135000,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 2,
    name: 'Bajo Fender Jazz',
    image: '/images/dingwallng3.jpg',
    categoria: 'bajos',
    price: 150000,
    originalPrice: 170000,
    rating: 4.5,
    reviews: 32
  },
  {
    id: 3,
    name: 'Batería Pearl Export',
    image: '/images/bateria.jpg',
    categoria: 'percusion',
    price: 300000,
    rating: 4.3,
    reviews: 21
  }
];

const ProductList = () => {
  const { categoria } = useParams();
  const filtrados = productos.filter(p => p.categoria === categoria);

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h2 className="text-3xl text-yellow-400 mb-6 capitalize">
        {categoria.replace('-', ' ')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtrados.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;