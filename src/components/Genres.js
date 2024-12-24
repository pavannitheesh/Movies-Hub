import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Chip } from '@mui/material';
const Genres = ({genres,setgenres,selected,setselected,setPage}) => {

    const fetchResults=async()=>{
        const data=  await axios.get(`
        https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_APIKEY}`);
     
        setgenres(data.data.genres);
        
        
    }
    useEffect(() => {
        fetchResults();
        return()=>{
          setgenres([]);
        };
      
     
      }, []);

       const handleAdd=(c)=>{
        setselected([...selected,c]);

       setgenres(genres.filter((g)=> g.id!==c.id));
       setPage(1);

        
     }
      const handleDelete=(c)=>{
        setselected(selected.filter((g)=> g.id!==c.id));

        setgenres([...genres,c]);
        setPage(1);

      }
  return (
    <div className='my-6'>

        {selected.map((c)=>{
            return <Chip
                  key={c.id }
                  style={{ margin: 2 }}
                color="primary" 
                  label={c.name}
                  clickable 
                  onDelete={()=>{handleDelete(c)}}/>
        })}
        {genres.map((c)=>{
            return <Chip
                    key={c.id }  
                    style={{ margin: 2 }}
                    label={c.name}    
                    clickable
                    onClick={()=>handleAdd(c)} 
           />
        })}
    </div>
  )
}

export default Genres