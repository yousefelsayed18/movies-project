import React, { useContext, useEffect, useState } from "react";
import Cardlist from "../Cardlist/Cardlist";
import { Moviescontext } from "../../Contexts/Moviescontext";
import Paginaition from "../Paginaition/Paginaition";

export default function Movielist() {
  const [isLoading, setIsLoading] = useState(true);
  let { movies, getAllMovies } = useContext(Moviescontext);

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
       getAllMovies();
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center py-20">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
            {movies.length >= 1 ? (
              movies.map((movie) => <Cardlist key={movie.id} movie={movie} />)
            ) : (
              <h1 className="text-2xl text-center col-span-full">لا توجد أفلام بهذا الاسم...</h1>
            )}
          </div>

          {movies.length >= 1 && (
            <div className="flex justify-center pb-10">
              <Paginaition />
            </div>
          )}
        </>
      )}
    </>
  );
}
