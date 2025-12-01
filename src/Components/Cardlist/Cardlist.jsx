import React from "react";
import img1 from "../../images/1.webp";
import { Link } from "react-router-dom";
export default function Cardlist({ movie }) {
  return (
    <Link to={`moviedetails/${movie.id}`}>
        <div
      className="bg-neutral-primary-soft border border-default rounded-base shadow-xs 
        card-image relative card 
        w-full overflow-hidden 
        hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      <div
        className="layer absolute top-0 right-0 left-0 text-center 
          flex justify-center items-center flex-col gap-2
          bg-black/60 opacity-0 hover:opacity-100 transition-all duration-300 h-full"
      >
        <h1 className="text-white text-base">اسم الفيلم:{movie.title}</h1>
        <h1 className="text-white text-base">
          تاريخ الإصدار:{movie.release_date}
        </h1>
        <h1 className="text-white text-base">
          عدد المقيمين:{movie.vote_count}
        </h1>
        <h1 className="text-white text-base">التقييم:{movie.vote_average}</h1>
      </div>

      <img
        className="rounded-t-base w-full h-full"
        src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
        alt="movie"
      />
    </div>
    </Link>


  );
}
