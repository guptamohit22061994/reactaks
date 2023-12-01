import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./component/Header";
import Header from "./src/component/Header";
import { IMG_CDN_URL } from "./src/component/Header";
import Footer from "./src/component/Footer";
import Body from "./src/component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/Restaurantmenu";


const AppLayout = () => {
  return (

    <>

      <Header />
      <Outlet />
      <Footer />
      {/* {Header()} */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,

      },
    ],
  },

]);

const container = React.createElement("div", { id: "container", }, <AppLayout />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />); 