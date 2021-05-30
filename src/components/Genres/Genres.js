import React, { useEffect } from "react";
import { Chip } from "@material-ui/core";
import axios from "axios";

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      setGenres(data?.genres || []);
      setPage(data?.total_pages || 1);
    };

    fetchMovies();

    return () => {
      setGenres([]); // unmounting
    };
  }, [setGenres, setPage, type]);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            id={genre.id}
            label={genre.name}
            style={{ margin: 2 }}
            clickable
            size="small"
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
