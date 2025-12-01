import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Movielist from "./Components/Movielist/Movielist";
import Moviedetailes from "./Components/Moviedetails/Moviedetailes";
import MoviescontextProvider from "./Contexts/Moviescontext";
import 'flowbite';
function App() {
  const [count, setCount] = useState(0);

  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Movielist /> },
        { path: "moviedetails/:id", element: <Moviedetailes /> },
      ],
    },
  ]);
  return (
    <>
      <MoviescontextProvider>
        <RouterProvider router={x}></RouterProvider>
      </MoviescontextProvider>
    </>
  );
}

export default App;
