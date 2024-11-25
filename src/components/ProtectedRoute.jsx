import { useUser } from '../contexts/UserContext.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(redirectPath);
    }
  })

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
