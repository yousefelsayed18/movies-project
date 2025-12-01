import React, { useContext } from 'react'
import { Moviescontext } from '../../Contexts/Moviescontext'

export default function Navbar() {
  let {searchByName} = useContext(Moviescontext)
  return (
    <>
     <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

          <div className="w-full md:order-2">

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
              onInput={(e)=>searchByName(e.target.value)}
                type="text"
                id="input-group-1"
                className="block w-full ps-9 pe-3 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body"
                placeholder="ابحث..."
              />
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>

            <div
              id="navbar-search"
              className="hidden w-full md:hidden mt-2"
            >
              <input
                type="text"
                className="w-full bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base px-2.5 py-2 shadow-xs placeholder:text-body"
                placeholder="ابحث..."
              />
            </div>

          </div>

        </div>
      </nav>
    
    </>
  )
}
