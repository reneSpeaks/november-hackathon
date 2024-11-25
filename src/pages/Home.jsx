const Home = () => {
  return (
    <section id="hero" className="hero relative bg-base-200 min-h-screen" style={{ backgroundImage: "url(https://picsum.photos/1280/900)" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content mt-14 lg:mt-0 relative w-full h-full flex-col lg:flex-row-reverse gap-20">
        <div className="grid grid-cols-1 grid-rows-8 lg:grid-rows-4 lg:grid-cols-5 gap-5 p-4 w-full h-4/5 max-w-7xl z-20">
          <div className="row-start-1 row-end-5 lg:row-start-1 lg:col-start-1 lg:row-end-5 lg:col-end-4 w-full h-full flex flex-col justify-center items-center drop-shadow-[0_1px_2px_black] bg-base-100 text-7xl">ONE</div>
          <div className="row-start-5 row-end-7 lg:row-start-1 lg:col-start-4 lg:row-end-3 lg:col-end-6 w-full h-full flex flex-col justify-center items-center drop-shadow-[0_1px_2px_black] bg-base-200 text-6xl">TWO</div>
          <div className="row-start-7 row-end-9 lg:row-start-3 lg:col-start-4 lg:row-end-5 lg:col-end-6 w-full h-full flex flex-col justify-center items-center drop-shadow-[0_1px_2px_black] bg-base-300 text-6xl">THREE</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
