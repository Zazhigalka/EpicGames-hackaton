import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../helpers/consts';

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function handleRegister(formData) {
    try {
      await axios.post(`${API}/accounts/register/`, formData);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  const values = { handleRegister };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
