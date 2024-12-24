import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import Card from "./Card";
import { Container } from '@mui/material';
import CustomPagination from '../components/CustomPagination';



const Trending = () => {
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [page, setPage] = useState(1);
  const result=async () => {
    const {data}= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_APIKEY}&page=${page}`);

    console.log(data);
    setNumOfPages(data.total_pages);
    setContent(data.results);


  }
  useEffect(() => {
    window.scroll(0,0);
    result();
  
  }, [page])
  
  
  return (

    <Container className='mb-20 text-center'>
      <h1 className="text-center font-mono text-6xl font-bold m-4">Trending</h1>

    <div className='grid  gap-y-6 grid-cols-4 gap-x-6'>
      {content && content.map((index)=>{
        
        return <Card key={index.id} index={index}/>
      })}
     
   
    </div>
   <CustomPagination numOfPages={numOfPages} setPage={setPage}/>
      </Container>
  )
}

export default Trending;