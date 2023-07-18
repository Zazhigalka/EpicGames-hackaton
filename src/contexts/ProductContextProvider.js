import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";
import { getTokens } from "../helpers/functions";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
      };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const res = await axios(
        `${API}/posts/${window.location.search}`,
        getTokens()
      );
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function createProduct(newProduct) {
    try {
      await axios.post(`${API}/posts/`, newProduct, getTokens());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      const res = await axios(`${API}/posts/${id}/`, getTokens());
      dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/posts/${id}/`, getTokens());
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(id, editedProduct) {
    try {
      await axios.patch(`${API}/posts/${id}/`, editedProduct, getTokens());
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleLike(id, setIsLiked) {
    try {
      await axios.get(`${API}/posts/${id}/toggle_like/`, getTokens());
      getProducts();
      setIsLiked(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleLikeDelete(id, setIsLiked) {
    try {
      await axios.get(`${API}/posts/${id}/delete_like/`, getTokens());
      getProducts();
      setIsLiked(false);
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    createProduct,
    getProducts,
    products: state.products,
    getOneProduct,
    oneProduct: state.oneProduct,
    deleteProduct,
    toggleLike,
    toggleLikeDelete,
    updateProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
