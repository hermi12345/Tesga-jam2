import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo3 from './img/p1.jpg';
import logo5 from './img/p3.jpg';
import logo6 from './img/p4.jpg';
import logo7 from './img/p5.jpg';

const Products = () => {
  const [products] = useState([
    { id: 1, image: logo3, category: 'Snack', name: 'Prickly Pear Candy', price: '$36.00', description: 'Prickly pear candy captures the essence of the desert with its sweet, tangy flavor reminiscent of berries and melons.' },
    { id: 2, image: logo7, category: 'Snack', name: 'Cactus Fruit | Prickly Pear Gum Drops ', price: '$45.00', description: 'Cactus Fruit | Prickly Pear Gum Drops offer a delightful burst of flavor, showcasing the unique taste of prickly pear cactus fruit.' },
    { id: 3, image: logo5, category: 'Juice', name: 'Citrus Cactus Juice ', price: '$45.00', description: 'Citrus Cactus Juice blends the zesty essence of citrus fruits with the refreshing taste of cactus water. ' },
    { id: 4, image: logo6, category: 'Juice', name: ' Cactus Pineapple Smoothie', price: '$45.00', description: 'The Cactus Pineapple Smoothie combines the exotic flavors of prickly pear cactus with the tropical sweetness of pineapple.' },
  ]);

  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      <div className="w-full text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <p className="text-gray-700">Explore the exotic charm of our handpicked cacti, meticulously curated to add a touch of desert allure to your home or garden</p>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {products.map(product => (
         <div key={product.id} className="flex-shrink-0 relative overflow-hidden bg-green-500 rounded-lg shadow-lg group">
           <Link to={`/product/${product.id}`} className="block w-full h-full">
             <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
               viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
               <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
               <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
             </svg>
             <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform" style={{ height: '300px' }}>
               <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                 style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
               </div>
               <img src={product.image} className="object-cover w-full h-full rounded-sm" alt="" />
             </div>
             <div className="relative text-white px-6 pb-6 mt-6">
               <span className="block opacity-75 -mb-1">{product.category}</span>
               <div className="flex justify-between items-center mt-1">
                 <span className="block font-semibold text-xl">{product.name}</span>
                 <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{product.price}</span>
               </div>
             </div>
           </Link>
         </div>
       ))}
     </div>
     </div>
   );
 }
 
 export default Products;