import React, { useContext } from "react";
import { Moviescontext } from "../../Contexts/Moviescontext";

export default function Navbar() {
  let { searchByName } = useContext(Moviescontext);

  return (
    <nav className="bg-neutral-primary border-b border-default w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="md:hidden inline-flex items-center p-2 text-sm rounded-lg hover:bg-neutral-secondary-soft"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:block w-full">
          <div className="relative">


            <input
              onInput={(e) => searchByName(e.target.value)}
              type="text"
              className="block w-full pl-10 pr-3 py-2 bg-neutral-secondary-medium border rounded-lg"
              placeholder="ابحث..."
            />
          </div>
        </div>
      </div>
      <div id="navbar-search" className="hidden md:hidden px-4 pb-4">
        <input
          onInput={(e) => searchByName(e.target.value)}
          type="text"
          className="w-full bg-neutral-secondary-medium border rounded-lg px-3 py-2"
          placeholder="ابحث..."
        />
      </div>
    </nav>
  );
}
