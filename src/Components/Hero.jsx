
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-[url('src/assets/bg3.jpg')] bg-cover bg-center w-screen text-white h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-7xl font-bold my-2 animate-fadeIn">I'm <span className="text-[#9cceeb] animate-fadeIn">Simarpreet Kaur</span></h1>
        <h2 className="text-4xl font-medium my-2">A Frontend Web Developer</h2>
        <p className="text-2xl mb-8 animate-fadeIn delay-1s">Who is Crafting beautiful and functional websites with passion.</p>
        {/* <div className="flex justify-center space-x-6 mt-6 animate-bounce">
          <a href="https://www.instagram.com/kaur_simar1999" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" target="_blan
          k" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://youtube.com/@simarpreetkaur4597" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div> */}
        <div className='text-xl mt-5  '>
         <a href="#" target='_blank'><button className='w-34  rounded-full pl-5 pr-5 pb-1 hover:shadow-md hover:shadow-blue-400 border-solid border-2 border-slate-300 text-white bg-transparent transition duration-300 transform hover:scale-110 '>View Resume</button></a> 
          
          <a aria-label="Chat on WhatsApp" href="https://wa.me/8283021339" target='_blank'>
             <button className=' w-50 rounded-full pl-5 pr-5 pb-1  hover:shadow-md hover:shadow-green-400 border-solid border-2  border-slate-300 text-white bg-transparent ml-6 transition duration-300 transform hover:scale-110'>Chat with me!</button>
             
          </a>
        </div>

        
      </div>
      
    </section>
  );
}

export default Hero;
