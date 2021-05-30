import axios from "axios";
import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard";
import CustomPagination from "../../components/Pagination";

import "./Trending.css";

const Trending = () => {
  const [content, setContent] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );

      setContent(data);
    };

    fetchTrending();
  }, [page]);

  return (
    <div className="trendingPage">
      <span className="pageTitle">Trending</span>
      <div className="trendingContent">
        {content &&
          content.results &&
          content.results.map((movie) => (
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
      <CustomPagination
        totalPages={content.total_pages}
        setPage={setPage}
        curPage={page}
      />
    </div>
  );
};

export default Trending;
