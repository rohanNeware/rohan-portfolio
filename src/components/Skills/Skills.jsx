import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Next.js', level: '70%', color: 'bg-gray-800', icon: 'fas fa-caret-up' },
  { name: 'React.js', level: '85%', color: 'bg-blue-500', icon: 'fab fa-react' },
  { name: 'JavaScript', level: '90%', color: 'bg-yellow-500', icon: 'fab fa-js' },
  { name: 'Node.js', level: '75%', color: 'bg-green-500', icon: 'fab fa-node' },
  { name: 'CSS', level: '80%', color: 'bg-blue-300', icon: 'fab fa-css3-alt' },
  { name: 'HTML', level: '90%', color: 'bg-red-500', icon: 'fab fa-html5' },
  { name: 'Tailwind', level: '90%', color: 'bg-teal-400', icon: 'fa-solid fa-wind' },
  { name: 'Bootstrap', level: '90%', color: 'bg-purple-600', icon: 'fab fa-bootstrap' },
  { name: 'Git', level: '90%', color: 'bg-gray', icon: 'fab fa-github' }
];

const Skills = () => {
  return (
    <section id="My-Skills" className="container mx-auto py-10 px-4 md:px-0 bg-[#f6f3fc]">
      <h2
        data-aos="fade-up"
        data-aos-duration="1200"
        className="text-4xl font-bold mb-10 text-center text-gray-800"
      >
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center
            transition-transform duration-300 transform hover:scale-105 hover:bg-[#2a1454] hover:text-white hover:shadow-xl shake-on-hover mx-2 my-4"
          >
            <div className={`text-5xl mb-4 ${skill.color}`}>
              <i className={skill.icon}></i>
            </div>
            <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300">
              {skill.name}
            </h3>
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm transition-colors duration-300">{skill.level}</span>
              </div>
              <div className="relative pt-1">
                <div className="bg-gray-200 h-2 rounded-full w-full">
                  <div
                    className={`h-full ${skill.color} rounded-full`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
