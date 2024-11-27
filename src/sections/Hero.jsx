import NewsOne from '../components/NewsOne.jsx';
import NewsTwo from '../components/NewsTwo.jsx';
import NewsThree from '../components/NewsThree.jsx';

const Hero = () => {


  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const news = [
    {
      news_id: 1,
      creator_id: 1,
      news_title: "From plastic bottles to boxed water, How can you contribute?",
      news_content: ``,
      news_image: '/news/boxed-water-is-better-9qDtdcQoTw8-unsplash.jpg',
      createdAt: new Date().toLocaleDateString('en-US', dateOptions),
    },
    {
      news_id: 2,
      creator_id: 1,
      news_title: 'We support the rainforest with every step you take!',
      news_content: ``,
      news_image: '/news/casey-horner-4rDCa5hBlCs-unsplash.jpg',
      createdAt: new Date().toLocaleDateString('en-US', dateOptions),
    },
    {
      news_id: 3,
      creator_id: 1,
      news_title: 'Our efforts to reduce CO² Emissions.',
      news_content: ``,
      news_image: '/news/chelsea-WvusC5M-TM8-unsplash.jpg',
      createdAt: new Date().toLocaleDateString('en-US', dateOptions),
    }
  ]

  return (
    <section id="hero" className="hero relative bg-green-200 min-h-screen border-b-2 border-primary">
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
