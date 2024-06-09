import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


function App() {
  // return (
  //   <div className="App">
  //     <Header />
  //     <Hero />
  //     <About />
  //     {/* <Skills /> */}
  //     <Contact />
  //   </div>
  // );


  const router=createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header/>
          <Hero/>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header/>
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Header />
          <Contact />
        </>
      ),
    },
  ]);
  
    return (
      <>
        
       {/* <Navbar/> */}
       <RouterProvider router={router} />
       {/* <Home/>
       <About/>
     <ContactMe/> */}
   
      </>
    )
}

export default App;
