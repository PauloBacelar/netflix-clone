// Imports
import "./FeaturedMovie.css";

const FeaturedMovie = (props) => {
  console.log(props.featuredData.backdrop_path);
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
        <div className="featured__horizontal"></div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
