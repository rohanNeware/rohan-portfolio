import React from 'react';

const About = () => {
    return (
        <section id="About" className="container mx-auto py-10 px-4 md:px-0  bg-gradient-to-r from-white to-[#e6dbfe] shadow-md'">
            <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                className="text-3xl font-bold mb-6 text-center md:text-left"
            >
                About Me
            </h2>
            <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
                <div className="order-2 md:order-1">
                    <p className="text-lg leading-relaxed">
                        I am a passionate React.js Developer with experience in building dynamic web applications. My expertise includes working with modern JavaScript libraries and frameworks, designing intuitive user interfaces, and optimizing performance for the best user experience. I am dedicated to continuous learning and staying up-to-date with the latest technologies to deliver high-quality solutions.
                    </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src='/ro.jpeg'
                        alt="Rohan Neware"
                        className="w-48 h-48 object-cover rounded-full shadow-lg"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        data-aos-duration="1200"
                    />
                </div>
            </div>
          
            <div className="text-center mt-6">
  <h1 className="text-4xl font-bold text-gray-800">Rohan Neware</h1>
  <p className="text-xl mt-2 text-gray-600">React JS Developer</p>
  <a  
    href="/RohanResume.pdf"
    download="RohanResume.pdf"
    className="mr-2 mt-4 inline-block bg-gradient-to-r from-[#6d28d9] to-[#a855f7] text-white py-3 px-6 rounded-lg shadow-lg hover:from-[#a855f7] hover:to-[#6d28d9] border border-transparent hover:border-[#6d28d9] transition-all duration-300 ease-in-out transform hover:scale-105 tracking-wide"
  >
    Download CV
  </a>
  <a
    href="https://linkedin.com/in/rohan-neware-820829178"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-[#6d28d9] to-[#a855f7] text-white py-3 px-6 rounded-lg shadow-lg hover:from-[#a855f7] hover:to-[#6d28d9] border border-transparent hover:border-[#6d28d9] transition-all duration-300 ease-in-out transform hover:scale-105 tracking-wide mt-4"
  >
    LinkedIn
  </a>
</div>
        </section>
    );
};

export default About;