import SignForm from '../components/SignForm.jsx';

const Landing = () => {
  return (
    <section id="landing" className="hero bg-base-200 min-h-screen"
             style={{
               backgroundImage: "url(https://picsum.photos/1280/900)",
             }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content relative w-full h-full flex-col lg:flex-row-reverse gap-20">
        <SignForm />
      </div>
    </section>
);
};

export default Landing;
