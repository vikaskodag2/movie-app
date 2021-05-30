import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import CustomPagination from "../../components/Pagination";
import Genres from "../../components/Genres";
import useGenre from "../../hooks/useGenre";

import "./Movies.css";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForURL = useGenre(selectedGenres);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
      );

      setContent(data?.results || []);
      setNumOfPages(data?.total_pages || 1);
    };

    fetchMovies();
  }, [page, genreForURL]);

  return (
    <div>
      <span className="pageTitle">Movies</span>

      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />

      <div className="movieContent">
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

      {numOfPages > 1 && (
        <CustomPagination
          totalPages={numOfPages}
          setPage={setPage}
          curPage={page}
        />
      )}
    </div>
  );
};

export default Movies;
