// Imports
import "./FeaturedMovie.css";

const FeaturedMovie = (props) => {
  const releaseDate = new Date(props.featuredData.first_air_date);
  const genres = [];

  props.featuredData.genres.map((genre) => {
    genres.push(genre.name);
  });

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
              Match {Math.round(props.featuredData.vote_average * 10)}%
            </div>
            <div className="featured__year">{releaseDate.getFullYear()}</div>
            <div className="featured__seasons">
              {props.featuredData.number_of_seasons} season
              {props.featuredData.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured__description">
            {props.featuredData.overview}
          </div>
          <div className="featured__buttons">
            <a href={`/watch/${props.featuredData.id}`}>▶ Play</a>
            <a href={`/list/add/${props.featuredData.id}`}>+ My list</a>
          </div>
          <div className="featured__genre">
            <strong>Genres: </strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
