import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<Product> = ({ id, title, price, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-500">${price.toFixed(2)}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;
