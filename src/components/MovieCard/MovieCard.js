import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModal";

import "./MovieCard.css";

const MovieCard = ({ id, title, poster, date, mediaType, voteAverage }) => {
  return (
    <ContentModal id={id} className="movieCard" mediaType={mediaType}>
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
    </ContentModal>
  );
};

export default MovieCard;
