import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
          MainContainer
            - videoContainer
            - videoTitle
          SecondaryContainer
            - MovieList * N
              - cards * n      
       */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
