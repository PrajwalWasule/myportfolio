import React, { useState } from 'react';

const Home = () => {
  // Track the current index of the image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources
  const images = [
    'https://images.unsplash.com/photo-1678939026247-e0d9c114f488?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMGJ1aWxkaW5nJTIwNGslMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D',
    'https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?cs=srgb&dl=pexels-zhangkaiyv-1139556.jpg&fm=jpg',
    'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?cs=srgb&dl=pexels-lkloeppel-466685.jpg&fm=jpg',
  ];

  // Function to scroll left (previous image)
  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to scroll right (next image)
  const scrollRight = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
    <div className="flex flex-col items-center justify-start">
      {/* Image Section */}
      <div className="relative w-full h-screen">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        >
          &#8592;
        </button>

        <div className="w-full h-full flex justify-center items-center">
          {/* Display the current image */}
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        >
          &#8594;
        </button>
      </div>
      <div className="w-full bg-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
        
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Water Proofing</h3>
              <p className="text-black-900">
                We emphasize the need of adopting the best methodology for making the structure water resistant and engage technically sound and highly professional agencies to handle the projects who guarantee the treatment done.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Pre-finishes & Finishes</h3>
              <p className="text-black-900">
                Our team of professionals follow various parameters so that a flawless masonry, plastering, tiling and granite finishes gets delivered using highly precision tool.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Interior Works</h3>
              <p className="text-black-900">
                We engage specialized teams to handle interior related works such as fixed furniture, panelling works, false ceiling and wall finishes to give optimized end finish.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Hard & Soft Scape Works</h3>
              <p className="text-black-900">
                With the myriad of designs and increasing complexity, a keen sense to integrate various components becomes important. Our in-depth knowledge helps to ensure that the optimal conditions are met for a beautiful landscape.
              </p>
            </div>
            {/* Service 5 */}
            <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">MEP Services</h3>
              <p className="text-black-900">
                Mechanical, electrical, plumbing and firefighting systems are executed with utmost accuracy and perfection.
              </p>
            </div>
            <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">MEP Services</h3>
              <p className="text-black-900">
                Mechanical, electrical, plumbing and firefighting systems are executed with utmost accuracy and perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About Section Below Image */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 md:py-12 mt-4 relative space-y-6 md:space-y-0 md:space-x-6">
  {/* Left corner for the text */}
  <div className="w-full md:w-1/2 text-left ml-30 md:ml-28">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT RPR CIVIL CONTRACTOR</h2>
    <h3 className="text-lg md:text-xl font-semibold mb-4 italic">Masters of consistency and quality</h3>
    <p className="text-sm md:text-lg text-black-700">
      RPR Civil Contractor is a leading Nagpur-based construction company. Our head office is located in Nagpur. With the best 
      workmanship and efficient supervision, we continuously strive to attain top-quality construction. Our projects range from 
      commercial, residential, institutional, industrial, and healthcare sectors, but are not limited to the same. With continuous
       efforts, hard work, and excellence in providing services, RPR Civil Contractor has now reached great heights, growing into
        one of the best construction companies in Nagpur.
    </p>
    <button
      onClick={() => (window.location.href = "/about")}
      className="mt-4 bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded-md"
    >
      Read More
    </button>
    <br />
</div>


  {/* Right corner for the image */}
  <div className="w-full md:w-1/3 -ml-32 md:-ml-40">
    <img
        src="https://www.kkcivilcontractor.com/wp-content/uploads/2019/09/ABout-kk.png"
        alt="About Image"
        className="w-full h-auto object-cover rounded-lg shadow-md"
    />
</div>

</div>

      <br></br> <br></br> 
      <br></br> <br></br> <br></br> <br></br> 
      <div className="w-full bg-gray-300 py-16">
  <div className="max-w-6xl mx-auto px-8 text-center">
    <h2 className="text-3xl font-bold mb-8">CLIENT'S SAY</h2>

    {/* Client Testimonial 1 */}
    <div className="bg-gray-400 p-6 rounded-lg shadow-lg mb-8">
      <p className="text-lg text-black-900 italic mb-4">
        "You have shown beyond question that you are a civil contractor par excellence, who has the integrity to match that of the structures you create. Your commitment to quality and personal involvement in the work undertaken is what makes you shine out in this challenging field. I assure you that you will always be the first choice of Civil Contractor for us for any project we undertake - now and in the future."
      </p>
      <h3 className="text-xl font-semibold mb-4">Mr. Niraj Ahuja</h3>
      <p className="text-black-700">Director</p>
      <p className="text-black-700">Ahuja Group, Nagpur</p>
    </div>

    {/* Client Testimonial 2 */}
    <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
      <p className="text-lg text-black-900 italic mb-4">
        "Working with RPR Civil Contractor has been a seamless and satisfying experience. The team’s attention to detail, commitment to deadlines, and dedication to delivering superior quality are commendable. We are extremely pleased with the results and look forward to collaborating on future projects."
      </p>
      <h3 className="text-xl font-semibold mb-4">Ms. Priya Sharma</h3>
      <p className="text-black-700">CEO</p>
      <p className="text-black-700">Sharma Infrastructure Pvt. Ltd.</p>
    </div>
  </div>
</div>


      {/* Our Services Section */}
     
    </div>
    </div>
  );
};

export default Home;
