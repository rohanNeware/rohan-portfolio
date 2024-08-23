import React from 'react';

const education = [
  {
    institution: 'Priyadarshini College of Eng Nagpur (RTMNU)',
    degree: 'Bachelor of Science in Computer Technology',
    period: 'Sep 2016 - May 2019',
    description: 'Focused on software development, algorithms, and data structures. Participated in various coding competitions and projects.',
  },
  {
    institution: 'JD College of Polytechnique (MSBTE)',
    degree: 'Diploma',
    period: 'Sep 2013 - May 2016',
    description: 'Covered fundamental topics in IT, including programming, networking, and database management.',
  },
];

const Education = () => {
  return (
    <div className="bg-[#f6f3fc] py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#2a1454] hover:text-white flex flex-col h-80 w-full max-w-sm"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{edu.institution}</h3>
                <h4 className="text-xl font-medium mb-2">{edu.degree}</h4>
                <p className="text-base mb-4">{edu.period}</p>
                <p className="text-base">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
