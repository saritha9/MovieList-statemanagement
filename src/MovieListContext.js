import React, { useState, createContext } from "react";


export const MovieListContext = createContext();
export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      is: 23124,
    },
    {
      name: "Game ofThrones",
      price: "$10",
      id: 2566124,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23444
    }
  ]);
  return (
    <MovieListContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieListContext.Provider>
  );
};
