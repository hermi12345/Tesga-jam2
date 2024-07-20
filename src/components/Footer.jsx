import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-black-700 sm:flex justify-between mx-auto">
        {/* Products Section */}
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-green-700 font-bold">Products</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-green-700" href="/">Home</a>
            </li>
            <li className="my-2">
              <a className="hover:text-green-700" href="/contact">Contact</a>
            </li>
            <li className="my-2">
              <a className="hover:text-green-700" href="/about">About</a>
            </li>
            <li className="my-2">
              <a className="hover:text-green-700" href="/testimonials">Testimonials</a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="p-5 sm:w-7/12 border-r text-center">
          <form className="flex items-center justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="py-2 px-4 mr-2 w-3/4 focus:outline-none focus:ring focus:border-indigo-600 border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-black focus:outline-none focus:ring focus:border-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Us Section */}
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-green-700 font-bold">Contact Us</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-green-700" href="/contact">Ethiopia, Floor A, Addis Ababa</a>
            </li>
            <li className="my-2">
              <a className="hover:text-green-700" href="mailto:contact@company.com">contact@company.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons and Copyright */}
      <div className="flex py-5 mx-auto text-gray-800 text-sm items-center justify-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex flex-row">
          <a href="#" className="w-6 mx-1 hover:text-green-700">
            {/* You can add an icon here if needed */}
          </a>
          <a href="#" className="w-6 mx-1 hover:text-green-700">
            {/* Another icon */}
          </a>
          <a href="#" className="w-6 mx-1 hover:text-green-700">
            {/* Another icon */}
          </a>
          <a href="#" className="w-6 mx-1 hover:text-green-700">
            {/* Another icon */}
          </a>
        </div>
        <div className="my-5">&copy; Copyright 2024. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;