const NewsOne = ({ news }) => {
  return (
    <div className="row-start-1 row-end-5 lg:row-start-1 lg:col-start-1 lg:row-end-5 lg:col-end-4 w-full h-full flex flex-col justify-end items-center gap-10 drop-shadow-[0_1px_2px_black] bg-base-100 rounded-xl bg-cover p-4" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.8) 100%), url(${news.image})` }}>
      <h1 className="text-3xl lg:text-4xl text-white text-center">{news.title}</h1>
      <button className="btn btn-primary hover:btn-accent">LEARN MORE!</button>
    </div>
  );
};

export default NewsOne;
