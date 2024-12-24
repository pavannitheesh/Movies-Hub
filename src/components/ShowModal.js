import React,{useEffect, useState} from 'react';


import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import "./Modal.css";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../path/config";
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';

const styl= {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    padding:'3'
  },
};

const ShowModal=({children,media="movie",id})=> {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState('');
  const fetchData = async () => {
    try{
    console.log('media_type:', media);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.REACT_APP_MOVIE_APIKEY}`
    );
   

    setContent(data);
    }
    catch (error) {
      console.error('Error fetching movies:', error);
    } 
  
  };

  const fetchVideo = async () => {
    try{
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_APIKEY}`
    );

    setVideo(data.results[0]?.key);
    }
    catch (error) {
      console.error('Error fetching videos:', error);
    } 
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={styl.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
       
        // slots={{ backdrop: Backdrop }}
        // slotProps={{
        //   backdrop: {
        //     timeout: 500,
        //   },
        // }}
      >
        <Fade in={open}>
          {/* <Box sx={style}>
           
            <Typography variant="h5">
            {index.title || index.name }
                </Typography>

          </Box> */}
         {content && (
            <div style={styl.paper}>
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  {/* <div>
                    <Carousel id={id} media_type={media_type} />
                  </div> */}

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="error"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      
      </Modal>
    </div>
  );
}
export default ShowModal;