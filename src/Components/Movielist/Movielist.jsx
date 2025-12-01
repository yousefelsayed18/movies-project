import React, { useContext, useEffect } from "react";
import Cardlist from "../Cardlist/Cardlist";
import { Moviescontext } from "../../Contexts/Moviescontext";
import Paginaition from "../Paginaition/Paginaition";

export default function Movielist() {
  let { movies, getAllMovies } = useContext(Moviescontext);
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
        { movies.length>=1 ?  movies.map((movie) => (
          <Cardlist key={movie.id} movie={movie} />
        )):<h1 className=" text-2xl text-center">لا توجد افلام بهذا الاسم...</h1>}
      </div>
      {movies.length>=1?      <div className="flex justify-center pb-10">
        <Paginaition />
      </div>:null}
     
    </>
  );
}
