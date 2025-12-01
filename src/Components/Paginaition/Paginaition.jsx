import React, { useContext } from 'react'
import { Moviescontext } from '../../Contexts/Moviescontext'
import ReactPaginate from 'react-paginate';
export default function Paginaition() {
  let {getPage , totalPages} = useContext(Moviescontext)
 function handlePageClick(data){
    console.log(data.selected +1);
    getPage(data.selected +1)
    
  }
  return (
    <>
       <div className="flex justify-center mt-10">
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageCount={totalPages}
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        containerClassName="flex justify-center mt-10"
        pageClassName="border border-gray-300 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700"
        previousClassName="border border-gray-300 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700"
        nextClassName="border border-gray-300 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700"
        breakClassName="border border-gray-300 px-4 py-2 bg-white text-gray-700"
        pageLinkClassName="cursor-pointer"
        previousLinkClassName="cursor-pointer"
        nextLinkClassName="cursor-pointer"
        activeClassName="bg-blue-100 text-blue-700 font-semibold"
        renderOnZeroPageCount={null}
      />
    </div>
    
    
    </>
  )
}
