const About = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="p-4 sm:p-6 lg:p-20">
        {/* Background Image */}
        <img
          src="https://www.kkcivilcontractor.com/wp-content/uploads/2020/01/ABOUT-US.jpg"
          alt="Construction Image"
          className="w-full max-w-screen-2xl h-auto object-cover mx-auto"
        />

        {/* Section Title */}
        <div className="text-center mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black-800">
            ABOUT RPR CIVIL CONTRACTOR
          </h2>
        </div>

        {/* Three Boxes */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            "Each text box will display a different paragraph, making them distinct. Let me know if you need further adjustments.",
            "We take immense pride in describing ourselves as one of the leading construction companies in Bangalore who have handled a giant fleet of projects across the city.",
            "Let me know if this adjustment is sufficient or if further tweaking is needed!"
          ].map((content, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/4 bg-gray-400 p-4 sm:p-6 lg:p-8 text-center rounded-lg shadow-lg"
            >
              <p className="text-base sm:text-lg lg:text-xl text-black-700">{content}</p>
            </div>
          ))}
        </div>

        {/* OUR Mission and Vision */}
        <div className="flex flex-wrap justify-center items-center mt-12 gap-8 px-4">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black-800">OUR Mission</h3>
            <p className="text-base sm:text-lg text-black-700">
              To provide quality workmanship with value-added services and
              maintain the highest level of professionalism, honesty, and
              fairness in our relationship with clients.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black-800">OUR Vision</h3>
            <p className="text-base sm:text-lg text-black-700">
              To be the preferred contractor of choice. A company that our
              clients want to work with and the employees are proud to work for.
            </p>
          </div>
        </div>

        {/* Mission Images */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 px-4">
          <img
            src="https://www.kkcivilcontractor.com/wp-content/uploads/2020/01/about-us-mission.jpg"
            alt="Mission Image"
            className="w-full sm:w-1/2 lg:w-1/3 object-cover rounded-lg shadow-lg"
            style={{ height: "270px" }}
          />
          <img
            src="https://www.kkcivilcontractor.com/wp-content/uploads/2020/01/about-us-vision.jpg"
            alt="Vision Image"
            className="w-full sm:w-1/2 lg:w-1/3 object-cover rounded-lg shadow-lg"
            style={{ height: "270px" }}
          />
        </div>

        {/* Infrastructure Section */}
        <div className="text-center mt-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-black-800">INFRASTRUCTURE</h2>
          <p className="mt-4 text-base sm:text-lg text-black-700">
            KKCC is well equipped with all the required plant and machinery such
            as tower cranes, batching plants with concrete pumps, bar cutting
            machines, total stations, auto levels, trucks, and more.
          </p>
          <div className="mt-8">
            <img
              src="https://www.kkcivilcontractor.com/wp-content/uploads/2020/01/WhatsApp-Image-2020-01-24-at-6.31.26-PM-1.jpeg"
              alt="Infrastructure"
              className="w-full sm:w-3/4 lg:w-1/2 object-cover mx-auto rounded-lg shadow-lg"
              style={{ height: "550px" }}
            />
          </div>
        </div>

        {/* Policies Section */}
        <div className="text-center mt-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-black-800">Our Policies</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-400 p-4 text-center rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black-800">QUALITY POLICY</h3>
              <p className="text-base sm:text-lg text-black-700">
                Quality is our main concern and an integral part of our working
                operations. We believe in providing quality services and that is
                why our clients have exceptional confidence in us.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-400 p-4 text-center rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black-800">SAFETY POLICY</h3>
              <p className="text-base sm:text-lg text-black-700">
                We at KKCC are committed to sound safety policy, educating and
                training employees, conducting risk analysis, and fostering a
                safe working environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 px-4">
  <h2 className="text-3xl sm:text-4xl font-bold text-black-800">Our Team</h2>
</div>

{/* Our Team Images */}
<div className="flex justify-center gap-8 mt-8">
  <div className="text-center">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-rez2N3cC72inOM0dqwQzLOhzA2oOwinqA&s" // Replace with the actual image source
      alt="Team Member 1"
      className="w-full sm:w-1/2 lg:w-1/3 object-cover rounded-lg shadow-lg"
      style={{ height: "300px" ,width:"400px" }}
    />
    <p className="mt-2 text-xl font-semibold">Team Member 1</p>
  </div>
  <div className="text-center">
    <img
      src="https://c4.wallpaperflare.com/wallpaper/823/344/996/dean-winchester-supernatural-wallpaper-preview.jpg" // Replace with the actual image source
      alt="Team Member 2"
      className="w-full sm:w-1/2 lg:w-1/3 object-cover rounded-lg shadow-lg"
      style={{ height: "300px" ,width:"400px"  }}
    />
    <p className="mt-2 text-xl font-semibold">Team Member 2</p>
    <br></br><br></br><br></br>
  </div>
</div>


    </div>
  );
};

export default About;
