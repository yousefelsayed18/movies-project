import React, { useEffect, useState } from "react";
import img1 from "../../images/1.webp";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Moviedetailes() {
  const [moviesCast, setmoviesCast] = useState([]);
  const [movie, setmovie] = useState([]);
  const params = useParams();
  // MovieDettailes
  async function getMovieDetails() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=ff0709cbbd6905ad7bfb14c0730e0007&language=ar`
    );
    setmovie(data);
  }
  // movieCast
  async function getCast() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=ff0709cbbd6905ad7bfb14c0730e0007&language=ar`
    );
    console.log(data.cast);
    setmoviesCast(data.cast);
  }
  useEffect(() => {
    getMovieDetails();
    getCast();
  }, []);

  return (
    <>
      <div className=" text-center ">
        <div className=" text-center bg-gray-200 w-[70%] rounded-2xl mt-7 m-auto ">
          <img
            className="m-auto text-center w-[300px] rounded-2xl pt-2.5"
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt=""
          />
          <div className=" pb-3">
            <h1 className=" text-2xl">اسم الفيلم:{movie.title}</h1>
            <h1 className=" text-2xl">تاريخ الفيلم:{movie.release_date}</h1>
            <h1 className=" text-2xl">عدد المقيمين:{movie.vote_count}</h1>
            <h1 className=" text-2xl">التقييم:{movie.vote_average}</h1>
          </div>
        </div>
      </div>
      <div className=" mt-10 bg-gray-200 w-[70%] h-[200px] rounded-2xl m-auto">
        <h1 className=" text-2xl">القصة:</h1>
        <p>قصة الفيلم:{movie.overview}</p>
        <div className=" m-auto flex flex-wrap align-middle justify-center gap-2 pt-2">
          <Link to={"/"}>
            <button
              type="button"
              className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              العودة للصفحة الرئيسية
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              type="button"
              className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              مشاهدة الفيلم
            </button>
          </a>
        </div>
      </div>
      {moviesCast.length >= 1 ? (
        <div className="w-[80%] mx-auto mt-10">
          <h2 className="text-3xl font-bold mb-5 text-center">طاقم التمثيل</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {moviesCast.slice(0, 10).map((actor) => (
              <div
                key={actor.id}
                className="bg-white rounded-xl shadow p-3 text-center"
              >
                <img
                  src={
                    actor.profile_path ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`:null
                  }
                  alt={actor.name}
                  className="rounded-lg w-full h-48 object-cover"
                />

                <h3 className="text-lg font-semibold mt-2">{actor.name}</h3>

                <p className="text-sm text-gray-500">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
