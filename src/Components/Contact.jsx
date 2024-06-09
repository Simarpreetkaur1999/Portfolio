import React, { useRef } from 'react';


const Contact = () => {
  
 

  return (
    // <div className='h-screen w-screen bg-cover bg-center bg-gradient-to-b from-purple-700 to-blue-500 relative'>
    //   <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black'>
    //     <h1 className='text-4xl font-semibold mb-8'>CONTACT ME</h1>
    //     <div className='mb-6'>
    //       <h3 className='text-xl font-semibold flex items-center justify-center'>
    //        Phone No.
    //       </h3>
    //       <p className='text-lg'>+91 8699525447</p>
    //     </div>
    //     <div className='mb-8'>
    //       <h3 className='text-xl font-semibold flex items-center justify-center'>
    //        Location
    //       </h3>
    //       <p className='text-lg'>Pocket 5, Mayur Vihar, Delhi, 110091.</p>
    //     </div>
    //     <form className="mx-auto max-w-lg">
    //       <label className="block mb-4">
    //         <span className="text-lg font-semibold">NAME</span> <br />
    //         <input type="text" name="user_name" placeholder="Your Name..." className="w-full py-2 px-4 rounded bg-transparent border-b-2 border-black focus:outline-none focus:border-purple-300" required />
    //       </label>
    //       <label className="block mb-4">
    //         <span className="text-lg font-semibold">EMAIL</span> <br />
    //         <input type="email" name="user_email" placeholder="Your Email..." className="w-full py-2 px-4 rounded bg-transparent border-b-2 border-black focus:outline-none focus:border-purple-300" required />
    //       </label>
    //       <label className="block mb-4">
    //         <span className="text-lg font-semibold">SUBJECT</span> <br />
    //         <input type="text" name="subject" placeholder="Write The Subject..." className="w-full py-2 px-4 rounded bg-transparent border-b-2 border-black focus:outline-none focus:border-purple-300" required />
    //       </label>
    //       <label className="block mb-4">
    //         <span className="text-lg font-semibold">YOUR MESSAGE</span> <br />
    //         <textarea
    //           name="message"
    //           rows="5"
    //           placeholder="Write Your Message here!!!!"
    //           className="w-full py-2 px-4 rounded bg-transparent border-b-2 border-black focus:outline-none focus:border-purple-300"
    //           required
    //         ></textarea>
    //       </label>
    //       <button type="submit" className='w-full py-2 px-4 rounded bg-purple-600 hover:bg-purple-700 text-lg font-semibold transition duration-300 ease-in-out'>
    //         SUBMIT
    //       </button>
    //     </form>
    //   </div>
    //   <div className="w-full bg-black text-black absolute bottom-0 left-0 p-4 flex justify-between items-center">
    //     <span className="text-lg">Gmail: itshannusingh13@gmail.com</span>
    //     <div className="flex space-x-4">
    //       <a href="https://www.facebook.com/profile.php?id=100009064766824&mibextid=LQQJ4d" target='_blank' className="SocialMedia">
    //         <i className="fa-brands fa-facebook-f"></i>
    //       </a>
    //       <a href="/" className="SocialMedia">
    //         <i className="fa-brands fa-x-twitter"></i>
    //       </a>
    //       <a href="https://www.instagram.com/i_harvinder_singh?igsh=djFyNjBvd3V5OG80" target='_blank' className="SocialMedia">
    //         <i className="fa-brands fa-instagram"></i>
    //       </a>
    //       <a href="https://github.com/Harvinder86" target='_blank' className="SocialMedia">
    //         <i className="fa-brands fa-github"></i>
    //       </a>
    //       <a href="/" className="SocialMedia">
    //         <i className="fa-brands fa-linkedin-in"></i>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className='h-screen w-screen bg-cover bg-center bg-[url("src/assets/gif1.gif")] bg-no-repeat relative '>
    <div className='absolute'>
      <h1 className='text-5xl font-medium text-black mt-20 ml-48'>CONTACT ME...</h1>
      <h3 className='text-2xl font-semibold text-black mt-16 ml-48 flex'>
      Phone No.
      </h3>
      <p className='text-xl text-black ml-48'>+91 8283021339</p>
      <h3 className='text-2xl font-semibold text-black mt-16 ml-48 flex'>
       Location
      </h3>
      <p className='text-xl text-black ml-48'>
       House No.7631 Grain Market Road,Bathinda,Punjab
      </p>
      <h3 className='text-2xl font-semibold text-black mt-16 ml-48 flex'>
       E-mail
      </h3>
      <p className='text-xl text-black ml-48'>
      skaurbti@gmail.com
      </p>
    </div>
    <div className='text-black ml-[900px] relative pt-10'>
      <form className="footer" >
        <label className='text-lg '>
          NAME <br />
          <input type="text" name="user_name" placeholder="Your Name..." className="fname bg-transparent outline-none border-b-2 w-[350px]" required />
        </label>
        <br /><br />
        <label className='text-lg '>
          EMAIL <br />
          <input type="email" name="user_email" placeholder="Your Email..." className="email bg-transparent outline-none border-b-2 w-[350px]" required />
        </label>
        <br /><br /> 
        <label className='text-lg '>
          SUBJECT <br />
          <input type="text" name="subject" placeholder="Write The Subject..." className="subject bg-transparent outline-none border-b-2 w-[350px]" required />
        </label>
        <br /><br />
        <label className='text-lg '>
          YOUR MESSAGE
          <br />
          <textarea
            name="message"
            cols="24"
            rows="5"
            placeholder="Write Your Message here!!!!"
            className="bg-transparent border-b-2 w-[350px] outline-none"
            required
          ></textarea>
        </label>
        <br /><br />
        <button type="submit" className='w-[360px] text-lg font-semibold rounded-full pl-5 pr-5 pb-1 border-solid border-2 border-black text-black bg-cyan-800 hover:shadow-[#2a3f46] hover:shadow-lg '>
          SUBMIT
        </button>
      </form>
    </div>
    {/* <div className="footer-nav w-full bg-black text-black fixed bottom-0 left-0 flex justify-between items-center p-4">
      <div className="flex items-center">
        <span className="text-lg">Gmail: skaurbti@gmail.com</span>
      </div>
    </div> */}
  </div>
  );
};

export default Contact;
