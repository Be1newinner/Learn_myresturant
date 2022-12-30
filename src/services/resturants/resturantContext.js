import React, { useEffect, useState, useContext, createContext } from "react";

import { resturantRequest } from "./resturantService";
import { LocationContext } from "../location/locationContext";

export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  // console.log(`new location is ${location}`);

  const retrieveResturants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      resturantRequest(loc)
        .then((r) => {
          setResturants(r);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 3000);
  };

  useEffect(() => {
    retrieveResturants(location);
    // console.log(location);
  }, [location]);

  return (
    <ResturantsContext.Provider
      value={{
        resturants,
        isLoading,
        error,
      }}
    >
      {children}
    </ResturantsContext.Provider>
  );
};
