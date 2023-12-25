import Rating from "@mui/material/Rating";
import GoogleIcon from "@mui/icons-material/Google";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./singleItemHeader.css";
import { DEFAULT_IMAGE } from "../../constants/constants";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SingleItemHeader({
  name,
  rating,
  genres,
  averageRuntime,
  premiered,
  views,
  image,
}) {
  const navigate = useNavigate();
  const handleGenreClick = (genre) => {
    navigate(`/shows?genre=${genre}`);
  };
  return (
    <div className="itemHeader">
      <div className="Title">
        <h1>{name}</h1>
        <div className="rating">
          {rating && rating.average !== null && (
            <p className="rating">
              <Rating
                name="read-only"
                value={rating.average / 2}
                max={5}
                size="medium"
                style={{ color: "rgba(209, 46, 39)" }}
                readOnly
              />
              <span className="number_rating">{rating.average.toFixed(1)}</span>
            </p>
          )}
        </div>
      </div>

      <div className="Genre">
        <a
          style={{ textDecoration: "none", cursor: "pointer" }}
          onClick={() => handleGenreClick(genres[0])}
          className="genreclick"
        >
          <span>{genres[0]}</span>
        </a>
      </div>

      <div className="info">
        <div className="google">
          <GoogleIcon style={{ color: "#fff", width: "15px" }} />
        </div>
        <span>{averageRuntime} min</span>
        <span style={{ color: "#D12E27", fontSize: "13px", marginTop: "3px" }}>
          ◉
        </span>
        <span>{premiered}</span>
        <span style={{ color: "#D12E27", fontSize: "13px", marginTop: "3px" }}>
          ◉
        </span>
        <span>👁 {views} views</span>
      </div>

      <div className="links">
        <div className="links_circle">
          <ShareIcon style={{ color: "#D12E27" }} />
        </div>
        <div className="links_circle">
          <FavoriteIcon style={{ color: "#D12E27" }} />
        </div>
        <div className="links_circle">
          <AddIcon style={{ color: "#D12E27" }} />
        </div>
      </div>

      <div className="tags">
        <LocalOfferIcon style={{ color: "#D12E27", fontSize: "20" }} />
        <span>tags:</span>
        <span>{genres.join(", ")}</span>
      </div>
      <div className="image">
        {image && <img src={image.medium || DEFAULT_IMAGE} alt={name} />}
        {!image && (
          <img
            src={DEFAULT_IMAGE}
            alt={name}
            style={{ marginLeft: "-30px", width: "20rem", height: "350px" }}
          />
        )}
      </div>
    </div>
  );
}

export default SingleItemHeader;
