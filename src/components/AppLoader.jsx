import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const AppLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    window.addEventListener("load", finishLoading);
    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return loading ? <Loader /> : children;
};

export default AppLoader;
