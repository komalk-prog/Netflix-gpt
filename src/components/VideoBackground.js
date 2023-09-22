import React, { useEffect } from "react";
import { API_OPTIONS, MAIN_MOVIE_TRALIER_API } from "../utils/constants";

const VideoBackground = ({movieId}) => {
  
  const getMovieTralier=async ()=>{
    const data = await fetch(MAIN_MOVIE_TRALIER_API,API_OPTIONS)
    const json=await data.json()
    console.log(json.results);
  }
  useEffect(()=>{
    getMovieTralier();
  },[])
  return <div>VideoBackground</div>;
};

export default VideoBackground;
