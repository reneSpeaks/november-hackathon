const NewsTwo = ({ news }) => {
  return (
    <div className="row-start-5 row-end-7 lg:row-start-1 lg:col-start-4 lg:row-end-3 lg:col-end-6 w-full h-full flex flex-col justify-end gap-10 items-center drop-shadow-[0_1px_2px_black] bg-base-200 text-6xl rounded-xl bg-cover p-4" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%), url(${news.image})` }}>
      <h2 className="text-2xl lg:text-3xl text-white text-center">{news.title}</h2>
      <button className="btn btn-primary hover:btn-accent">LEARN MORE!</button>
    </div>
  );
};

export default NewsTwo;
