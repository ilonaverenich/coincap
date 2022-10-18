import React from 'react'

function Pagination({totalPost,postPerPage,setCurrentPage,currentPage}) {
    let pages = [];
    for (let i=1; i<=Math.ceil(totalPost/postPerPage);i++){
        pages.push(i)
    }
  return (
    <div className='pagination'>
        {pages.map((page,index)=> {
            return <button className={page==currentPage?'active pagination-btn':'pagination-btn'} onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
        })}
        </div>
  )
}

export default Pagination