const NewsTwo = ({ news }) => {
  return (
    <div className="row-start-5 row-end-7 lg:row-start-1 lg:col-start-4 lg:row-end-3 lg:col-end-6 w-full h-full flex flex-col justify-end gap-2 lg:gap-8 items-center drop-shadow-[0_1px_2px_black] bg-base-200 text-6xl rounded-xl bg-cover p-4" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%), url(${news.news_image})` }}>
      <h2 className="text-lg lg:text-3xl text-white text-center">{news.news_title}</h2>
      <button className="btn btn-primary hover:btn-accent self-end">LEARN MORE!</button>
    </div>
  );
};

export default NewsTwo;
