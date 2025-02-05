import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import DishCard from './components/DishCard';
import About from './components/About';
import Mission from './components/Mission';
import Expertise from './components/Expertise';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <Hero />
      <Navbar />
      <Dishes />
      <DishCard />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
