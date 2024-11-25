import { useState } from 'react';
import { toast } from 'react-toastify';

const SignForm = () => {
  const [{ email, password }, setFormState] = useState({
    email: '',
    password: '',
  });


  const handleChange = e => {
    const { name, value } = e.target;
    setFormState(previousState => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    try {
      e.preventDefault();
      if (!email || !password) throw new Error('Please fill out all the fields!');

      // TODO: ADD FUNCTION TO DO THE MAGIC LOGIN

      // Reset the Form
      setFormState(() => ({
        email: '',
        password: '',
      }));

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id="sign-form" className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <h3 className="font-bold text-2xl text-center">Sign in!</h3>
        <div className="signform-input">
          <input id="signform-email" name="email" type="email" autoComplete="email" required value={email} onChange={handleChange} />
          <label htmlFor="signform-email"> Enter your Email </label>
        </div>
        <div className="signform-input">
          <input id="signform-password" name="password" type="password" autoComplete="off" required minLength="8" value={password} onChange={handleChange} />
          <label htmlFor="signform-password"> Enter your Password </label>
        </div>
        <div className="flex flex-col mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
