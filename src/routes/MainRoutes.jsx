import React, { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import WishListPage from "../pages/WishListPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import DistributionPage from "../pages/DistributionPage";
import ProductsPage from "../pages/ProductsPage";
import RegisterPage from "../pages/RegisterPage";
import News from "../components/news/News";
import AddProductPage from "../pages/AddProductPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import { useAuth } from "../contexts/AuthContextProvider";
import RegisterSuccess from "../components/auth/RegisterSuccess";

const MainRoutes = () => {
  const [isSeller, setIsSeller] = useState(false);

  const { currentUser, getUserData } = useAuth();

  async function fetchData() {
    try {
      const email = localStorage.getItem("email");
      if (email) {
        const user = await getUserData(email);
        if (user) {
          setIsSeller(user.is_seller);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [currentUser]);

  const PUBLIC_ROTES = [
    {
      link: "/",
      element: <HomePage />,
      id: "1",
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: "2",
    },
    {
      link: "/register",
      element: <RegisterPage />,
      id: "3",
    },
    {
      link: "/distribution",
      element: <DistributionPage />,
      id: "4",
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: "5",
    },
    {
      link: "/product/:id",
      element: <ProductDetailsPage />,
      id: "6",
    },
    {
      link: "/news",
      element: <News />,
      id: "7",
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: "8",
    },
    {
      link: "/RegisterSuccess",
      element: <RegisterSuccess />,
      id: "13",
    },
  ];

  const USER_ROTES = [
    {
      link: "/change-password",
      element: <ChangePasswordPage />,
      id: "9",
    },
    {
      link: "/wish-list",
      element: <WishListPage />,
      id: "10",
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: "11",
    },
   
  ];

  const SELLER_ROTES = [
    {
      link: "/addproduct",
      element: <AddProductPage />,
      id: "12",
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROTES.map((page) => (
        <Route path={page.link} element={page.element} key={page.id} />
      ))}

      {currentUser
        ? USER_ROTES.map((page) => (
            <Route path={page.link} element={page.element} key={page.id} />
          ))
        : null}

      {isSeller
        ? SELLER_ROTES.map((page) => (
            <Route path={page.link} element={page.element} key={page.id} />
          ))
        : null}
    </Routes>
  );
};

export default MainRoutes;
