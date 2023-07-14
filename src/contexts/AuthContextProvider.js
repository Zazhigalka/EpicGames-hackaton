import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [isSeller, setIsSeller] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(formData) {
    try {
      await axios.post(`${API}/accounts/register/`, formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRegisterSeller(formData) {
    try {
      await axios.post(`${API}/accounts/register_seller/`, formData);
      setIsSeller(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogin(formData, email) {
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser("");
    setIsSeller(false);
    navigate("/auth");
  }

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}/accounts/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
      );
      const email = localStorage.getItem("email");
      if (email) {
        setCurrentUser(email);
      }
    } catch (error) {
      console.log(error);
      logout();
    }
  }

  const values = {
    handleRegister,
    handleRegisterSeller,
    handleLogin,
    logout,
    currentUser,
    checkAuth,
    isSeller,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
