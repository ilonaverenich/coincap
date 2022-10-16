import React from 'react'

function Pagination({totalPost,postPerPage,setCurrentPage}) {
    let pages = [];
    for (let i=1; i<=Math.ceil(totalPost/postPerPage);i++){
        pages.push(i)
    }
    console.log(pages)
  return (
    <div className='pagination'>
        {pages.map((page,index)=> {
            return <button className='pagination-btn' onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
        })}
        </div>
  )
}

export default Pagination