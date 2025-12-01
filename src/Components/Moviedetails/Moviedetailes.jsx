import React, { useEffect, useState } from "react";
import img1 from "../../images/1.webp";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Moviedetailes() {
  const [movie, setmovie] = useState([]);
  const params = useParams();
  console.log(params.id);
  async function getMovieDetails() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=ff0709cbbd6905ad7bfb14c0730e0007&language=ar`
    );
    console.log(data);

    setmovie(data);
  }
  useEffect(() => {
    getMovieDetails();
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
    </>
  );
}
