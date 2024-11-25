import SignForm from '../components/SignForm.jsx';
import { useEffect } from 'react';
import { useUser } from '../contexts/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const user = useUser();

  useEffect(() => {
    if (user) navigate("/home");
  }, [user])

  return (
    <section id="landing" className="hero bg-base-200 min-h-screen" style={{ backgroundImage: "url(https://picsum.photos/1280/900)" }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content relative w-full h-full flex-col lg:flex-row-reverse gap-20">
        <SignForm />
      </div>
    </section>
  );
};

export default Landing;
