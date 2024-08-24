import React from 'react';

const experiences = [
  {
    company: 'Devlogic Solutions',
    role: 'Front-End Developer',
    period: 'August 2020 - Present',
    description: 'Worked on various front-end technologies including React.js and Next.js, and developed a high-traffic e-commerce site.',
  },
  {
    company: 'Iosys Software',
    role: 'Trainee Front-End Developer',
    period: 'Jan 2020 - June 2021',
    description: 'Developed and maintained user-friendly websites and APIs using Node.js and Express.',
  },
];

const Experience = () => {
  return (
    <div className="bg-[#f6f3fc] py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#2a1454] hover:text-white flex flex-col h-80 w-full max-w-sm"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
                <h4 className="text-xl font-medium mb-2">{exp.role}</h4>
                <p className="text-base mb-4">{exp.period}</p>
                <p className="text-base">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
