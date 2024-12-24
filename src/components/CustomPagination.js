import { Pagination } from '@mui/material'
import React from 'react'

const CustomPagination = ({setPage,numOfPages}) => {
    const handlePage=(n)=>{
      
        setPage(n);
        window.scroll(0,0);

    }
  return (
    <div className='flex justify-center mt-8'>
<Pagination hideNextButton hidePrevButton count={numOfPages} onChange={(e)=>{handlePage(e.target.textContent);}} color="primary" />

    </div>
  )
}

export default CustomPagination