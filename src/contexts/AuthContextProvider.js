import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";
import { getTokens } from "../helpers/functions";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(formData) {
    setLoading(true);
    try {
      await axios.post(`${API}/accounts/register/`, formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegisterSeller(formData) {
    setLoading(true);
    try {
      await axios.post(`${API}/accounts/register_seller/`, formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser("");
    navigate("/auth");
  }

  async function handleChangePassword(formData) {
    setLoading(true);
    try {
      await axios.patch(
        `${API}/accounts/change-password/`,
        formData,
        getTokens()
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function checkAuth() {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }

  async function getUsername(email) {
    try {
      const response = await axios.get(`${API}/accounts/`, {
        params: {
          search: email,
        },
      });

      const user = response.data[0];
      return user;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  const values = {
    handleRegister,
    handleRegisterSeller,
    handleLogin,
    handleChangePassword,
    logout,
    currentUser,
    checkAuth,
    loading,
    getUsername,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
