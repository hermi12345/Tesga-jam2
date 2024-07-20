import React from 'react';
import companyHistoryImage from '../components/img/p6.jpg'; // Adjust the path as per your project structure

const Company = () => {
  return (
    <div id="about" className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
  
          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
            <header className="bg-green-500 text-white text-center py-10 rounded-t-lg ">
                <h1 className="text-4xl font-bold mt-16">Company History</h1>
              </header>

              <section className="py-12 px-4">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900">About Tsega Jam</h2>
                  <p className="mt-4 text-gray-700">
                    Tsega Jam specializes in crafting delightful cactus jams and refreshing snack juices, inspired by the rich flavors of the desert. Established with a passion for quality and taste, we are committed to bringing you the essence of natures bounty in every jar and bottle.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:overflow-hidden">
        <img
          className="h-full w-full object-cover object-center"
          src={companyHistoryImage} // Using the imported image variable here
          alt="Company History"
        />
      </div>
    </div>
  );
}

export default Company;