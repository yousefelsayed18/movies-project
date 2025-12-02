import { createContext, useEffect, useState } from "react";
import axios from "axios";

export let Moviescontext = createContext();

export default function MoviescontextProvider(props) {
  const [movies, setmovies] = useState([]);
  const [totalPages, settotalPages] = useState(0);

  // Get all movies
  async function getAllMovies() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ff0709cbbd6905ad7bfb14c0730e0007&language=ar&page=1`
    );

    setmovies(data.results);
    settotalPages(data.total_pages);
  }

  // Search movies
  async function searchByName(word) {
    if (word !== "") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=ff0709cbbd6905ad7bfb14c0730e0007&query=${word}&language=ar&page=1`
      );

      setmovies(data.results);
      settotalPages(data.total_pages);
    } else {
      getAllMovies();
    }
  }

  // Pagination
  async function getPage(page) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ff0709cbbd6905ad7bfb14c0730e0007&language=ar&page=${page}`
    );

    setmovies(data.results);
    settotalPages(data.total_pages);
  }



  return (
    <Moviescontext.Provider value={{ movies, totalPages, getAllMovies, searchByName, getPage  }}>
      {props.children}
    </Moviescontext.Provider>
  );
}
