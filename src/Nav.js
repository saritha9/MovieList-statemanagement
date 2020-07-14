import React,{useContext} from "react";
import {MovieContext} from './MovieListContext';
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>User</h3>
      <p>List of Movies:{movies.length}</p>
    </div>
  );
};
export default Nav;
