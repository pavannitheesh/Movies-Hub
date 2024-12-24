import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import Card from "./Card";
import { Container } from '@mui/material';
import CustomPagination from '../components/CustomPagination';
import Genres from './../components/Genres';

import genreUrl from './../useHooks/useGenre';


const Movies = () => {
  const [genres, setgenres] = useState([]);
  const [selected, setselected] = useState([]);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [page, setPage] = useState(1);

  //calling the genreUrl function;
  const genretype=genreUrl(selected);
  const result = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_APIKEY}&page=${page}&with_genres=${genreUrl(selected)}`
      );

      setNumOfPages(data.total_pages);
      setContent(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } 
  };
  useEffect(() => {
    window.scroll(0,0);
    result();
    
  
  }, [page,genretype])
  
  
  return (

    <Container className='mb-20 text-center'>
      <h1 className="text-center font-mono text-6xl font-bold m-4">Movies</h1>
      <Genres
        type="movie"
       selected={selected}
       setselected={setselected}
        genres={genres}
        setgenres={setgenres}
        setPage={setPage}
      />

    <div className='grid  gap-y-6 grid-cols-4 gap-x-6'>
      {content.length>0 && content.map((index)=>{
        
        return <Card key={index.id} index={index}/>
      })}
     
   
    </div>
   <CustomPagination numOfPages={numOfPages} setPage={setPage}/>
      </Container>
  )
}

export default Movies;