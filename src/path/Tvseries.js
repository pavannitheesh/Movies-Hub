import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import Card from "./Card";
import { Container } from '@mui/material';
import CustomPagination from '../components/CustomPagination';




const Tvseries = () => {
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [page, setPage] = useState(1);
  const result=async () => {
    const {data}= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_MOVIE_APIKEY}&page=${page}`);

    console.log(data);
    setNumOfPages(data.total_pages);
    setContent(data.results);


  }
  useEffect(() => {
    result();
  
  }, [page])
  
  
  return (

    <Container className='mb-20 text-center'>
      <h1 className="text-center font-mono text-6xl font-bold m-4">Tv Series</h1>

    <div className='grid  gap-y-6 grid-cols-4 gap-x-6'>
      {content && content.map((index)=>{
        
        return <Card key={index.id} index={index}/>
      })}
     
   
    </div>
   <CustomPagination numOfPages={numOfPages} setPage={setPage}/>
      </Container>
  )
}

export default Tvseries;