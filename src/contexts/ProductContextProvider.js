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
  favorites: [],
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

    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };

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
        `${API}/posts/${window.location.search}/`,
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

  async function updateProduct(id, editedProduct) {
    try {
      await axios.patch(`${API}/posts/${id}/`, editedProduct, getTokens());
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "All") {
      search.delete(query);
    } else if (query === "_sort") {
      search.set(query, "price");
      search.set("_order", value);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

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

  // favorite
  async function toggleFavorites(id) {
    try {
      await axios(`${API}/posts/${id}/toggle_favorite/`, getTokens());
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getFavorites(id) {
    try {
      const res = await axios(`${API}/accounts/${id}/favorites/`, getTokens());
      dispatch({ type: "GET_FAVORITES", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteFromFavorites(id) {
    try {
      await axios(`${API}/posts/${id}/delete_favorite/`, getTokens());
      getFavorites();
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleLike(id, setIsLiked, setTotalLikes) {
    try {
      await axios.get(`${API}/posts/${id}/toggle_like/`, getTokens());
      const res = await axios(`${API}/posts/${id}/`, getTokens());
      setIsLiked(true);
      setTotalLikes(res.data.likes_count);
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleLikeDelete(id, setIsLiked, setTotalLikes) {
    try {
      await axios.get(`${API}/posts/${id}/delete_like/`, getTokens());
      const res = await axios(`${API}/posts/${id}/`, getTokens());
      setIsLiked(false);
      setTotalLikes(res.data.likes_count);
    } catch (error) {
      console.log(error);
    }
  }

  async function addComment(formData) {
    try {
      const id = `${formData.get("id")}`;
      await axios.post(`${API}/posts/${id}/comment/`, formData, getTokens());
      getOneProduct(id);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteComment(commentId, productId) {
    try {
      await axios.delete(`${API}/posts/${commentId}/comment_delete`);
      getOneProduct(productId);
    } catch (error) {
      console.log(error);
    }
  }

  async function addRating(formData) {
    try {
      const id = `${formData.get("id")}`;
      await axios.post(`${API}/posts/${id}/rating/`, formData, getTokens());
      getOneProduct(id);
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
    updateProduct,

    toggleFavorites,
    getFavorites,
    favorites: state.favorites,
    deleteFromFavorites,

    toggleLike,
    toggleLikeDelete,

    addComment,
    deleteComment,

    addRating,

    fetchByParams,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
