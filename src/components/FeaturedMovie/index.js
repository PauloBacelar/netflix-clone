// Imports
import "./FeaturedMovie.css";

const FeaturedMovie = (props) => {
  const releaseDate = new Date(props.featuredData.first_air_date);
  const genres = [];

  props.featuredData.genres.map((genre) => {
    genres.push(genre.name);
  });

  let description = props.featuredData.overview;
  if (description.length >= 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.featuredData.backdrop_path})`,
      }}
    >
      <div className="featured__vertical">
        <div className="featured__horizontal">
          <div className="featured__name">
            {props.featuredData.original_name}
          </div>
          <div className="featured__info">
            <div className="featured__rating">
              {props.featuredData.vote_average
                ? Math.round(props.featuredData.vote_average * 10) + "% Match"
                : ""}
            </div>
            <div className="featured__year">{releaseDate.getFullYear()}</div>
            <div className="featured__seasons">
              {props.featuredData.number_of_seasons} season
              {props.featuredData.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured__description">{description}</div>
          <div className="featured__buttons">
            <a
              href={`/watch/${props.featuredData.id}`}
              className="featured__buttons--red"
            >
              ▶&nbsp;&nbsp;Play
            </a>
            <a
              href={`/list/add/${props.featuredData.id}`}
              className="featured__buttons--black"
            >
              + My list
            </a>
          </div>
          <div className="featured__genres">
            <strong>Genres: </strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
