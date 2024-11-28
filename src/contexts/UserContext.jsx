import { createContext, useContext, useState } from 'react';
import { getLocalStorage, removeFromStorage, saveLocalStorage } from '../utils/storage.js';
import { toast } from 'react-toastify';
import axios from 'axios';

const UserContext = createContext(undefined);
const UserLoginContext = createContext(undefined);
const UserLogoutContext = createContext(undefined);

export function useUser() {
  return useContext(UserContext);
}
export function useLogin() {
  return useContext(UserLoginContext);
}
export function useLogout() {
  return useContext(UserLogoutContext);
}

export function UserProvider({ children }) {
  const localStorage = getLocalStorage('userStorage');
  const isStored = localStorage.length !== 0;
  const [user, setUser] = useState(() => isStored);

  async function handleLogin(email, password) {

    const options = {
      method: 'POST',
      url: 'http://localhost:3001' + '/api/auth/login',
      data: {
        email: email,
        password: password,
      },
    }

    axios.post(options.url, options.data)
    .then((response) => {
      saveLocalStorage('userStorage', [{ id: response.data.user.id, email: response.data.user.email, token: response.data.token }]);
      toast.success('Successfully signed in!');
      setUser(true);
    })
    .catch((error) => {
      toast.error('Please check your credentials!', error)
    });
  }

  function handleLogout() {
    const localStorage = getLocalStorage('userStorage');
    removeFromStorage('userStorage', localStorage[0]);
    toast.warning('Successfully signed out!');
    setUser(false);
  }

  return (
    <UserContext.Provider value={user}>
      <UserLoginContext.Provider value={handleLogin}>
        <UserLogoutContext.Provider value={handleLogout}>
          {children}
        </UserLogoutContext.Provider>
      </UserLoginContext.Provider>
    </UserContext.Provider>
  );
}