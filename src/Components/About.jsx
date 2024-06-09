import React, { useEffect } from 'react';
import "../Components/about.css";

const About = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBar = entry.target.querySelector('.skill-bar');
          skillBar.style.width = skillBar.getAttribute('data-level');
        }
      });
    });

    const elements = document.querySelectorAll('.skill-container');
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'JAVA', level: '80%', color: 'bg-red-500' },
    { name: 'HTML', level: '90%', color: 'bg-yellow-500' },
    { name: 'CSS', level: '80%', color: 'bg-blue-500' },
    { name: 'JAVASCRIPT', level: '80%', color: 'bg-green-500' },
    { name: 'MONGODB', level: '70%', color: 'bg-purple-500' },
    { name: 'SQL', level: '75%', color: 'bg-indigo-500' }
  ];

  const professionalSkills = [
    { name: 'Communication', level: '90%', color: 'bg-red-500' },
    { name: 'Team work', level: '85%', color: 'bg-yellow-500' },
    { name: 'Project Management', level: '80%', color: 'bg-blue-500' },
    { name: 'Creativity', level: '80%', color: 'bg-green-500' }
  ];

  return (
    <section id="about" className="py-20 bg-[url('src/assets/b17.jpg')] bg-cover text-white text-center">
      <div className="container mx-auto ">
        <div className="mt-6 animate-fadeIn delay-1s ">
          <img src="src/assets/WhatsApp Image 2024-06-01 at 21.05.08_cfdcf8f4.jpg" alt="Simarpreet Kaur" className="mx-auto rounded-full w-48 h-48 shadow-lg transform hover:scale-110 transition duration-500 hover:shadow-lg hover:shadow-slate-500 mb-10" />
          <h1 className="text-2xl font-semibold mt-4">I'm Simarpreet Kaur</h1>
          <p className="mt-4 text-gray-200 max-w-lg mx-auto">
            Welcome to my portfolio! I'm a passionate front-end developer dedicated to crafting visually stunning and intuitive websites...
          </p>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-4 transition duration-300 transform hover:scale-110 shadow-lg">HIRE ME</button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-110 shadow-lg">DOWNLOAD MY CV</button>
          </div>
        </div>

        <h2 className="text-4xl font-bold mt-16  ">SKILLS</h2>
        <p className="mt-4 text-lg ">Here are my skills to represent my expertise</p>

        <div className="mt-10  ml-2">
          {/* <h3 className="text-xl font-semibold ">Technical Skills</h3> */}
          <div className="mt-4 space-y-4 w-[40vw]">
          <h3 className="text-xl font-semibold ">Technical Skills</h3>
            {technicalSkills.map(skill => (
              <div key={skill.name} className="text-left skill-container">
                <p>{skill.name} <span className="text-sm">({skill.level})</span></p>
                <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div className={`skill-bar ${skill.color} h-4 rounded-full`} style={{ width: '0%' }} data-level={skill.level}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10  pl-[700px]">
          <h3 className="text-xl font-semibold">Professional Skills</h3>
          <div className="mt-4 space-y-4  w-[40vw] ">
            {professionalSkills.map(skill => (
              <div key={skill.name} className="text-left skill-container">
                <p>{skill.name} <span className="text-sm">({skill.level})</span></p>
                <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div className={`skill-bar ${skill.color} h-4 rounded-full`} style={{ width: '0%' }} data-level={skill.level}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
