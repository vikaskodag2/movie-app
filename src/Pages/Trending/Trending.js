import axios from "axios";
import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard";

import "./Trending.css";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="trendingPage">
      <span className="pageTitle">Trending</span>
      <div className="trendingContent">
        {content &&
          content.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title || movie.name}
              poster={movie.poster_path}
              date={movie.release_date || movie.first_air_date}
              mediaType={movie.media_type}
              voteAverage={movie.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending;
