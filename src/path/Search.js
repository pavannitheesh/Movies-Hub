import { Container, Tab, Tabs } from '@mui/material'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Card from './Card';
import CustomPagination from '../components/CustomPagination';

const Search = () => {
  const [type, settype] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [page, setPage] = useState(1);
  const result=async () => {
    const {data}= await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_MOVIE_APIKEY}&page=${page}&query=${searchText}`);

  
    setNumOfPages(data.total_pages);
    setContent(data.results);


  }
  useEffect(() => {
    window.scroll(0,0);
    result();
   
  
  }, [page,type]);


  return (
    <div>
      <Container>
      <div>
    <div className="container  flex justify-center mt-8 ">
        <div className="relative"> 
            <div className="absolute ">
                 <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
          <input type="text" className="h-14 w-96 text-white text-1xl pl-10 pr-20 bg-gray-600 rounded-lg z-0 focus:shadow focus:outline-none" onChange={(e)=>setSearchText(e.target.value)} placeholder="Search anything..."/>
            <div className="absolute top-2 right-2">
                
                <button className="h-10 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-600" onClick={result}>Search</button>
                
            </div>
        </div>
    </div>
</div>
<div className='mt-4 mb-4 flex justify-center'>
<Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            settype(newValue);
            setPage(1);
            
          }}
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
        </div>
        <div className='grid  gap-y-6 grid-cols-4 gap-x-6'>
        
      {content && content.map((index)=>{
        
        return <Card key={index.id} index={index}/>
      })}

      
      {
          searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
       
     
   
    </div>
    {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}




      </Container>


    </div>
  )
}

export default Search;