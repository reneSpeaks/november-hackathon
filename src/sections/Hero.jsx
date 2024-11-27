import React from 'react';
import NewsOne from '../components/NewsOne.jsx';
import NewsTwo from '../components/NewsTwo.jsx';
import NewsThree from '../components/NewsThree.jsx';

const Hero = () => {

  const news = [
    {
      id: 1,
      title: "From plastic bottles to boxed water, How can you contribute?",
      image: '/news/boxed-water-is-better-9qDtdcQoTw8-unsplash.jpg'
    },
    {
      id: 2,
      title: 'We support the rainforest with every step you take!',
      image: '/news/casey-horner-4rDCa5hBlCs-unsplash.jpg'
    },
    {
      id: 3,
      title: 'Renewable energies and our efforts to reduce CO² Emissions.',
      image: '/news/chelsea-WvusC5M-TM8-unsplash.jpg'
    }
  ]

  return (
    <section id="hero" className="hero relative bg-base-200 min-h-screen" style={{ backgroundImage: "url(https://picsum.photos/1280/900)" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content mt-14 lg:mt-0 relative w-full h-full flex-col lg:flex-row-reverse gap-20">
        <div className="grid grid-cols-1 grid-rows-8 lg:grid-rows-4 lg:grid-cols-5 gap-5 p-4 w-full h-4/5 max-w-7xl z-20">
          <NewsOne news={news[0]} /> <NewsTwo news={news[1]} /> <NewsThree news={news[2]} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
