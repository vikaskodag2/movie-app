import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";

import "./MovieCard.css";

const MovieCard = ({ id, title, poster, date, mediaType, voteAverage }) => {
  return (
    <div id={id} className="movieCard">
      <Badge
        badgeContent={voteAverage}
        color={voteAverage > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {mediaType === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default MovieCard;
