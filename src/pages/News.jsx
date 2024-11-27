import NewsContent from '../components/NewsContent.jsx';

const News = () => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const news = {
    news_id: 1,
    creator_id: 1,
    news_title: "From plastic bottles to boxed water, How can you contribute?",
    news_content: ``,
    news_image: '/news/boxed-water-is-better-9qDtdcQoTw8-unsplash.jpg',
    createdAt: new Date().toLocaleDateString('en-US', dateOptions),
  };
  const author = {
    user_id: 1,
    username: "Rene",
    email: "rene@example.com",
    user_avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    user_country: "Germany",
    team_name: "Zemlak, Daniel and Leannon",
    job_name: "Desktop Support Technician",
  };

  return (
    <section className="hero min-h-screen mt-20">
      <div className="hero-content w-full flex-col">
        <figure className="h-80 w-full relative">
          <img className="object-cover h-80 w-full" src={news.news_image} alt="" />
          <h1 className="absolute bottom-4 left-4 text-secondary-content text-4xl font-semibold self-start">{news.news_title}</h1>
        </figure>
        <article className="w-full h-full relative border-y-4 border-y-green-300 border-x-2">
          <header className="p-4">
            <p className="text-md">by <strong>{author.username}</strong></p>
            <p className="text-sm"><em>{news.createdAt}</em></p>
          </header>
          <section className="p-4 flex flex-wrap gap-4">
            <NewsContent />
          </section>
        </article>
      </div>
    </section>
  );
};

export default News;
