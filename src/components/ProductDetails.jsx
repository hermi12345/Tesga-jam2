import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo3 from './img/p1.jpg';
import logo5 from './img/p3.jpg';
import logo6 from './img/p4.jpg';
import logo7 from './img/p5.jpg';

const products = [
  { id: 1, image: logo3, category: 'Snack ', name:'Prickly Pear Candy', price: '$36.00', description: 'Prickly pear candy captures the essence of the desert with its sweet, tangy flavor reminiscent of berries and melons. This chewy treat, made from the prickly pear cactus fruit, showcases a vibrant pink color and is enjoyed for its unique taste and nutritional benefits, including antioxidants and vitamin C. Perfect for those seeking a taste of the Southwest in a deliciously sweet form.'



  },
  { id: 2, image: logo7, category: 'Snack ', name:  'Cactus Fruit | Prickly Pear Gum Drops ', price: '$45.00', description: 'Cactus Fruit | Prickly Pear Gum Drops offer a delightful burst of flavor, showcasing the unique taste of prickly pear cactus fruit. These chewy gum drops are known for their vibrant color and refreshing sweetness, capturing the essence of the desert landscape. Rich in antioxidants and vitamins, they provide a flavorful twist on traditional candy, perfect for those looking to savor a taste of the Southwest in every bite.' },
  { id: 3, image: logo5, category: 'Juice', name: 'Citrus Cactus Juice ', price: '$45.00', description: 'Citrus Cactus Juice blends the zesty essence of citrus fruits with the refreshing taste of cactus water. This invigorating beverage offers a tangy and hydrating experience, ideal for those seeking a tropical twist. Packed with natural vitamins and antioxidants, its a rejuvenating choice that captures the essence of sunny climates in every sip.' },
  { id: 4, image: logo6, category: 'Juice', name: ' Cactus Pineapple Smoothie', price: '$45.00', description: 'The Cactus Pineapple Smoothie combines the exotic flavors of prickly pear cactus with the tropical sweetness of pineapple. This refreshing blend offers a unique taste experience, balancing the tartness of cactus with the juicy pineapple goodness. Packed with vitamins, minerals, and natural hydration, its a perfect choice for a revitalizing drink that transports you to a sunny paradise with each sip.' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="p-4">Product not found</div>;
  }

  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img src={product.image} className="h-full w-full object-cover" alt={product.name} />
      </div>
      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">{product.name}</h2>
          <p className="mt-4">{product.description}</p>
          <div className="mt-8">
            <a href="/" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Back to Products</a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

export default ProductDetails;