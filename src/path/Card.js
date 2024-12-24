import React from 'react'
import {  img_300} from "./config";
import { Badge } from '@mui/material';
import ShowModal from '../components/ShowModal';



const Card = ({index}) => {

  return (
     


  
        <ShowModal media={index.media_type} id={index.id}>

      



<Badge anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }} badgeContent={index.vote_average} color="primary">
<div className="block rounded-2xl bg-white shadow-md dark:bg-neutral-700 text-center">

 
  <a href="#!" >
    <img className="rounded-t-2xl" src={img_300.concat(`${index.poster_path}`)} alt="" />
  </a>


  <div className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
    <h5 className="flex items-center justify-center text-neutral-500 dark:text-neutral-300">
      <span className="mr-2">
      {index.release_date}
      </span>
      <span
        className="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-blue-700">
       {index.media_type === "tv" ? "TV Series" : "Movie"}
      </span>
    </h5>
  </div>


  <div className="p-6">

  
    <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
    {index.title || index.name}
    </h5>

  </div>

</div>
</Badge>

    
</ShowModal>

  )
}

export default Card;